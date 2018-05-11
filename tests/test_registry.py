from registry.views import get_data_by_prefix
from tests.samples.registry_raw_data import RAW_DATA


def test_data_correct_format():
    data = get_data_by_prefix(RAW_DATA)
    assert len(data) == 3

    bbc_data = data['360g-cin']
    assert len(bbc_data) == 3
    assert bbc_data['publisher'] == {
        'name': 'BBC Children in Need',
        'logo': 'http://www.threesixtygiving.org/wp-content/uploads/BBCCiN_CoreLogo.png'
    }
    assert bbc_data['license'] == {
        'url': 'https://creativecommons.org/licenses/by/4.0/',
        'name': 'Creative Commons Attribution 4.0'
    }
    assert bbc_data['grant'] == [{
        'url': 'http://downloads.bbc.co.uk/tv/pudsey/360_giving_data_02102016.xlsx',
        'name': 'BBC Children in Need grants'
    }]


def test_data_is_sorted_alphabetically_by_org_name():
    keys = get_data_by_prefix(RAW_DATA).keys()

    assert keys[0] == '360g-cin'
    assert keys[1] == '360G-blf'
    assert keys[2] == '360G-CorraFoundation'


def test_publisher_with_multiple_entries_is_consolidated_in_a_single_entry():
    big_lottery_grant = get_data_by_prefix(RAW_DATA)['360G-blf']['grant']

    assert len(big_lottery_grant) is 2
    assert big_lottery_grant[0]['name'] == 'Big Lottery Fund - grants data 2015 to 2017'
    assert big_lottery_grant[1]['name'] == 'Big Lottery Fund - grants data 2017-18 year-to-date'
