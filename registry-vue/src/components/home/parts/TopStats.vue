<template>
  <div class="cards-section">
    <section class="grid grid--four-columns" :key="`ready-${dataDownloaded}`">
      <div class="base-card base-card--yellow grid__1">
        <div class="base-card__content">
          <Spinner v-if="!dataDownloaded" />
          <h2 v-if="dataDownloaded" class="base-card__title">{{ stats.grants }}</h2>
          <p class="base-card__text">Grants</p>
        </div>
      </div>

      <div class="base-card base-card--orange grid__1">
        <div class="base-card__content">
          <Spinner v-if="!dataDownloaded" />
          <h2 v-if="dataDownloaded" class="base-card__title">{{ stats.recipients }}</h2>
          <p class="base-card__text">Recipients</p>
        </div>
      </div>

      <div class="base-card base-card--teal grid__1">
        <div class="base-card__content">
          <Spinner v-if="!dataDownloaded" />
          <h2 v-if="dataDownloaded" class="base-card__title">Unknown</h2>
          <p class="base-card__text">Funders</p>
        </div>
      </div>

      <div class="base-card base-card--red grid__1">
        <div class="base-card__content">
          <Spinner v-if="!dataDownloaded" />
          <h2 v-if="dataDownloaded" class="base-card__title">£{{ stats.GBP }}</h2>
          <p class="base-card__text">Total</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import numeral from "numeral";
import Spinner from '../../generic/Spinner'

export default {
  name: "TopStats",
  components: {
    Spinner
  },
  data() {
    return {
      stats: {
        grants: null,
        recipients: null,
        GBP: null,
      },
      dataDownloaded: false,
    }
  },
  methods: {
    getData() {
      this.dataDownloaded = false;
      console.log(this.$router.currentRoute)
      const endpoint = this.$router.currentRoute.name === 'publisher' ? `/publisher/${this.$router.currentRoute.params.id}` : `/overview?mode=publishers`;
      fetch(`${process.env.VUE_APP_DATASTORE_API}${endpoint}`)
        .then((response) => response.json())
        .then((json) => {
          this.stats = json.aggregate.total;
          const totalValue = numeral(json.aggregate.total.GBP);
          this.stats.GBP = totalValue.format('( 0.00 a)');
          this.dataDownloaded = true
        })
        .catch(error => {
          console.error('Error:', error);
        });
    },
  },
  created() {
    this.getData();
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../../360-ds/src/components/05-templates/cards-section/cards-section.scss";
</style>
