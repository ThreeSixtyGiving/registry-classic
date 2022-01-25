const badges = [
  {
    qualityMetric: 'hasGrantDuration',
    iconName: 'event_note',
    label: 'Includes grant duration'
  },
  {
    qualityMetric: 'hasGrantClassification',
    iconName: 'label',
    label: 'Includes classifications'
  },
  {
    qualityMetric: 'hasGrantProgrammeTitle',
    iconName: 'format_quote',
    label: 'Includes programme names'
  },
  {
    qualityMetric: 'hasRecipientOrgLocations',
    iconName: 'person_pin_circle',
    label: 'Includes recipient location codes'
  },
  {
    qualityMetric: 'hasBeneficiaryLocationName',
    iconName: 'edit_location',
    label: 'Includes grant location name'
  },
  {
    qualityMetric: 'hasBeneficiaryLocationGeoCode',
    iconName: 'location_on',
    label: 'Includes grant location codes'
  },
  {
    qualityMetric: 'has50pcExternalOrgId',
    iconName: 'confirmation_number',
    label: 'Includess over 50% external org IDs'
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

  let available = [];
  let unavailable = [];


  badges.forEach((badge)=> {

    if (wonBadges.includes(badge.qualityMetric)){
      available.push(badge);
    } else {
      unavailable.push(badge);
    }

    if (badge.qualityMetric == 'publishedLastThreeMonths'){
      let lastLastModifiedDate = new Date(publisher.lastLastModified);
      let todayLessThreeMonths = new Date(today.getTime() - (2628000000*3));

      if (lastLastModifiedDate.getTime() >= todayLessThreeMonths.getTime()){
        return available.push(badge);
      }
    }

    if (badge.qualityMetric == 'publishedThisYear'){
      let lastLastModifiedDate = new Date(publisher.lastLastModified);

      let todayLessAYear = new Date(today.getTime() - (2628000000*12));

      if (lastLastModifiedDate.getTime() >= todayLessAYear.getTime()){
        return available.push(badge);
      }
    }
  });

  return { available: available, unavailable: unavailable }
}

export default getBadges;
