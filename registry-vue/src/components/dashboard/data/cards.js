const getPercentage = value => {
  return parseInt(value * 100);
}

const getCardData = stats => {
  return [{
    title: "Location data",
    description:
      "Grants with location data can be used to map grants, and help people understand where the money goes.\n",
    infoLabel: "Learn more about location data",
    modalRef: "location_data",
    modalMeaning: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quis ultricies vitae maecenas.",
    modalReason: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quis ultricies vitae maecenas.",
    stats: [
      {
        iconName: "person_pin_circle",
        label: "Include recipient locations",
        value: `${getPercentage(stats.hasRecipientOrgLocations)}%`,
      },
      {
        iconName: "edit_location",
        label: "Include beneficiary location names",
        value: `${getPercentage(stats.hasBeneficiaryLocationName)}%`,
      },
      {
        iconName: "add_location",
        label: "Include beneficiary location codes",
        value: `${getPercentage(stats.hasBeneficiaryLocationCodes)}%`,
      },
    ],
  },
  {
    title: "Organisation identifiers",
    description: "Org IDs help users to understand who is involved in each grant. External\norg IDs are used to show when funders give grants to the same\nrecipient and allow grants data to be linked to official sources of\norganisation data.\n",
    infoLabel: "Learn more about organisation identifiers",
    modalRef: "org_ids",
    stats: [
      {
        iconName: "tag",
        label: "Include charity or company nos.",
        value: ""
      },
      {
        iconName: "confirmation_number",
        label: "Include external org IDs for at least 50% of recipients",
        value: ""
      }
    ],
    graph: {
      data: [{
        x: [0,20,40,60,80,100],
        y: [10,10,10,10,10,10],
        type:"bar",
        marker: {
          color:  ['#153634', '#DE6E26', '#4DACB6', '#EFC329', '#BC2C26', '#FFFFF',]
        }
      }],
      layout:{
        title: "Percentage of recipients with external org IDs",
        xaxis: {
          type: 'category',
          title: '# of Publishers'
        },
        yaxis: {
          title: '% with external org IDs'
        }
      }
    }
  },
  {
    title: "Grant data",
    description: "All 360Giving data includes information about award amounts,\naward dates and the purpose of each grant. Information about the grant\nduration, grant programmes names and classifications help users to\nunderstand more context for each grant.\n",
    infoLabel: "Learn more about grant data",
    modalRef: "grant_data",
    stats: [
      {
        iconName: "event_note",
        label: "Include grant duration",
        value: `${getPercentage(stats.hasGrantDuration)}%`
      },
      {
        iconName: "format_quote",
        label: "Include programme names",
        value: `${getPercentage(stats.hasGrantProgrammeTitle)}%`
      },
      {
        iconName: "label",
        label: "Include classifications",
        value: `${getPercentage(stats.hasGrantClassification)}%`
      }
    ]
  },
  {
    title: "Metadata",
    description: "360Giving is a file-based data standard, supporting both spreadsheet and JSON publishing",
    infoLabel: "Learn more about Metadata",
    modalRef: "metadata",
    graph: {
      data: [{
        x: [getPercentage(stats.csvFiles),getPercentage(stats.xlsxFiles),getPercentage(stats.odsFiles),getPercentage(stats.jsonFiles)],
        y: ['CSV','XLSX','ODF','JSON'],
        type:"bar",
        orientation: 'h',
        marker: {
          color:  ['#153634', '#DE6E26', '#4DACB6', '#EFC329', '#BC2C26', '#FFFFF',]
        }
      }],
      layout:{
        title: "Number of publishers using each file type",
        yaxis: {
          type: 'category',
          title: 'File type'
        },
        xaxis: {
          title: '% using file type'
        },
      }
    }
  },
  {
    title: "Data updates",
    description: "Timely updates provide users with an up-to-date picture of grantmaking.\nPublishers make updates at different frequencies; annual, biannual, quarterly, monthly\nor some publish in real-time.\n",
    infoLabel: "Learn more about data updates",
    modalRef: "data_updates",
    stats: [
      {
        iconName: "event_available",
        label: "Have published in the last year",
        value: ""
      },
      {
        iconName: "event_available",
        label: "Have published in the last month",
        value: ""
      }
    ],
    graph_description: "Publishers with grants awarded in\neach of the past 10 years\n"
  }]
}

export default getCardData;
