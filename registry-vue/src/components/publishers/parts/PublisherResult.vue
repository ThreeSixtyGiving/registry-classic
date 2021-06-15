<template>
  <div class="dashboard-publisher-result">
    <div class="dashboard-publisher-result__head">
      <div class="dashboard-publisher-result__left-side">
        <a class="dashboard-publisher-result__title">
          {{ publisher.name }}
        </a>
      </div>

      <div class="dashboard-publisher-result__right-side">
        <div class="dashboard-publisher-result__date">
          Last update: <time :datetime="publisher.aggregate.lastLastModified">{{ new Date(publisher.aggregate.lastLastModified).toUTCString().substring(4,16) }}</time>
        </div>
      </div>
    </div>

    <span v-for="(badge, index) in badges" :key="index" class="dashboard-publisher-result__badge">
      <IconBadge :badge="badge" />
    </span>

    <hr class="separator-light">

    <div>
      <h5>**** Mock Data - Total grants published ****</h5>
      <div>
        <YearsChart :chart="chart" />
      </div>
    <hr class="separator-light">
    </div>


    <div>
      <a class="button" :href="$router.resolve({name: 'publisher', params: { id: publisher.prefix, publisher: this.publisher }}).href">See More</a>
    </div>
  </div>
</template>

<script>
import YearsChart from "../../generic/YearsChart";
import IconBadge from "./IconBadge";
import getBadges from '../data/badges';

export default {
  name: "PublisherResult",
  components: {
    YearsChart,
    IconBadge,
  },
  props: {
    publisher: {
      type: Object,
      required: true,
    }
  },
  data: function () {
    return {
      chart: [
        {
          "label": "Older data",
          "value": 0.15,
          "value_text": "1.5k",
          "detail": "1.5k grants awarded before 2011"
        },
        {
          "label": 2011,
          "value": 0,
          "value_text": "",
          "detail": "No grants awarded in 2011"
        },
        {
          "label": 2012,
          "value": 0,
          "value_text": "",
          "detail": "No grants awarded in 2012"
        },
        {
          "label": 2013,
          "value": 1,
          "value_text": "10k+",
          "detail": "10k+ grants awarded in 2013"
        },
        {
          "label": 2014,
          "value": 0.2,
          "value_text": "2k",
          "detail": "2k grants awarded in 2014"
        },
        {
          "label": 2015,
          "value": 0.2,
          "value_text": "2k",
          "detail": "2k grants awarded in 2015"
        },
        {
          "label": 2016,
          "value": 0.2,
          "value_text": "2k",
          "detail": "2k grants awarded in 2016"
        },
        {
          "label": 2017,
          "value": 0.25,
          "value_text": "2.5k",
          "detail": "2.5k grants awarded in 2017"
        },
        {
          "label": 2018,
          "value": 0.05,
          "value_text": "0.5k",
          "detail": "0.5k grants awarded in 2018"
        },
        {
          "label": 2019,
          "value": 0.05,
          "value_text": "0.5k",
          "detail": "0.5k grants awarded in 2019"
        },
        {
          "label": 2020,
          "value": 0.05,
          "value_text": "0.5k",
          "detail": "0.5k grants awarded in 2020"
        },
        {
          "label": 2021,
          "value": 1.5,
          "value_text": "15k+",
          "detail": "15k+ grants awarded in 2018"
        }
      ],
      badges: getBadges(this.publisher.quality)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../../360-ds/src/components/04-modules/dashboard-publisher-result/dashboard-publisher-result.scss";
</style>
