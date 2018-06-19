import os

import pytest
from flask import url_for
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.action_chains import ActionChains

os.environ['FLASK_ENV'] = 'development'
BROWSER = os.environ.get('BROWSER', 'ChromeHeadless')


@pytest.fixture(scope="module")
def browser(request):
    if BROWSER == 'ChromeHeadless':
        chrome_options = Options()
        chrome_options.add_argument("--headless")
        chrome_options.add_argument("--no-sandbox")
        chrome_options.add_argument("--disable-dev-shm-usage")
        browser = webdriver.Chrome(chrome_options=chrome_options)
    else:
        browser = getattr(webdriver, BROWSER)()
    browser.implicitly_wait(3)
    request.addfinalizer(lambda: browser.quit())
    return browser


@pytest.mark.usefixtures('live_server')
def hover_over_the_menu(browser):
    browser.get(url_for('data_registry', _external=True))
    element = browser.find_element_by_id('menu')
    hover = ActionChains(browser).move_to_element(element)
    hover.perform()


@pytest.mark.usefixtures('live_server')
def test_nav_menu(browser):
    browser.get(url_for('data_registry', _external=True))

    text_body = browser.find_element_by_tag_name('body').text

    assert 'MENU' in text_body
    assert 'Home' not in text_body
    assert 'The 360Giving Standard' not in text_body
    assert 'Discussion Forum' not in text_body


@pytest.mark.usefixtures('live_server')
def test_nav_menu_hover(browser):
    hover_over_the_menu(browser)

    text_body = browser.find_element_by_tag_name('body').text

    assert 'MENU' in text_body
    assert 'Home' in text_body
    assert 'The 360Giving Standard' in text_body
    assert 'Discussion Forum' in text_body


@pytest.mark.usefixtures('live_server')
def test_nav_menu_home_link(browser):
    hover_over_the_menu(browser)

    browser.find_element_by_link_text('Home').click()

    assert browser.current_url == 'http://www.threesixtygiving.org/'


@pytest.mark.usefixtures('live_server')
def test_nav_menu_standard_link(browser):
    hover_over_the_menu(browser)

    browser.find_element_by_link_text('The 360Giving Standard').click()

    assert browser.current_url == 'http://www.threesixtygiving.org/support/standard/'


@pytest.mark.usefixtures('live_server')
def test_nav_menu_forum_link(browser):
    hover_over_the_menu(browser)

    browser.find_element_by_link_text('Discussion Forum').click()

    assert browser.current_url == 'https://forum.threesixtygiving.org/'


@pytest.mark.usefixtures('live_server')
def test_body_h1(browser):
    browser.get(url_for('data_registry', _external=True))

    assert 'DATA REGISTRY' in browser.find_element_by_tag_name('body').text


@pytest.mark.usefixtures('live_server')
@pytest.mark.parametrize('link_text', [
    'Tools & Projects',
    'http://standard.threesixtygiving.org/en/latest/getdata/',
    'contact us',
    ])
def test_body_links(browser, link_text):
    browser.get(url_for('data_registry', _external=True))
    browser.find_element_by_link_text(link_text)


@pytest.mark.usefixtures('live_server')
def test_body_tools_and_projects_link(browser):
    browser.get(url_for('data_registry', _external=True))

    browser.find_element_by_link_text('Tools & Projects').click()
    browser.switch_to.window(browser.window_handles[1])

    assert browser.current_url == 'http://www.threesixtygiving.org/data/find-data/'

    browser.close()
    browser.switch_to.window(browser.window_handles[0])


@pytest.mark.usefixtures('live_server')
def test_body_get_data_link(browser):
    browser.get(url_for('data_registry', _external=True))

    browser.find_element_by_link_text('http://standard.threesixtygiving.org/en/latest/getdata/').click()
    browser.switch_to.window(browser.window_handles[1])

    assert browser.current_url == 'http://standard.threesixtygiving.org/en/latest/getdata/'

    browser.close()
    browser.switch_to.window(browser.window_handles[0])


@pytest.mark.usefixtures('live_server')
def test_body_contact_us_link(browser):
    browser.get(url_for('data_registry', _external=True))

    browser.find_element_by_link_text('contact us').click()
    browser.switch_to.window(browser.window_handles[1])

    assert browser.current_url == 'http://www.threesixtygiving.org/contact/'

    browser.close()
    browser.switch_to.window(browser.window_handles[0])


@pytest.mark.usefixtures('live_server')
@pytest.mark.parametrize('table_heading_text', [
    'Logo',
    'Organisation',
    'Data',
    'License',
    ])
def test_table_heading(browser, table_heading_text):
    browser.get(url_for('data_registry', _external=True))

    table_headings_text = []
    for table_heading in browser.find_elements_by_tag_name('th'):
        table_headings_text.append(table_heading.text)

    assert table_heading_text in table_headings_text


@pytest.mark.usefixtures('live_server')
def test_table_data(browser):
    browser.get(url_for('data_registry', _external=True))

    table_data_text = []
    for table_data in browser.find_elements_by_tag_name('td'):
        table_data_text.append(table_data.text)

    assert len(table_data_text) == 12
    assert table_data_text[0:4] == [
        '',
        'BBC Children in Need',
        'BBC Children in Need grants',
        'Creative Commons Attribution 4.0'
    ]
    assert table_data_text[4:8] == [
        '',
        'Big Lottery Fund',
        'Big Lottery Fund - grants data 2015 to 2017\nBig Lottery Fund - grants data 2017-18 year-to-date',
        'Open Government Licence 3.0 (United Kingdom)'
    ]
    assert table_data_text[8:13] == [
        '',
        'The Corra Foundation, previously called Lloyds TSB Foundation for Scotland',
        'Grants awarded since 2015, as at 31 December 2017',
        'Creative Commons Attribution 4.0 International (CC BY 4.0)'
    ]


@pytest.mark.usefixtures('live_server')
def test_table_logos(browser):
    browser.get(url_for('data_registry', _external=True))

    table_data_logos = []
    for table_logo in browser.find_elements_by_css_selector('img.tlogo'):
        table_data_logos.append(table_logo.get_attribute("src"))

    assert len(table_data_logos) == 2
    assert table_data_logos == [
        'http://www.threesixtygiving.org/wp-content/uploads/BBCCiN_CoreLogo.png',
        'http://www.threesixtygiving.org/wp-content/uploads/big-lottery-fund.png'
    ]


@pytest.mark.usefixtures('live_server')
@pytest.mark.parametrize('link_text', [
    'Terms & Conditions',
    'Take Down Policy',
    'License',
    ])
def test_footer_links(browser, link_text):
    browser.get(url_for('data_registry', _external=True))
    browser.find_element_by_link_text(link_text)


@pytest.mark.usefixtures('live_server')
def test_footer_terms_and_conditions_link(browser, live_server):
    hover_over_the_menu(browser)

    browser.find_element_by_link_text('Terms & Conditions').click()

    assert browser.current_url == live_server.url() + '/terms-conditions'
    assert 'Terms & Conditions' in browser.find_element_by_tag_name('h1').text


@pytest.mark.usefixtures('live_server')
def test_footer_take_down_policy_link(browser):
    hover_over_the_menu(browser)

    browser.find_element_by_link_text('Take Down Policy').click()

    assert browser.current_url == 'http://www.threesixtygiving.org/take-down-policy/'


@pytest.mark.usefixtures('live_server')
def test_footer_license_link(browser):
    hover_over_the_menu(browser)

    browser.find_element_by_link_text('License').click()

    assert browser.current_url == 'https://creativecommons.org/licenses/by/4.0/'


@pytest.mark.usefixtures('live_server')
@pytest.mark.parametrize('contact_text', [
    '020 3752 5775',
    'info@threesixtygiving.org',
    ])
def test_footer_contact(browser, contact_text):
    browser.get(url_for('data_registry', _external=True))
    browser.find_element_by_link_text(contact_text)
