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
    label: 'Recipient Org Location'
  },
  {
    qualityMetric: 'hasBeneficiaryLocationName',
    iconName: 'edit_location',
    label: 'Include grant location name'
  },
  {
    qualityMetric: 'hasBeneficiaryLocationCodes',
    iconName: 'location_on',
    label: 'Include recipient location codes'
  },
]

const getBadges = quality => {
  const wonBadges = Object.keys(quality).filter(key => {
    return quality[key] === 100 ? key : null;
  });
  return badges.filter(badge => wonBadges.includes(badge.qualityMetric))
}

export default getBadges;
