import os
from collections import OrderedDict
from datetime import datetime

import humanize
import requests
from flask import Markup

from tests.samples.registry_raw_data import RAW_DATA


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
    if not data.get('currency_symbol'):
        return currency
    return data['currency_symbol']


def format_value(value, to_round=False):
    """
    Format value from 492793844.650000003 to 492,793,844.65
    If to_round=True, the value gets rounded.
    """
    if value and type(value) == float or type(value) == int:
        if type(value) == float:
            if to_round:
                value = round(value)
            else:
                value = float(format(value, '.2f'))
        return "{:,}".format(value)
    return value


def format_date(date):
    """
    :param date: string (yyyy-mm-dd)
    :return: string (eg. Jun '18)
    """
    try:
        return datetime.strptime(date, '%Y-%m-%d').strftime('%b \'%y')
    except ValueError:
        return date


def get_total_value(data_by_currency):
    """
    :param data_by_currency:
    {
        "GBP":
            {
                "count": 6263,
                "currency_symbol": "&pound;",
                "max_amount": 3466000,
                "min_amount": 271,
                "total_amount": 257947904
            },
        "CHF":
            {...}
    }

    :return: currency + total value (eg. '&pound; 257,947,904').
    """
    total_value = []

    if data_by_currency:
        for currency, data in data_by_currency.items():
            total_amount = data.get('total_amount')

            if total_amount and total_amount is not None:
                total_value.append('{} {}'.format(
                    get_currency_symbol(currency, data),
                    format_value(value=total_amount, to_round=True)
                ))
    return total_value


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


def get_licence(name, url, acceptable):
    if not acceptable:
        return '&#x2715;'

    licences = {
        'CCO': 'cc_pd',
        'Creative Commons Attribution 4.0': 'cc_by',
        'Creative Commons Attribution 4.0 International (CC BY 4.0)': 'cc_by',
        'Creative Commons Attribution Share-Alike 4.0': 'cc_by_sa',
        'Open Data Commons Public Domain Dedication and Licence 1.0': 'pddl',
        'Open Government Licence 3.0 (United Kingdom)': 'ogl'
    }

    if licences.get(name):
        return Markup("<a href=\"{}\"><img src=\"../images/licences/{}.png\" width='70' height='27'></a>").format(
            url, licences.get(name))
    if name and url:
        return Markup("<a href=\"{}\">{}</a>").format(url, name)
    return name


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
    file_size = data_metadata.get('file_size')

    return {
        'file': {
            'title': data['distribution'][0]['title'],
            'url': data['distribution'][0]['downloadURL'],
            'type': get_file_type(data_metadata.get('file_type')),
            'size': humanize.naturalsize(file_size) if file_size else '-',
            'available': data_metadata.get('downloads')
        },
        'licence': get_licence(
            data['license_name'], data['license'], data_metadata.get('acceptable_license')),
        'total_value': get_total_value(data_aggregates.get('currencies') if data_aggregates else None),
        'records': format_value(data_aggregates['count'] if data_aggregates else None),
        'period': {
            'first_date': format_date(data_aggregates.get('min_award_date')) if data_aggregates else '',
            'latest_date': format_date(data_aggregates.get('max_award_date')) if data_aggregates else ''
        },
        'issued_date': format_date(data.get('issued')),
        'valid': get_check_cross_symbol(data_metadata.get('valid')),
    }


def get_data_by_prefix(raw_data):
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
            'grant': [{
                'file': {
                    'title': string,
                    'url': string,
                    'type': string (eg. 'csv'),
                    'available': boolean,
                },
                'licence': html code string with licence information,
                'total_value': string with a float or integer,
                'records': string with an integer,
                'period': {
                    'first_date': string with a date,
                    'latest_date': string with a date
                },
                'issued_date': string with a date,
                'valid': tick or cross html symbols,
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

    return data_by_prefix


def sort_data(data_by_prefix):
    """
    Sort grants first by publisher name and, and then by year of the latest date.
    """
    for prefix in data_by_prefix:
        sort_by_grant_latest_date = sorted(
            data_by_prefix[prefix]['grant'], key=lambda x: x['period']['latest_date'].split("'")[-1], reverse=True
        )
        data_by_prefix[prefix]['grant'] = sort_by_grant_latest_date

    sort_by_publisher_name = sorted(data_by_prefix.items(), key=lambda x: x[1]['publisher']['name'])

    return OrderedDict(sort_by_publisher_name)


def get_raw_data():
    if os.environ.get('FLASK_ENV') == 'development':
        return RAW_DATA

    return requests.get('https://storage.googleapis.com/datagetter-360giving-output/branch/master/status.json').json()


def get_data_sorted_by_prefix():
    raw_data = get_raw_data()
    data_by_prefix = get_data_by_prefix(raw_data) if raw_data else None
    return sort_data(data_by_prefix)
