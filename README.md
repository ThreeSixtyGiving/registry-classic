# 360Giving Registry

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
