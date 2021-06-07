const getBadges = () => {
  return {
    NoBeneficiaryLocation: {
      iconName: 'location_on',
      label: 'Include recipient location codes'
    },
    BeneficiaryLocationNameNotPresent: {
      iconName: 'edit_location',
      label: 'Include grant location name'
    },
    BeneficiaryLocationCountrygeoCodeNotPresent: {
      iconName: 'add_location',
      label: 'Include grant location codes'
    },
    BeneficiaryLocationCountryCodeNotPresent: {
      iconName: 'add_location',
      label: 'Include grant location codes'
    },
    NoRecipientOrgCompanyCharityNumber: {
      iconName: 'money',
      label: 'Include charity or company nos.'
    },
    IncompleteRecipientOrg: {
      iconName: 'confirmation_number',
      label: 'Include external org IDs'
    },
    PlannedDurationNotPresent: {
      iconName: 'event_note',
      label: 'Include grant duration'
    },
    GrantProgrammeTitleNotPresent: {
      iconName: 'format_quote',
      label: 'Include programme names'
    },
    ClassificationNotPresent: {
      iconName: 'label',
      label: 'Include classifications'
    },
    // {
    //   'overlaid_text': 'xlsx',
    //   label: 'Publish using spreadsheets'
    // },
    // {
    //   iconName: 'reorder',
    //   label: 'Include metadata'
    // },
    // {
    //   iconName: 'event_available',
    //   label: 'Published data in the last year'
    // }
  }
}




// 'TitleLength': {
//   'count': 0
// },
// 'NoDataSource': {
//   'count': 0
// },
// 'NoLastModified': {
//   'count': 783,
//   'heading': '100% of grants do not have <span class=\'highlight-background-text\'>Last Modified</span> information'
// },
// 'NoGrantProgramme': {
//   'count': 0
// },
// 'FundingOrg360GPrefix': {
//   'count': 0
// },
// 'TitleDescriptionSame': {
//   'count': 0
// },
// 'NoBeneficiaryLocation': {
//   'count': 1,
//   'heading': '1 grants do not contain any beneficiary location fields'
// },
// 'IncompleteRecipientOrg': {
//   'count': 6,
//   'heading': '6 grants do not have recipient organisation location information'
// },
// 'RecipientOrg360GPrefix': {
//   'count': 6,
//   'heading': '6 grants have a <span class=\'highlight-background-text\'>Recipient Org:Identifier</span> that starts '360G-''
// },
// 'ClassificationNotPresent': {
//   'count': 783,
//   'heading': '100% of grants do not contain classifications field'
// },
// 'PlannedDurationNotPresent': {
//   'count': 783,
//   'heading': '100% of grants do not contain plannedDates/0/duration field'
// },
// 'GrantProgrammeTitleNotPresent': {
//   'count': 0
// },
// 'BeneficiaryLocationNameNotPresent': {
//   'count': 1,
//   'heading': '1 grants do not contain beneficiaryLocation/0/name field'
// },
// 'NoRecipientOrgCompanyCharityNumber': {
//   'count': 0
// },
// 'BeneficiaryLocationGeoCodeNotPresent': {
//   'count': 783,
//   'heading': '100% of grants do not contain beneficiaryLocation/0/geoCode field'
// },
// 'BeneficiaryLocationCountryCodeNotPresent': {
//   'count': 783,
//   'heading': '100% of grants do not contain beneficiaryLocation/0/countryCode field'
// }
