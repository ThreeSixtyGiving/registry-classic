from datetime import datetime
import json
import os
from typing import Dict, List
from random import randrange

from flask import Flask, render_template, current_app, url_for, redirect
from raven.contrib.flask import Sentry

from registry.registry import get_data_sorted_by_prefix, get_schema_org_list, get_raw_data
from registry.salesforce import get_salesforce_data

app = Flask(
    __name__,
    static_url_path='',
    static_folder='./static',
    template_folder='./templates',
)
sentry = Sentry(app)


@app.context_processor
def inject_footer_menu():
    with open(os.path.join(os.path.dirname(__file__), 'footer.json')) as a:
        return dict(
            settings360=json.load(a),
            now=datetime.now(),
        )


@app.route('/')
def home():
    return redirect(url_for('data_dashboard'))


@app.route('/dashboard_data')
def get_data():
    return {
        'publisher': {
            'recipient_location': randrange(100),
            'beneficiary_location_names': randrange(100),
            'charity_numbers': randrange(100),
            'external_identifiers_95': randrange(100),
        },
        'org_info_graph': 
            dict(
                labels = ["10%","20%","30%","40%","50%","60%","70%","80%","90%","100%"],
                data = [20, 10, 0, 50, 30, 60, 65, 80, 20, 90]
            )
        }


@app.route('/dashboard')
def data_dashboard():

    data = get_data()

    return render_template(
        'dashboard.html',
        data=data
    )


@app.route('/publishers')
def data_registry():
    raw_data = get_raw_data()
    data = get_data_sorted_by_prefix(raw_data)
    schema = get_schema_org_list(raw_data)

    return render_template(
        'publishers.html',
        data=data,
        schema=schema,
        num_of_publishers=len(data)
    )


@app.route('/terms-conditions')
def terms_and_conditions():
    return render_template('terms.html')


@app.route('/data.json')
def salesforce_data():
    data = get_salesforce_data()
    return current_app.response_class(data, mimetype="application/json")


@app.route('/500')
def test_500_error():
    """
    Function to test a 500 error.
    """
    raise Exception
