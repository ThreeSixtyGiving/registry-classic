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

    <h5>Total grants published</h5>
    <div>
      <YearsChart :chart="chart" />
    </div>

    <hr class="separator-light">

    <div>
      <a class="button" :href="$router.resolve({name: 'publisher', params: { id: publisher.prefix }}).href">See More</a>
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
      chart: [],
      badges: getBadges(this.publisher.quality)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../../360-ds/src/components/04-modules/dashboard-publisher-result/dashboard-publisher-result.scss";
</style>
