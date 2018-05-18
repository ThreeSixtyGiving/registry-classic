from flask import Flask, render_template
import requests
from collections import OrderedDict

app = Flask(
    __name__,
    static_url_path='',
    static_folder='./static',
    template_folder='./templates',
)


def get_prefix_data(data):
    return {
        'publisher': {
            'name': data['publisher']['name'],
            'logo': data['publisher']['logo']
        },
        'license': {
            'url': data['license'],
            'name': data['license_name']
        },
        'grant': []
    }


def get_grant_data(data):
    return {
        'url': data['distribution'][0]['downloadURL'],
        'name': data['distribution'][0]['title']
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


@app.route('/data/data-registry')
def data_registry():
    raw_data = requests.get('http://data.threesixtygiving.org/data.json').json()

    return render_template(
        'registry.html',
        data=get_data_by_prefix(raw_data) if raw_data else None
    )
