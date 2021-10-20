
const getPublisherCards = (data) => {
  const { quality, aggregate } = data;
  return [
    {
      title: "Location data",
      description:
        "Location data helps users to understand where grants go. Location names help people using the data, while location codes enable grant data to be visualised in maps and to be linked to official statistics.\n",
      infoLabel: "Learn more about location data",
      modalRef: "location_data",
      stats: [
        {
          iconName: "person_pin_circle",
          label: "Include recipient location codes",
          value: `${quality.hasRecipientOrgLocations}%`,
          modalMeaning:
            "Postcodes or <a href=\"https://en.wikipedia.org/wiki/ONS_coding_system\">ONS geocodes</a> for region, local authority, ward or super output area have been included which show where the recipient is located.",
          modalReason:
            "Geocodes (including postcodes) provide a consistent way to describe a location. They can be used to produce maps showing the distribution of funding geographically and allow grants data to be looked at alongside official statistics, such as the <a href=\"https://en.wikipedia.org/wiki/Multiple_deprivation_index\">Indices of multiple deprivation</a>.<br /> 360Giving data that includes recipient postcodes or geocodes works with the <a href=\"https://help.grantnav.threesixtygiving.org/en/latest/locations.html\">location filtering functions of GrantNav</a>.",
        },
        {
          iconName: "edit_location",
          label: "Include grant location names",
          value: `${quality.hasBeneficiaryLocationName}%`,
          modalMeaning:
            "Place names have been included which describe where the funded work is being delivered or the intended beneficiaries are based. <br /> This could be any type of location: an estate, a town, city, ward, local government area or parliamentary constituency, a region or country whichever is appropriate for the grant.",
          modalReason:
            "Grant location names allow users to understand which places are benefitting from funding. This data can be more accurate in showing where funding is going as recipients may be based in a different location from the activity being funded."
        },
        {
          iconName: "add_location",
          label: "Include grant location codes",
          value: `${quality.hasBeneficiaryLocationGeoCode}%`,
          modalMeaning:
            "Postcodes or <a href=\"https://en.wikipedia.org/wiki/ONS_coding_system\">ONS</a> geocodes for region, local authority, ward or super output area have been included which shows where the funded work is being delivered or the intended beneficiaries are based.",
          modalReason:
            "Including geocodes that correspond with the grant location names increases the usability of the data by providing a consistent way to identify these places. They can be used to produce maps showing the distribution of funding geographically and allow grants data to be looked at alongside official statistics.",
        },
      ],
    },
    {
      title: "Organisation identifiers",
      description: "Org IDs help users to understand who is involved in each grant. External org IDs make it possible to see when funders give grants to the same recipient and allow grants data to be linked to official sources of organisation data.",
      modalDescription: "360Giving data identifies recipient and funding organisations in two main ways - by name and with a unique organisation identifier. These org IDs often use an official reference, such as a charity or company number. <br /><br /><i>These statistics show the percentage of organisations sharing 360Giving data (known as publishers) that include this information in their grants data.</i>",
      infoLabel: "Learn more about organisation identifiers",
      modalRef: "org_ids",
      stats: [
        {
          iconName: "tag",
          label: "Include charity or company nos.",
          value: `${quality.hasRecipientOrgCompanyOrCharityNumber}%`,
          modalMeaning: "Separate fields for sharing the registered charity and/or company numbers for recipient organisations have been included in the data.",
          modalReason: "Company and charity numbers are important for understanding grantmaking in the UK and including these separately makes it easier for users to match grants data with official sources of information about the recipients.",
        },
        {
          iconName: "confirmation_number",
          label: "Include external org IDs for over half of recipients",
          value: `${quality.has50pcExternalOrgId}%`,
          modalMeaning: "More than half of recipients are identified using an external reference, such as a registered charity or company number.",
          modalReason: "Including an external reference makes it possible to see when they have received grants from multiple funders. It allows grant data to be linked or combined with information taken from official registers. <br /><br/>Some organisations, such as small unregistered groups, do not have an official registration number that can be used to create org ID. This means a lower percentage of external org IDs in 360Giving data could be because of the type of recipients being funded.",
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
        "All 360Giving data includes information about award amounts, award dates and the purpose of each grant. Information about the grant duration, grant programme names and classifications help users to understand more context for each grant.",
      modalDescription:
        "360Giving data has 10 core fields which provide information about the who, what, when and how much of each grant. Further information can be provided in fields which provide useful context which allows the grantmaking to be understood better. <br />These statistics show the percentage of organisations sharing 360Giving data (known as publishers) that include this information in their grants data.",
      infoLabel: "Learn more about grant data",
      modalRef: "grant_data",
      stats: [
        {
          iconName: "event_note",
          label: "Include grant duration",
          value: `${quality.hasGrantDuration}%`,
          modalMeaning:
            "Planned start and end date, and/or grant duration have been included in the data which show the duration of the project or funding.",
          modalReason:
            "Including data that shows the duration of a grant makes it possible to distinguish between short and longer term funding and can be used to see if a grant is currently active or closed.<br /><br />            This information allows users to take into account the phasing of grants when looking at data and better understand patterns of funding.",
        },
        {
          iconName: "format_quote",
          label: "Include programme names",
          value: `${quality.hasGrantProgrammeTitle}%`,
          modalMeaning:
            "Grant programme names have been included in the data which show which grants were awarded under different programmes.",
          modalReason:
            "Grant programme names help users to understand a funder’s different types of funding and priorities, and see how their grants vary across and within these. This information is especially useful when it refers to the communities, sectors, issues or places that are the focus of the programme. <br /><br />360Giving data that includes grant programme names works with the grant programme filtering functions of GrantNav and 360Insights.",
        },
        {
          iconName: "label",
          label: "Include classifications",
          value: `${quality.hasGrantClassification}%`,
          modalMeaning:
            "Classification information has been included in the data to show how the grants have been categorised by the funder. These can be about a wide range of things related to the grant or recipient, and are likely to be specific to each funder.",
          modalReason:
            "Classifications provide a clear indication of how the data is categorised by the funder, making it easier to understand the data thematically.<br /><br />For funders who don’t have grant programmes, classifications can be used as an alternative way to show their different types of funding and priorities.",
        },
      ],
    },
    {
      title: "Files",
      description:
        "The 360Giving Data Standard is file-based and supports publishing using spreadsheet and JSON file formats.",
      infoLabel: "",
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
        "Timely updates provide users with an up-to-date picture of grantmaking. Publishers make updates at different frequencies; annual, biannual, quarterly, monthly or some publish in real-time.",
      modalDescription:"360Giving data is published by funding organisations on their own websites. <br /><br />These organisations have different grantmaking cycles, data systems and capacity, which means the frequency at which they update their 360Giving data can range from real-time, monthly, quarterly, biannual or annual. This variation in update schedules has an impact on how recently awarded the published grants will be.<br/><br/><i>These statistics show the percentage of organisations sharing 360Giving data (known as publishers) within a certain time-frame.</i>",
      infoLabel: "Learn more about data updates",
      modalRef: "data_updates",
      stats: [
        {
          iconName: "event_available",
          label: "Have published in the last year",
          value: `${aggregate.publishedThisYear}%`,
          modalMeaning:
            "The organisation has published 360Giving data within the last 12 months.",
          modalReason:
            "It is good practise to make updates to add new grants on at least an annual basis to ensure the data is relevant for informing the decision-making of users.",
        },
        {
          iconName: "event_available",
          label: "Have published within the last three months",
          value: `${aggregate.publishedLastThreeMonths}%`,
          modalMeaning:
            "The organisation has published 360Giving data within the last three months.",
          modalReason:
            "When 360Giving data is up-to-date it allows users to understand current funding decisions and activity, which allows for better planning and coordination.",
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
          title: "Publication of grants awarded in the past 10 years",
          yaxis: {
            title: "Number of publishers",
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
        "Location data helps users to understand where grants go. Location names help people using the data, while location codes enable grant data to be visualised in maps and to be linked to official statistics.",
      infoLabel: "Learn more about location data",
      modalDescription:
       "360Giving data has a range of fields for describing location which are split into two types; recipient and grant (known as beneficiary) location.<br /><br /><i>These statistics show the percentage of grant records that include this information.</i>",
      modalRef: "location_data",
      stats: [
        {
          iconName: "person_pin_circle",
          label: "Include recipient locations codes",
          value: `${quality.hasRecipientOrgLocations}%`,
          modalMeaning:
            "The grants include postcodes or <a href=\"https://en.wikipedia.org/wiki/ONS_coding_system\">ONS geocodes</a> for region, local authority, ward or super output area which show where the recipient is located.",
          modalReason:
            "Geocodes (including postcodes) provide a consistent way to describe a location. They can be used to produce maps showing the distribution of funding geographically and allow grants data to be looked at alongside official statistics, such as the <a href=\"https://en.wikipedia.org/wiki/Multiple_deprivation_index\">Indices of multiple deprivation</a>.<br/<br/>360Giving data that includes recipient postcodes or geocodes works with the <a href=\"https://help.grantnav.threesixtygiving.org/en/latest/locations.html\">location filtering functions of GrantNav</a>.",
        },
        {
          iconName: "edit_location",
          label: "Include recipient location names",
          value: `${quality.hasBeneficiaryLocationName}%`,
          modalMeaning:
           "The grants include place names which describe where the funded work is being delivered or the intended beneficiaries are based. <br /><br/>This could be any type of location: an estate, a town, city, ward, local government area or parliamentary constituency, a region or country whichever is appropriate for the grant.",
          modalReason:
           "Grant location names allow users to understand which places are benefitting from funding. This data can be more accurate in showing where funding is going as recipients may be based in a different location from the activity being funded.",
        },
        {
          iconName: "add_location",
          label: "Include grant location codes",
          value: `${quality.hasBeneficiaryLocationGeoCode}%`,
          modalMeaning:
            "The grants include postcodes or <a href=\"https://en.wikipedia.org/wiki/ONS_coding_system\">ONS geocodes</a> for region, local authority, ward or super output area which shows where the funded work is being delivered or the intended beneficiaries are based.",
          modalReason:
            "Including geocodes that correspond with the grant location names increases the usability of the data by providing a consistent way to identify these places. They can be used to produce maps showing the distribution of funding geographically and allow grants data to be looked at alongside official statistics.",
        },
      ],
    },
    {
      title: "Organisation identifiers",
      description: "Org IDs help users to understand who is involved in each grant. External org IDs make it possible to see when funders give grants to the same recipient and allow grants data to be linked to official sources of organisation data.",
      infoLabel: "Learn more about organisation identifiers",
      modalDescription: "360Giving data identifies recipient and funding organisations in two main ways - by name and with a unique organisation identifier. These org IDs often use an official reference, such as a charity or company number. <br /><br /><i>These statistics show the percentage of grant records that include this information</i>.",
      modalRef: "org_ids",
      stats: [
        {
          iconName: "tag",
          label: "Include charity or company nos.",
          value: `${quality.hasRecipientOrgCompanyOrCharityNumber}%`,
          modalMeaning: "The grants include registered charity and/or company numbers for recipient organisations. ",
          modalReason: "Company and charity numbers are important for understanding grantmaking in the UK and including these separately makes it easier for users to match grants data with official sources of information about the recipients. ",
        },
        {
          iconName: "confirmation_number",
          label: "Include external org IDs for at least 50% of recipients",
          value: `${quality.has50pcExternalOrgId}%`,
          modalMeaning: "The grants have a recipient identified using an external reference, such as a registered charity or company number.",
          modalReason: "Including an external reference makes it possible to see when they have received grants from multiple funders. It allows grant data to be linked or combined with information taken from official registers.<br /><br />Some organisations, such as small unregistered groups, do not have an official registration number that can be used to create org ID. This means a lower percentage of external org IDs in 360Giving data could be because of the type of recipients being funded.",
        }
      ],
      graph: {
        data: [{
          x: Object.keys(aggregate.orgIdTypes),
          y: Object.values(aggregate.orgIdTypes),
          type:"bar",
          marker: {
            color:  ['#153634', '#DE6E26', '#4DACB6', '#EFC329', '#BC2C26', '#FFFFF',]
          }
        }],
        layout:{
          title: "Org type of external org ID used",
          xaxis: {
            type: 'category',
            title: 'Org type'
          },
          yaxis: {
            title: 'Number of grants'
          }
        }
      }
    },
    {
      title: "Grant data",
      description:
        "All 360Giving data includes information about award amounts, award dates and the purpose of each grant. Information about the grant duration, grant programme names and classifications help users to understand more context for each grant.",
      infoLabel: "Learn more about grant data",
      modalDescription: "360Giving data has 10 core fields which provide information about the who, what, when and how much of each grant. Further information can be provided in fields which provide useful context which allows the grantmaking to be understood better.<br /><br /><i>These statistics show the percentage of grant records that include this information.</i>",
      modalRef: "grant_data",
      stats: [
        {
          iconName: "event_note",
          label: "Include grant duration",
          value: `${quality.hasGrantDuration}%`,
          modalMeaning:
            "The grants include planned start and end date, and/or grant duration which show the duration of the project or funding.",
          modalReason:
            "Including data that shows the duration of a grant makes it possible to distinguish between short and longer term funding and can be used to see if a grant is currently active or closed.<br /><br />This information allows users to take into account the phasing of grants when looking at data and better understand patterns of funding.",
        },
        {
          iconName: "format_quote",
          label: "Include programme names",
          value: `${quality.hasGrantProgrammeTitle}%`,
          modalMeaning:
            "The grants include grant programme names which show which grants were awarded under different programmes.",
          modalReason:
            "Grant programme names help users to understand a funder’s different types of funding and priorities, and see how their grants vary across and within these. This information is especially useful when it refers to the communities, sectors, issues or places that are the focus of the programme.<br /><br />360Giving data that includes grant programme names works with the grant programme filtering functions of GrantNav and 360Insights.",
        },
        {
          iconName: "label",
          label: "Include classifications",
          value: `${quality.hasGrantClassification}%`,
          modalMeaning:
            "The grants include classification information to show how the grants have been categorised by the funder. These can be about a wide range of things related to the grant or recipient, and are likely to be specific to each funder.",
          modalReason:
            "Classifications provide a clear indication of how the data is categorised by the funder, making it easier to understand the data thematically.<br /><br />For funders who don’t have grant programmes, classifications can be used as an alternative way to show their different types of funding and priorities.",
        },
      ],
    },
    {
      title: "Files",
      description:
        "The 360Giving Data Standard is file-based and supports publishing using spreadsheet and JSON file formats.",
      infoLabel: "",
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
      modalDescription: "360Giving data is published by funding organisations on their own websites.<br /><br />These organisations have different grantmaking cycles, data systems and capacity, which means the frequency at which they update their 360Giving data can range from real-time, monthly, quarterly, biannual or annual. This variation in update schedules has an impact on how recently awarded the published grants will be.<br /><br /><i>These statistics show the percentage of organisations sharing 360Giving data (known as publishers) with grants awarded within a certain time-frame</i>.",
      modalRef: "data_updates",
      stats: [
        {
          iconName: "event_available",
          label: "Include grants awarded in the last year",
          value: `${aggregate.awardedThisYear}%`,
          modalMeaning:
            "The organisation has published data with grants awarded in the last 12 months.",
          modalReason:
            "Information about grants awarded within the past year are likely to be current and therefore more useful for informing the decision-making of users.",
        },
        {
          iconName: "event_available",
          label: "Include grants awarded within the last three months",
          value: `${aggregate.awardedLastThreeMonths}%`,
          modalMeaning:
            "The organisation has published data with grants awarded in the last 3 months.",
          modalReason:
            "Information about recently awarded grants allows users to understand current funding decisions and activity, which allows for better planning and coordination.",
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
          title: "Grants awarded in the past 10 years",
          yaxis: {
            title: "Number of grants",
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
