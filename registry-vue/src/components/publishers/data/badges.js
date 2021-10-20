const badges = [
  {
    qualityMetric: 'hasGrantDuration',
    iconName: 'event_note',
    label: 'Include grant duration'
  },
  {
    qualityMetric: 'hasGrantClassification',
    iconName: 'label',
    label: 'Include classifications'
  },
  {
    qualityMetric: 'hasGrantProgrammeTitle',
    iconName: 'format_quote',
    label: 'Include programme names'
  },
  {
    qualityMetric: 'hasRecipientOrgLocations',
    iconName: 'edit_location',
    label: 'Include recipient location codes'
  },
  {
    qualityMetric: 'hasBeneficiaryLocationName',
    iconName: 'edit_location',
    label: 'Include grant location name'
  },
  {
    qualityMetric: 'hasBeneficiaryLocationGeoCodes',
    iconName: 'location_on',
    label: 'Include grant location codes'
  },
  {
    qualityMetric: 'has50pcExternalOrgId',
    iconName: 'confirmation_number',
    label: 'Includes over 50% external org IDs'
  },
  {
    qualityMetric: 'publishedThisYear',
    iconName: 'event_available',
    label: 'Have published in the last year'
  },
  {
    qualityMetric: 'publishedLastThreeMonths',
    iconName: 'event_available',
    label: 'Have published within the last three months'
  },
];

const today = new Date();

const getBadges = publisher => {
  const wonBadges = Object.keys(publisher.quality).filter(key => {
    return publisher.quality[key] === 100 ? key : null;
  });

  return badges.filter(function(badge) {

    if (badge.qualityMetric == 'publishedLastThreeMonths'){
      let lastLastModifiedDate = new Date(publisher.lastLastModified);
      let todayLessThreeMonths = new Date(today.getTime() - (2628000000*3));

      if (lastLastModifiedDate.getTime() >= todayLessThreeMonths.getTime()){
        return true;
      }
    }

    if (badge.qualityMetric == 'publishedThisYear'){
      let lastLastModifiedDate = new Date(publisher.lastLastModified);

      let todayLessAYear = new Date(today.getTime() - (2628000000*12));

      if (lastLastModifiedDate.getTime() >= todayLessAYear.getTime()){
        return true;
      }
    }

    return wonBadges.includes(badge.qualityMetric);

  })
}

export default getBadges;
