<template>
  <div>
    <div class="dashboard-page__section-radios">
      <RadioButtons :overviewMode="overviewMode" v-on:setOverviewMode="setOverviewMode($event)" />
    </div>
    <div class="spacer-2 clearfix"></div>
    <DashboardCard v-for="(cardData, index) in cards" :key="`card-${index}`" :overviewMode="overviewMode" :cardData="cardData" v-on:showModalEvent="controlModal(true)" />
    <Modal v-if="showModal" v-on:hideModalEvent="controlModal(false)" />
  </div>
</template>

<script>
import DashboardCard from "./parts/DashboardCard";
import RadioButtons from "./parts/RadioButtons";
import Modal from './parts/Modal';

export default {
  name: "DashboardPage",
  components: {
    DashboardCard,
    RadioButtons,
    Modal,
  },
  props: {
    publishers: {},
  },
  methods: {
    controlModal(visibleStatus) {
      this.showModal = visibleStatus;
    },
    setOverviewMode(value) {
      this.overviewMode = value;
    },
    searchFunction(mode=null) {
      this.dataDownloaded = false;
      const query = mode === null ? '' : [`?mode=${mode}`];
      fetch(`${process.env.VUE_APP_DATASTORE_API}overview${query}`)
        .then((response) => response.json())
        .then((json) => {
          this.stats = json.stats;
          this.getCards();
          this.dataDownloaded = true;
        });
    },
    getPercentageString(value) {
      return `${parseInt(value * 100)}%`;
    },
    getCards() {
      this.cards = [{
          title: "Location data",
          description:
            "Grants with location data can be used to map grants, and help people understand where the money goes.\n",
          infoLabel: "Learn more about location data",
          stats: [
            {
              iconName: "person_pin_circle",
              label: "Include recipient locations",
              value: this.getPercentageString(this.stats.hasRecipientOrgLocations),
            },
            {
              iconName: "edit_location",
              label: "Include grant location names",
              value: "37%",
            },
            {
              iconName: "add_location",
              label: "Include grant location codes",
              value: "64%",
            },
          ],
        },
        {
          title: "Organisation identifiers",
          description: "Org IDs help users to understand who is involved in each grant. External\norg IDs are used to show when funders give grants to the same\nrecipient and allow grants data to be linked to official sources of\norganisation data.\n",
          infoLabel: "Learn more about organisation identifiers",
          stats: [
            {
              iconName: "tag",
              label: "Include charity or company nos.",
              value: "64%"
            },
            {
              iconName: "confirmation_number",
              label: "Include external org IDs for at least 50% of recipients",
              value: "37%"
            }
          ],
          graph: {
            data: [{
              x: [0,20,40,60,80,100],
              y: [10,15,42,17,42,64],
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
          stats: [
            {
              iconName: "event_note",
              label: "Include grant duration",
              value: "37%"
            },
            {
              iconName: "format_quote",
              label: "Include programme names",
              value: "64%"
            },
            {
              iconName: "label",
              label: "Include classifications",
              value: "64%"
            }
          ]
        },
        {
          title: "Metadata",
          description: "360Giving is a file-based data standard, supporting both spreadsheet and JSON publishing",
          graph: {
            data: [{
              x: [50,70,30,100],
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
          stats: [
            {
              iconName: "event_available",
              label: "Have published in the last year",
              value: "52%"
            },
            {
              iconName: "event_available",
              label: "Have published in the last month",
              value: "90%"
            }
          ],
          graph_description: "Publishers with grants awarded in\neach of the past 10 years\n"
        }]
    }
  },
  created() {
    this.searchFunction('publishers');
  },
  data() {
    return {
      showModal: false,
      overviewMode: 'publisher',
      stats: {},
      cards: [],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../../../../360-ds/src/components/06-prototypes/dashboard/dashboard.scss";
</style>
