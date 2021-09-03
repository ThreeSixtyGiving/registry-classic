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
      <h5>Total grants published</h5>
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
import getAwardYearsArray from '../../generic/awardYears';

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
      chart: getAwardYearsArray(this.publisher.aggregate.awardYears),
      badges: getBadges(this.publisher.quality)
    }
  }
}
</script>
