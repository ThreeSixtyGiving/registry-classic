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

    <span v-for="(badge, index) in badges" :key="index" class="dashboard-publisher-result__badge">
      <IconBadge :badge="badge" />
    </span>

    <hr class="separator-light">

    <h5>Total grants published</h5>
    <div>
      <YearsChart :chart="publisher.chart" />
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
  computed: {
    calculateBadges: function() {
      return {
        badges: [
          {
            "iconName": "location_on",
            "label": "Include recipient location codes"
          },
          {
            "iconName": "edit_location",
            "label": "Include grant location name"
          },
          {
            "iconName": "add_location",
            "label": "Include grant location codes"
          },
          {
            "iconName": "money",
            "label": "Include charity or company nos."
          },
          {
            "iconName": "confirmation_number",
            "label": "Include external org IDs"
          },
          {
            "iconName": "event_note",
            "label": "Include grant duration"
          },
          {
            "iconName": "format_quote",
            "label": "Include programme names"
          },
          {
            "iconName": "label",
            "label": "Include classifications"
          },
          {
            "overlaid_text": "xlsx",
            "label": "Publish using spreadsheets"
          },
          {
            "iconName": "reorder",
            "label": "Include metadata"
          },
          {
            "iconName": "event_available",
            "label": "Published data in the last year"
          }
        ]
      }
    }
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
