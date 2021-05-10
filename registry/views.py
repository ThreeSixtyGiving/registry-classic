from datetime import datetime
import json
import os
from typing import Dict, List
from random import randrange

from flask import Flask, render_template, current_app, url_for, redirect, request
from raven.contrib.flask import Sentry

from registry.salesforce import get_salesforce_data
from registry.datastore import get_publisher_json

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
            ),
        }


@app.route('/dashboard')
def data_dashboard():

    stats = get_data()

    return render_template(
        'dashboard.html',
        stats=stats
    )


@app.route('/publishers')
def data_registry():
    stats = get_data()
    data = get_publisher_json()

    return render_template(
        'publishers.html',
        stats=stats,
        publishers=data,
        num_of_publishers=len(data)
    )


@app.route('/publisher_list')
def publisher_list(args={}):
        searchTerm = request.args.get('search')
        args['search'] = searchTerm
        data = get_publisher_json(args)
        return render_template('_parts/publisher_list.html',
            publishers=data
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
