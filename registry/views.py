from flask import Flask, render_template
import requests

app = Flask(
    __name__,
    static_url_path='',
    template_folder='./templates',
)


@app.route('/data/data-registry')
def data_registry():
    data = requests.get('http://data.threesixtygiving.org/data.json').json()

    return render_template(
        'registry.html',
        data=data
    )
