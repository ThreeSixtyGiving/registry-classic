<template>
  <div class="dashboard-stats-card">
    <div class="dashboard-stats-card__head">
      <div class="dashboard-stats-card__left-side">
        <h3 class="dashboard-stats-card__title">{{ cardData.title }}</h3>
        <p class="dashboard-stats-card__description">{{ cardData.description }}</p>
      </div>

      <div class="dashboard-stats-card__right-side">
        <AlertTag :label="cardData.info_label" />
      </div>
    </div>

    <div class="dashboard-stats-card__groups">
      <div v-for="(stats, index) in cardData.stats" :key="index" class="dashboard-stats-card__group">
        <span><img :src="`@/assets/images/icons/${stats.icon_name}.svg`" alt=""></span>
        <span :id="`stat-${index}`">{{ stats.label }}</span>
        <span :aria-labelledby="`stat-${index}`" class="dashboard-stats-card__value">{{ stats.value }}</span>
      </div>
    </div>

    <div class="spacer-2"></div>

    <div v-if="cardData.graph">
      <hr class="separator-light">

      <div class="graph-label">{{ cardData.graph_description }}</div>
      <div class="graph-container">
        <img src="assets/images/dashboard-samples/overview-graph-publishers-with-ids.png" alt="Publishers with IDs">
      </div>
    </div>
  </div>
</template>

<script>
import AlertTag from "../../generic/AlertTag";

export default {
  name: "DashboardCard",
  components: {
    AlertTag,
  },
  props: {
    cardData: {
      title: "",
      description: "",
      info_label: "",
      stats: [
        {
          label: "",
          values: "",
          icon_name: "",
        }
      ],
    }
  }
};
</script>

<style lang="scss" scoped>
.dashboard-stats-card {
  border-left: 4px solid $teal;

  &--grant {
    border-left-color: $orange;
  }

  box-shadow: 1px 4px 4px 4px rgba(0, 0, 0, 0.06);
  padding: 20px 24px;
  margin-bottom: 20px;

  &__head {
    display: flex;
  }

  &__right-side {
    min-width: 40%;
    @include breakpoint($medium) {
      min-width: 25%;
    }
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

  &__groups {
    display: flex;
    flex-direction: column;

    @include breakpoint($medium) {
      flex-direction: row;
    }
  }

  &__group {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    padding: 2rem 0;
    border-bottom: solid 1px $blue-tint-dark;

    @include breakpoint($medium) {
      max-width: 20%;
      padding: 0 2rem;
      border-bottom-width: 0;
      border-right: solid 1px $blue-tint-dark;
    }

    &:last-child {
      border-width: 0;
    }
  }

  &__value {
    font-size: 1.2rem;
    font-weight: 700;
  }
}
</style>
