<template>
  <div>
    <div class="dashboard-page__section-radios">
      <RadioButtons :overviewMode="overviewMode" v-on:setOverviewMode="setOverviewMode($event)" />
    </div>
    <div class="spacer-2 clearfix"></div>
    <div v-if="!dataDownloaded">
      <Spinner :key="dataDownloaded" />
    </div>
    <DashboardCard v-for="(cardData, index) in cards" :key="`card-${index}`" :overviewMode="overviewMode" :cardData="cardData" v-on:showModalEvent="controlModal(true, $event)" />
    <Modal v-if="modalState" :key="this.modalRef" :cardData="this.cards.find(card => card.modalRef===modalRef)" v-on:hideModalEvent="controlModal(false)" />
    <div class="spacer-2 clearfix"></div>
  </div>
</template>

<script>
import DashboardCard from "./parts/DashboardCard";
import RadioButtons from "./parts/RadioButtons";
import Spinner from '../generic/Spinner.vue';
import Modal from './parts/Modal';
import getCardData from './data/cards';

export default {
  name: "DashboardPage",
  components: {
    DashboardCard,
    RadioButtons,
    Modal,
    Spinner,
  },
  props: {
    publishers: {},
  },
  methods: {
    controlModal(modalState, modalRef="") {
      this.modalState = modalState;
      this.modalRef = modalRef;
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
          this.quality = json.quality;
          this.aggregate = json.aggregate;
          this.cards = getCardData(json.quality, json.aggregate);
          this.dataDownloaded = true;
        })
        .catch(error => {
          console.error('Error:', error);
        });
    },
  },
  created() {
    this.searchFunction('publishers');
  },
  data() {
    return {
      modalState: false,
      modalRef: "",
      overviewMode: 'publisher',
      quality: {},
      cards: [],
      aggregate: {},
      dataDownloaded: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../../../../360-ds/src/components/06-prototypes/dashboard/dashboard.scss";
</style>
