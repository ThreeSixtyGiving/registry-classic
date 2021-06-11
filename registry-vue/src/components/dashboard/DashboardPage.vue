<template>
  <div>
    <div class="dashboard-page__section-radios">
      <RadioButtons :overviewMode="overviewMode" v-on:setOverviewMode="setOverviewMode($event)" />
    </div>
    <div class="spacer-2 clearfix"></div>
    <DashboardCard v-for="(cardData, index) in cards" :key="`card-${index}`" :overviewMode="overviewMode" :cardData="cardData" v-on:showModalEvent="controlModal(true, $event)" />
    <Modal v-if="modalState" :key="this.modalRef" :cardData="this.cards.filter(card => card.modalRef===modalRef)[0]" v-on:hideModalEvent="controlModal(false)" />
  </div>
</template>

<script>
import DashboardCard from "./parts/DashboardCard";
import RadioButtons from "./parts/RadioButtons";
import Modal from './parts/Modal';
import getCardData from './data/cards';

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
          this.stats = json.stats;
          this.getCards();
          this.dataDownloaded = true;
        });
    },
    getCards() {
      this.cards = getCardData(this.stats);
    }
  },
  created() {
    this.searchFunction('publishers');
  },
  data() {
    return {
      modalState: false,
      modalRef: "",
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
