from collections import OrderedDict

from registry.registry import get_currency_symbol, format_value, format_date, get_total_value,\
    get_check_cross_symbol, get_file_type, get_licence, get_grant_data, get_data_by_prefix


def test_no_data_does_not_give_500_error():
    response = get_grant_data('')

    assert response is None

    response = get_data_by_prefix('')

    assert response == OrderedDict()


def test_get_currency_symbol_with_symbol():
    response = get_currency_symbol('GBP', {'currency_symbol': '&pound;'})

    assert response == '&pound;'


def test_get_currency_symbol_without_key():
    response = get_currency_symbol('GBP', {})

    assert response == 'GBP'


def test_get_currency_symbol_without_symbol_with_currency():
    response = get_currency_symbol('GBP', {'currency_symbol': ''})

    assert response == 'GBP'


def test_get_currency_symbol_without_symbol_without_currency():
    response = get_currency_symbol('', {'currency_symbol': ''})

    assert response == ''


def test_format_value_integer():
    response = format_value(492793844)

    assert response == '492,793,844'


def test_format_value_float():
    response = format_value(492793844.630005)

    assert response == '492,793,844.63'


def test_format_value_string():
    response = format_value('492793844')

    assert response == '492793844'


def test_format_value_none():
    response = format_value(None)

    assert response is None


def test_format_date_correct_date_param():
    response = format_date('2018-07-23')

    assert response == 'Jul \'18'


def test_format_date_empty_string():
    response = format_date('')

    assert response == ''


def test_format_date_wrong_date_param():
    response = format_date('23-07-2018')

    assert response == '23-07-2018'


def test_get_total_value_one_currency():
    response = get_total_value({'GBP': {'currency_symbol': '&pound;', 'total_amount': 257947}})

    assert response == ['&pound; 257,947']


def test_get_total_value_multiple_currencies():
    data_by_currency = {
        'GBP': {'currency_symbol': '&pound;', 'total_amount': 257947},
        'CHP': {'currency_symbol': '', 'total_amount': 234.898000}
    }
    response = get_total_value(data_by_currency)

    assert response == ['&pound; 257,947', 'CHP 234.9']


def test_get_total_value_empty_dict():
    response = get_total_value({})

    assert response == []


def test_get_total_value_currency_symbol_key_missing():
    response = get_total_value({'GBP': {'total_amount': 257947}})

    assert response == ['GBP 257,947']


def test_get_total_value_total_amount_key_missing():
    data_by_currency = {
        'GBP': {'currency_symbol': '&pound;'},
        'CHP': {'currency_symbol': '', 'total_amount': 234.898000}
    }
    response = get_total_value(data_by_currency)

    assert response == ['CHP 234.9']


def test_get_total_value_total_amount_empty_string():
    data_by_currency = {
        'GBP': {'currency_symbol': '&pound;', 'total_amount': 257947},
        'CHP': {'currency_symbol': '', 'total_amount': ''}
    }
    response = get_total_value(data_by_currency)

    assert response == ['&pound; 257,947']


def test_get_check_symbol():
    response = get_check_cross_symbol(True)

    assert response == '&#x2713;'


def test_get_cross_symbol():
    response = get_check_cross_symbol(False)

    assert response == '&#x2715;'


def test_get_check_cross_symbol_return_string():
    response = get_check_cross_symbol('true')

    assert response == ''


def test_get_file_type_csv():
    response = get_file_type('csv')

    assert response == 'csv'


def test_get_file_type_json():
    response = get_file_type('json')

    assert response == 'json'


def test_get_file_type_xlsx():
    response = get_file_type('xlsx')

    assert response == 'xlsx'


def test_get_file_type_file():
    response = get_file_type('Json')

    assert response == 'file'


def test_get_file_type_empty_strings():
    response = get_file_type('')

    assert response == 'file'


def test_get_file_type_none():
    response = get_file_type(None)

    assert response == 'file'


def test_get_licence_not_acceptable():
    response = get_licence('CCO', 'url', False)

    assert response == '&#x2715;'


def test_get_licence_acceptable():
    response = get_licence('CCO', 'url', True)

    assert response == "<a href=\"url\"><img src=\"../images/licences/cc_pd.png\" width='70' height='27'></a>"


def test_get_licence_with_name_not_in_dict_and_url():
    response = get_licence('CC', 'url', True)

    assert response == "<a href=\"url\">CC</a>"


def test_get_licence_name_not_in_dict_and_without_url():
    response = get_licence('CC', None, True)

    assert response == 'CC'


def test_get_licence_without_name_and_without_url():
    response = get_licence(None, None, True)

    assert response is None


# def test_data_correct_format():
#     data = get_data_by_prefix(RAW_DATA)
#     assert len(data) == 3
#
#     bbc_data = data['360g-cin']
#     assert len(bbc_data) == 3
#     assert bbc_data['publisher'] == {
#         'name': 'BBC Children in Need',
#         'logo': 'http://www.threesixtygiving.org/wp-content/uploads/BBCCiN_CoreLogo.png'
#     }
#     assert bbc_data['licence'] == {
#         'url': 'https://creativecommons.org/licences/by/4.0/',
#         'name': 'Creative Commons Attribution 4.0'
#     }
#     assert bbc_data['grant'] == [{
#         'url': 'http://downloads.bbc.co.uk/tv/pudsey/360_giving_data_02102016.xlsx',
#         'name': 'BBC Children in Need grants'
#     }]


# def test_data_is_sorted_alphabetically_by_org_name():
#     keys = list(get_data_by_prefix(RAW_DATA).keys())
#
#     assert keys[0] == '360g-cin'
#     assert keys[1] == '360G-blf'
#     assert keys[2] == '360G-CorraFoundation'
#
#
# def test_publisher_with_multiple_entries_is_consolidated_in_a_single_entry():
#     big_lottery_grant = get_data_by_prefix(RAW_DATA)['360G-blf']['grant']
#
#     assert len(big_lottery_grant) is 2
#     assert big_lottery_grant[0]['name'] == 'Big Lottery Fund - grants data 2015 to 2017'
#     assert big_lottery_grant[1]['name'] == 'Big Lottery Fund - grants data 2017-18 year-to-date'
