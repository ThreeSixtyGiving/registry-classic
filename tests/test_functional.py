import os

from flask import url_for
import pytest
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

from registry.views import get_data_by_prefix
from tests.samples.registry_raw_data import RAW_DATA

BROWSER = os.environ.get('BROWSER', 'ChromeHeadless')


@pytest.fixture(scope="module")
def browser(request):
    if BROWSER == 'ChromeHeadless':
        chrome_options = Options()
        chrome_options.add_argument("--headless")
        browser = webdriver.Chrome(chrome_options=chrome_options)
    else:
        browser = getattr(webdriver, BROWSER)()
    browser.implicitly_wait(3)
    request.addfinalizer(lambda: browser.quit())
    return browser


@pytest.fixture(scope="module")
def dataload():
    get_data_by_prefix(RAW_DATA)


@pytest.mark.usefixtures('live_server')
def test_nav_menu(dataload, browser):
    browser.get(url_for('data_registry', _external=True))

    assert 'MENU' in browser.find_element_by_tag_name('body').text
