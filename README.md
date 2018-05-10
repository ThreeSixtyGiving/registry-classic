# 360Giving Registry

Install dependencies:

```
$ python3 -m virtualenv -p $(which python3) .ve
$ source .ve/bin/activate
$ pip install -r requirements.txt
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
