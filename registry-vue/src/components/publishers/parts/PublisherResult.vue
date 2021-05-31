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
          Last update <time :datetime="publisher.date_timestamp">{{ publisher.date }}</time>
        </div>
      </div>
    </div>

    <span v-for="(badge, index) in publisher.badges" :key="index" class="dashboard-publisher-result__badge">
      <IconBadge />
    </span>

    <hr class="separator-light">

    <h5>Total grants published</h5>
    <div>
      <YearsChart :chart="publisher.chart" />
    </div>

    <hr class="separator-light">

    <div>
      <router-link class="button" :to="{ name: 'publisher', params: { id: publisher.prefix } }">See More</router-link>
    </div>
  </div>
</template>

<script>
import YearsChart from "../../generic/YearsChart";
import IconBadge from "./IconBadge";

export default {
  name: "PublisherResult",
  components: {
    YearsChart,
    IconBadge,
  },
  props: {
    publisher: {},
  }
}
</script>

<style lang="scss" scoped>
.dashboard-publisher-result {
  border-left: 4px solid $teal;
  box-shadow: 1px 4px 4px 4px rgba(0, 0, 0, 0.06);
  padding: 20px 24px;
  margin-bottom: 20px;

  &__head {
    display: flex;
  }

  &__left-side {
    flex-grow: 1;
  }

  &__title {
    font-weight: 700;
    font-size: 1.2rem;
    margin-bottom: 16px;
    display: block;
  }

  &__description {
    font-weight: 400;
    font-size: 16px;
  }

  &__date {
    color: $black;
    margin-bottom: 16px;
  }
}

.dashboard-publisher-result-wrapper {
  .dashboard-publisher-result {
    // Nested card elements in the detail view have headings with their own margins
    padding-top: 1px;
  }

  &__external-buttons {
    a:last-child {
      margin-left: 1rem;
    }
  }
}
</style>
