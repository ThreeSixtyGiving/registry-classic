
const getPublisherCards = (data) => {
  const { quality, aggregate } = data;
  return [
    {
      title: "Location data",
      description:
        "Grants with location data can be used to map grants, and help people understand where the money goes.\n",
      infoLabel: "Learn more about location data",
      modalRef: "location_data",
      stats: [
        {
          iconName: "person_pin_circle",
          label: "Include recipient locations",
          value: `${quality.hasRecipientOrgLocations}%`,
          modalMeaning:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quis ultricies vitae maecenas.",
          modalReason:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quis ultricies vitae maecenas.",
        },
        {
          iconName: "edit_location",
          label: "Include beneficiary location names",
          value: `${quality.hasBeneficiaryLocationName}%`,
          modalMeaning:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quis ultricies vitae maecenas.",
          modalReason:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quis ultricies vitae maecenas.",
        },
        {
          iconName: "add_location",
          label: "Include beneficiary location codes",
          value: `${quality.hasBeneficiaryLocationGeoCode}%`,
          modalMeaning:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quis ultricies vitae maecenas.",
          modalReason:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quis ultricies vitae maecenas.",
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
          value: `${quality.hasRecipientOrgCompanyOrCharityNumber}%`,
          modalMeaning: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quis ultricies vitae maecenas.",
          modalReason: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quis ultricies vitae maecenas.",
        },
        {
          iconName: "confirmation_number",
          label: "Include external org IDs for at least 50% of recipients",
          value: `${quality.has50pcExternalOrgId}%`,
          modalMeaning: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quis ultricies vitae maecenas.",
          modalReason: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quis ultricies vitae maecenas.",
        }
      ],
      graph: {
        data: [{
          x: Object.keys(aggregate.recipientsExternalOrgId),
          y: Object.values(aggregate.recipientsExternalOrgId),
          type:"bar",
          marker: {
            color:  ['#153634', '#DE6E26', '#4DACB6', '#EFC329', '#BC2C26', '#FFFFF',]
          }
        }],
        layout:{
          title: "Percentage of publishers that have recipients with external org IDs",
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
      description:
        "All 360Giving data includes information about award amounts,\naward dates and the purpose of each grant. Information about the grant\nduration, grant programmes names and classifications help users to\nunderstand more context for each grant.\n",
      infoLabel: "Learn more about grant data",
      modalRef: "grant_data",
      stats: [
        {
          iconName: "event_note",
          label: "Include grant duration",
          value: `${quality.hasGrantDuration}%`,
          modalMeaning:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quis ultricies vitae maecenas.",
          modalReason:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quis ultricies vitae maecenas.",
        },
        {
          iconName: "format_quote",
          label: "Include programme names",
          value: `${quality.hasGrantProgrammeTitle}%`,
          modalMeaning:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quis ultricies vitae maecenas.",
          modalReason:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quis ultricies vitae maecenas.",
        },
        {
          iconName: "label",
          label: "Include classifications",
          value: `${quality.hasGrantClassification}%`,
          modalMeaning:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quis ultricies vitae maecenas.",
          modalReason:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quis ultricies vitae maecenas.",
        },
      ],
    },
    {
      title: "Metadata",
      description:
        "360Giving is a file-based data standard, supporting both spreadsheet and JSON publishing",
      infoLabel: "Learn more about Metadata",
      modalRef: "metadata",
      graph: {
        data: [
          {
            x: [
              aggregate.csvFiles,
              aggregate.xlsxFiles,
              aggregate.odsFiles,
              aggregate.jsonFiles,
            ],
            y: ["CSV", "XLSX", "ODF", "JSON"],
            type: "bar",
            orientation: "h",
            marker: {
              color: [
                "#153634",
                "#DE6E26",
                "#4DACB6",
                "#EFC329",
                "#BC2C26",
                "#FFFFF",
              ],
            },
          },
        ],
        layout: {
          title: "Number of publishers using each file type",
          yaxis: {
            type: "category",
            title: "File type",
          },
          xaxis: {
            title: "% using file type",
          },
        },
      },
    },
    {
      title: "Data updates",
      description:
        "Timely updates provide users with an up-to-date picture of grantmaking.\nPublishers make updates at different frequencies; annual, biannual, quarterly, monthly\nor some publish in real-time.\n",
      infoLabel: "Learn more about data updates",
      modalRef: "data_updates",
      stats: [
        {
          iconName: "event_available",
          label: "Have published in the last year",
          value: `${aggregate.publishedThisYear}%`,
          modalMeaning:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quis ultricies vitae maecenas.",
          modalReason:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quis ultricies vitae maecenas.",
        },
        {
          iconName: "event_available",
          label: "Have published in the last month",
          value: `${aggregate.publishedThisMonth}%`,
          modalMeaning:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quis ultricies vitae maecenas.",
          modalReason:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quis ultricies vitae maecenas.",
        },
      ],
      // graph_description:
      //   "Publishers with grants awarded in\neach of the past 10 years\n",
      graph: {
        data: [
          {
            x: Object.keys(aggregate.awardYears),
            y: Object.values(aggregate.awardYears),
            type: "bar",
            marker: {
              color: "#DE6E26",
            },
          },
        ],
        layout: {
          title: "# of publishers with grants awarded in a given year",
          yaxis: {
            title: "# of publishers",
          },
          xaxis: {
            title: "Year",
            type: "category",
          },
        },
      },
    },
  ];
};

const getGrantsCards = (data) => {
  const { quality, aggregate} = data;
  return [
    {
      title: "Location data",
      description:
        "Grants with location data can be used to map grants, and help people understand where the money goes.\n",
      infoLabel: "Learn more about location data",
      modalRef: "location_data",
      stats: [
        {
          iconName: "person_pin_circle",
          label: "Include recipient locations",
          value: `${quality.hasRecipientOrgLocations}%`,
          modalMeaning:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quis ultricies vitae maecenas.",
          modalReason:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quis ultricies vitae maecenas.",
        },
        {
          iconName: "edit_location",
          label: "Include beneficiary location names",
          value: `${quality.hasBeneficiaryLocationName}%`,
          modalMeaning:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quis ultricies vitae maecenas.",
          modalReason:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quis ultricies vitae maecenas.",
        },
        {
          iconName: "add_location",
          label: "Include beneficiary location codes",
          value: `${quality.hasBeneficiaryLocationGeoCode}%`,
          modalMeaning:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quis ultricies vitae maecenas.",
          modalReason:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quis ultricies vitae maecenas.",
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
          value: "Unknown",
          modalMeaning: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quis ultricies vitae maecenas.",
          modalReason: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quis ultricies vitae maecenas.",
        },
        {
          iconName: "confirmation_number",
          label: "Include external org IDs for at least 50% of recipients",
          value: "Unknown",
          modalMeaning: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quis ultricies vitae maecenas.",
          modalReason: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quis ultricies vitae maecenas.",
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
          title: "**** Mock Data - Percentage of recipients with external org IDs ****",
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
      description:
        "All 360Giving data includes information about award amounts,\naward dates and the purpose of each grant. Information about the grant\nduration, grant programmes names and classifications help users to\nunderstand more context for each grant.\n",
      infoLabel: "Learn more about grant data",
      modalRef: "grant_data",
      stats: [
        {
          iconName: "event_note",
          label: "Include grant duration",
          value: `${quality.hasGrantDuration}%`,
          modalMeaning:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quis ultricies vitae maecenas.",
          modalReason:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quis ultricies vitae maecenas.",
        },
        {
          iconName: "format_quote",
          label: "Include programme names",
          value: `${quality.hasGrantProgrammeTitle}%`,
          modalMeaning:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quis ultricies vitae maecenas.",
          modalReason:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quis ultricies vitae maecenas.",
        },
        {
          iconName: "label",
          label: "Include classifications",
          value: `${quality.hasGrantClassification}%`,
          modalMeaning:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quis ultricies vitae maecenas.",
          modalReason:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quis ultricies vitae maecenas.",
        },
      ],
    },
    {
      title: "Metadata",
      description:
        "360Giving is a file-based data standard, supporting both spreadsheet and JSON publishing",
      infoLabel: "Learn more about Metadata",
      modalRef: "metadata",
      graph: {
        data: [
          {
            x: [
              aggregate.csvFiles,
              aggregate.xlsxFiles,
              aggregate.odsFiles,
              aggregate.jsonFiles,
            ],
            y: ["CSV", "XLSX", "ODF", "JSON"],
            type: "bar",
            orientation: "h",
            marker: {
              color: [
                "#153634",
                "#DE6E26",
                "#4DACB6",
                "#EFC329",
                "#BC2C26",
                "#FFFFF",
              ],
            },
          },
        ],
        layout: {
          title: "Number of publishers using each file type",
          yaxis: {
            type: "category",
            title: "File type",
          },
          xaxis: {
            title: "% using file type",
          },
        },
      },
    },
    {
      title: "Data updates",
      description:
        "Timely updates provide users with an up-to-date picture of grantmaking.\nPublishers make updates at different frequencies; annual, biannual, quarterly, monthly\nor some publish in real-time.\n",
      infoLabel: "Learn more about data updates",
      modalRef: "data_updates",
      stats: [
        {
          iconName: "event_available",
          label: "Have published in the last year",
          value: `${aggregate.publishedThisYear}%`,
          modalMeaning:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quis ultricies vitae maecenas.",
          modalReason:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quis ultricies vitae maecenas.",
        },
        {
          iconName: "event_available",
          label: "Have published in the last month",
          value: `${aggregate.publishedThisMonth}%`,
          modalMeaning:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quis ultricies vitae maecenas.",
          modalReason:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec quis ultricies vitae maecenas.",
        },
      ],
      // graph_description:
      //   "Publishers with grants awarded in\neach of the past 10 years\n",
      graph: {
        data: [
          {
            x: Object.keys(aggregate.awardYears),
            y: Object.values(aggregate.awardYears),
            type: "bar",
            marker: {
              color: "#DE6E26",
            },
          },
        ],
        layout: {
          title: "# of grants awarded in a given year",
          yaxis: {
            title: "# of grants",
          },
          xaxis: {
            title: "Year",
            type: "category",
          },
        },
      },
    },
  ];
};

export { getPublisherCards, getGrantsCards };
