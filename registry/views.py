from flask import Flask, render_template, current_app
from raven.contrib.flask import Sentry

from registry.registry import get_raw_data, get_data_by_prefix
from registry.salesforce import get_salesforce_data

app = Flask(
    __name__,
    static_url_path='',
    static_folder='./static',
    template_folder='./templates',
)
sentry = Sentry(app)


@app.route('/')
def data_registry():
    raw_data = get_raw_data()
    data_by_prefix = get_data_by_prefix(raw_data) if raw_data else None

    return render_template(
        'registry.html',
        data=data_by_prefix,
        num_of_publishers=len(data_by_prefix)
    )


@app.route('/terms-conditions')
def terms_and_conditions():
    return render_template('terms.html')


@app.route('/data.json')
def salesforce_data():
    try:
        data = get_salesforce_data()
    except AttributeError:
        return 'Please check that the access keys to Salesforce are correct.'
    return current_app.response_class(data, mimetype="application/json")


@app.route('/500')
def test_500_error():
    """
    Function to test a 500 error.
    """
    raise Exception
