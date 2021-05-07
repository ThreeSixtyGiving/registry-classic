import requests

DEV_DATASTORE_ENDPOINT = "http://store.dev.default.threesixtygiving.uk0.bigv.io/api/dashboard/publishers?format=json"

def get_publisher_json():
      return requests.get(DEV_DATASTORE_ENDPOINT).json()

