import json
import os
from urllib.parse import urlparse

from simple_salesforce import Salesforce

salesforce = Salesforce(
    username='360support@opendataservices.coop',
    password=os.environ['SALESFORCE_PASSWORD'],
    security_token=os.environ['SALESFORCE_SECURITY_TOKEN']
)


def clean_object(obj):
    new_obj = {}

    obj.pop("attributes", None)
    for key, value in obj.items():
        new_key = key.replace("__c", "").replace("__r", "").replace("_", "")
        new_key = new_key[:1].lower() + new_key[1:] if new_key else ''
        new_obj[new_key] = value
    return new_obj


def clean_output(api_output):
    datasets = []

    for dataset in api_output['records']:
        if dataset['Approved__c']:
            clean_dataset = clean_object(dataset)
            clean_dataset["license"] = clean_object(clean_dataset["license"])
            clean_dataset["publisher"] = clean_object(clean_dataset["account"])
            clean_dataset["publisher"]["domain"] = urlparse(clean_dataset["publisher"]["website"]).netloc
            clean_dataset.pop("account")
            datasets.append(clean_dataset)

    return datasets


def get_salesforce_data():
    sf_query = "SELECT Id, Name, License__r.Name, License__r.URL__c, Access_URL__c, Description__c, Download_URL__c," \
            "Account__r.Id, Account__r.Logo__c, Account__r.Name, Account__r.Website, Account__r.prefix__c," \
            "Date_First_Published__c, LastModifiedDate, Approved__c from Dataset__c ORDER BY Account__r.Name"
    output = clean_output(salesforce.query(sf_query))

    return json.dumps(output, sort_keys=True, indent=2)
