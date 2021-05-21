from datetime import datetime
import json
import os

from flask import Flask, render_template, current_app
from raven.contrib.flask import Sentry

from registry.registry import get_data_sorted_by_prefix, get_schema_org_list, get_raw_data
from registry.salesforce import get_salesforce_data


# template_dir = os.path.abspath('./dist')
# static_dir = os.path.abspath('./dist/static')

app = Flask(__name__,
            # static_folder = static_dir,
            # template_folder = template_dir,
            )

sentry = Sentry(app)


@app.context_processor
def inject_footer_menu():
    with open(os.path.join(os.path.dirname(__file__), 'footer.json')) as a:
        return dict(
            settings360=json.load(a),
            now=datetime.now(),
        )

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def data_registry(path):
    return render_template("index.html")

@app.route('/backup')
def backup_app():
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
