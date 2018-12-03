# 360Giving Registry

The [360Giving Registry](http://data.threesixtygiving.org) lists files that use the [360Giving Standard](http://standard.threesixtygiving.org). The list of files is maintained by 360Giving, and this repo contains the source code for the website that obtains the listing from 360Giving (via the Salesforce API) and presents it as a website. The live website is updated once a day from this repo, unless manually triggered.

Install dependencies:

```
$ python3 -m venv .ve
$ source .ve/bin/activate
$ pip install -r requirements_dev.txt
```

Run:

Server
```
$ export FLASK_APP=registry/views.py
$ python -m flask run
```

Tests
```
$ python -m pytest
```
