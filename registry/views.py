import os
from collections import OrderedDict

import requests
from flask import Flask, render_template
from raven.contrib.flask import Sentry

from tests.samples.registry_raw_data import RAW_DATA

app = Flask(
    __name__,
    static_url_path='',
    static_folder='./static',
    template_folder='./templates',
)
sentry = Sentry(app)


def get_currency_symbol(currency, data):
    """
    :param currency: currency code (eg. GBP).
    :param data:
    {
        "count": 6263,
        "currency_symbol": "&pound;",
        "max_amount": 3466000,
        "min_amount": 271,
        "total_amount": 257947904
    }
    """
    if not data['currency_symbol']:
        return currency
    return data['currency_symbol']


def format_value(value):
    """
    Format value from 492793844.650000003 to 492,793,844.65
    """
    if type(value) == float:
        value = float(format(value, '.2f'))

    return "{:,}".format(value)


def get_total_amount_awarded(data_by_currency):
    """
    :param data_by_currency:
    {
        "count": 6263,
        "currency_symbol": "&pound;",
        "max_amount": 3466000,
        "min_amount": 271,
        "total_amount": 257947904
    }

    :return: currency + total value (eg. '&pound; 257,947,904').
    """
    # TODO TEST
    total_amount = []

    if data_by_currency:
        for currency, data in data_by_currency.items():
            total_amount.append('{} {}'.format(
                get_currency_symbol(currency, data),
                format_value(data['total_amount'])
            ))
    return total_amount


def get_check_cross_symbol(boolean_data):
    """
    :param boolean_data: Boolean.
    :return: 'tick' if true, 'cross' if False else ''.
    """
    if boolean_data is True:
        return '&#x2713;'
    if boolean_data is False:
        return '&#x2715;'
    return ''


def get_file_type(file_type):
    if file_type not in ['csv', 'json', 'xlsx']:
        return 'file'
    return file_type


def get_licence(data, acceptable_license):
    if not acceptable_license:
        return '&#x2715;'

    licence_name = data['license_name']
    image_name = False
    if 'Creative Commons' in licence_name:
        if 'Share-Alike ' in licence_name:
            image_name = 'cc_by_sa'
        else:
            image_name = 'cc_by'
    elif 'CCO' in licence_name:
        image_name = 'cc_pd'
    elif 'Open Government Licence' in licence_name:
        image_name = 'ogl'
    elif 'Open Data Commons' in licence_name:
        image_name = 'pddl'

    if image_name:
        return "<a href=\"{}\"><img src=\"../images/licences/{}.png\" width='80' height='31'></a>".format(
            data['license'], image_name
        )
    return licence_name


def get_prefix_data(data):
    return {
        'publisher': {
            'name': data['publisher']['name'],
            'logo': data['publisher']['logo']
        },
        'grant': []
    }


def get_grant_data(data):
    # TODO TEST
    data_aggregates = data.get('datagetter_aggregates')
    data_metadata = data.get('datagetter_metadata')

    return {
        'file': {
            'url': data['distribution'][0]['downloadURL'],
            'type': get_file_type(data_metadata['file_type']),
            'available': data_metadata.get('downloads')
        },
        'licence': get_licence(data, data_metadata.get('acceptable_license')),
        'num_recipients': format_value(data_aggregates.get('distinct_recipient_org_identifier_count')) if data_aggregates else '',
        'num_awards': format_value(data_aggregates.get('count')) if data_aggregates else '',
        'total_amount_awarded': get_total_amount_awarded(data_aggregates.get('currencies') if data_aggregates else None),
        'first_date': data_aggregates.get('min_award_date') if data_aggregates else '',
        'last_date': data_aggregates.get('max_award_date') if data_aggregates else '',
        'issued_date': data.get('issued'),
        'modified_date': data.get('modified').split('T')[0],
        'valid': get_check_cross_symbol(data_metadata.get('valid')),
    }


def get_data_by_prefix(raw_data):
    # TODO update docstring.
    """
    Given a json value where publishers can have more than one entry,
    this function creates a new dictionary keyed by publisher prefix.
    Sample output:
    {
        'prefix': {
            'publisher': {
                'name': string,
                'logo': url of the logo,
            },
            'license': {
                'url': url of the license,
                'name': string,
            },
            'grant': [{
                'url': url of the grant,
                'name': string,
            }]
        }
    }
    """
    data_by_prefix = {}

    for data in raw_data:
        prefix = data['publisher']['prefix']

        if prefix not in data_by_prefix:
            data_by_prefix[prefix] = get_prefix_data(data)

        data_by_prefix[prefix]['grant'].append(get_grant_data(data))

    return OrderedDict(sorted(data_by_prefix.items(), key=lambda x: x[1]['publisher']['name']))


def get_raw_data():
    if os.environ.get('FLASK_ENV') == 'development':
        return RAW_DATA

    return requests.get('https://storage.googleapis.com/datagetter-360giving-output/branch/master/status.json').json()


@app.route('/')
def data_registry():
    raw_data = get_raw_data()

    return render_template(
        'registry.html',
        data=get_data_by_prefix(raw_data) if raw_data else None
    )


@app.route('/terms-conditions')
def terms_and_conditions():
    return render_template('terms.html')


@app.route('/500')
def test_500_error():
    """
    Function to test a 500 error.
    """
    raise Exception
