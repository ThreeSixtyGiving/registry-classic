from flask import Flask, render_template
from raven.contrib.flask import Sentry

from .registry import get_raw_data, get_data_by_prefix

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
