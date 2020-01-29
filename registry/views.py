from datetime import datetime

from flask import Flask, render_template, current_app
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
def inject_current_time():
    return dict(now=datetime.now())


@app.route('/')
def data_registry():
    raw_data = get_raw_data()
    data = get_data_sorted_by_prefix(raw_data)
    schema = get_schema_org_list(raw_data)

    return render_template(
        'registry.html',
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
