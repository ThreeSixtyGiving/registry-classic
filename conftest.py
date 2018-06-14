import pytest

from registry.views import app as flask_app


@pytest.fixture
def app():
    return flask_app
