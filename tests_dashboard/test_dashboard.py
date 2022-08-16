import os
import pytest
from flask import url_for
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By


os.environ['FLASK_ENV'] = 'development'
BROWSER = os.environ.get('BROWSER', 'ChromeHeadless')


@pytest.fixture(scope="module")
def browser(request):
    if BROWSER == 'ChromeHeadless':
        chrome_options = Options()
        chrome_options.add_argument("--headless")
        chrome_options.add_argument("--no-sandbox")
        chrome_options.add_argument("--disable-dev-shm-usage")
        browser = webdriver.Chrome(options=chrome_options)
    else:
        browser = getattr(webdriver, BROWSER)()

    browser.implicitly_wait(3)
    request.addfinalizer(lambda: browser.quit())
    return browser


@pytest.mark.usefixtures('live_server')
def test_default_titles(browser):
    browser.get(url_for('dashboard', _external=True) + 'publishers/')
    title = browser.find_elements(By.CLASS_NAME, 'dashboard-publisher-result__title')
    assert title[0].get_attribute("innerHTML") == ' A B Charitable Trust '
    assert title[1].get_attribute("innerHTML") == ' Access to Justice Foundation '


@pytest.mark.usefixtures('live_server')
def test_filtered_titles(browser):
    browser.get(url_for('dashboard', _external=True) + 'publishers?publisherParams=360G-BNG&publisherParams=360G-coopgroup')
    title = browser.find_elements(By.CLASS_NAME, 'dashboard-publisher-result__title')
    
    assert title[0].get_attribute("innerHTML") == ' Bòrd na Gàidhlig '
    assert title[1].get_attribute("innerHTML") == ' Co-operative Group '
