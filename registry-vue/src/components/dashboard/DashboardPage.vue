<template>
  <div>
    <div class="dashboard-page__section-radios">
      <RadioButtons :radioOptions="radioOptions" />
    </div>
    <div class="spacer-2 clearfix"></div>
    <DashboardCard v-for="(cardData, index) in cards" :key="`card-${index}`" :cardData="cardData" />
  </div>
</template>

<script>
import DashboardCard from "./parts/DashboardCard";
import RadioButtons from "./parts/RadioButtons";

export default {
  name: "DashboardPage",
  components: {
    DashboardCard,
    RadioButtons,
  },
  props: {
    publishers: {},
  },
  data: function () {
    return {
      radioOptions: [{ name: "Publisher", default: true }, { name: "Grant" }],
      cards: {
        cardData: {
          title: "Location data",
          description:
            "Grants with location data can be used to map grants, and help people understand where the money goes.\n",
          info_label: "Learn more about location data",
          stats: [
            {
              icon_name: "person_pin_circle",
              label: "Include recipient locations",
              value: "64%",
            },
            {
              icon_name: "edit_location",
              label: "Include grant location names",
              value: "37%",
            },
            {
              icon_name: "add_location",
              label: "Include grant location codes",
              value: "64%",
            },
          ],
        },
      }
    };
  },
};
</script>

<style lang="scss" scoped>
.dashboard-page {
  &__section-radios {
    float: right;

    label {
      min-width: 6rem;
      text-align: center;
    }
  }
}
</style>
