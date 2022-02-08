import numeral from 'numeral';

const earlyYears = awardYears => {
  return Object.entries(awardYears)
                .filter(entry => entry[0] < 2011)
                .reduce((acc, entry) => acc + entry[1], 0)
}

const getAwardYearsArray = awardYears => [
  {
    label: `Older data`,
    value: earlyYears(awardYears),
    value_text: numeral(earlyYears(awardYears)).format('( 0a)'),
    detail: `${numeral(earlyYears(awardYears)).format('( 0a)')} grants awarded before 2011`
  },
  {
    label: 2011,
    value: awardYears[2011],
    value_text: numeral(awardYears[2011]).format('( 0a)'),
    detail: `${numeral(awardYears[2011]).format('( 0a)')} grants awarded in 2011`
  },
  {
    label: 2012,
    value: awardYears[2012],
    value_text: numeral(awardYears[2012]).format('( 0a)'),
    detail: `${numeral(awardYears[2012]).format('( 0a)')} grants awarded in 2012`
  },
  {
    label: 2013,
    value: awardYears[2013],
    value_text: numeral(awardYears[2013]).format('( 0a)'),
    detail: `${numeral(awardYears[2013]).format('( 0a)')} grants awarded in 2013`
  },
  {
    label: 2014,
    value: awardYears[2014],
    value_text: numeral(awardYears[2014]).format('( 0a)'),
    detail: `${numeral(awardYears[2014]).format('( 0a)')} grants awarded in 2014`
  },
  {
    label: 2015,
    value: awardYears[2015],
    value_text: numeral(awardYears[2015]).format('( 0a)'),
    detail: `${numeral(awardYears[2015]).format('( 0a)')} grants awarded in 2015`
  },
  {
    label: 2016,
    value: awardYears[2016],
    value_text: numeral(awardYears[2016]).format('( 0a)'),
    detail: `${numeral(awardYears[2016]).format('( 0a)')} grants awarded in 2016`
  },
  {
    label: 2017,
    value: awardYears[2017],
    value_text: numeral(awardYears[2017]).format('( 0a)'),
    detail: `${numeral(awardYears[2017]).format('( 0a)')} grants awarded in 2017`
  },
  {
    label: 2018,
    value: awardYears[2018],
    value_text: numeral(awardYears[2018]).format('( 0a)'),
    detail: `${numeral(awardYears[2018]).format('( 0a)')} grants awarded in 2018`
  },
  {
    label: 2019,
    value: awardYears[2019],
    value_text: numeral(awardYears[2019]).format('( 0a)'),
    detail: `${numeral(awardYears[2019]).format('( 0a)')} grants awarded in 2019`
  },
  {
    label: 2020,
    value: awardYears[2020],
    value_text: numeral(awardYears[2020]).format('( 0a)'),
    detail: `${numeral(awardYears[2020]).format('( 0a)')} grants awarded in 2020`
  },
  {
    label: 2021,
    value: awardYears[2021],
    value_text: numeral(awardYears[2021]).format('( 0a)'),
    detail: `${numeral(awardYears[2021]).format('( 0a)')} grants awarded in 2021`
  },
  {
    label: 2022,
    value: awardYears[2022],
    value_text: numeral(awardYears[2022]).format('( 0a)'),
    detail: `${numeral(awardYears[2022]).format('( 0a)')} grants awarded in 2022`
  }
]

export default getAwardYearsArray;
