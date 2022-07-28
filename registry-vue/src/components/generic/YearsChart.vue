<template>
  <ul class="years-chart">
    <li v-for="(item, index) in chart" :key="`item-${index}`" class="years-chart__item" :style="`--opacity: ${calculateOpacity(item.value)};`">
      <div class="years-chart__block" :aria-label="item.detail" :title="item.detail">
        <span>{{ item.value_text }}</span>
      </div>
      <div class="years-chart__label">{{ item.label }}</div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "YearsChart",
  props: {
    chart: {},
  },
  data: function() {
    return {
      grantBandings: [0, 25, 50, 100, 250, 500, 1000, 5000],
    };
  },
  methods: {
    calculateOpacity(value){
      if (value == this.grantBandings[0] || typeof value == "undefined" || value == null){
        return 0;
      }
      if (value < this.grantBandings[1]){
        return 1 / this.grantBandings.length;
      }
      if (value < this.grantBandings[2]){
        return 2 / this.grantBandings.length;
      }
      if (value < this.grantBandings[3]){
        return 3 / this.grantBandings.length;
      }
      if (value < this.grantBandings[4]){
        return 4 / this.grantBandings.length;
      }
      if (value < this.grantBandings[5]){
        return 5 / this.grantBandings.length;
      }
      if (value < this.grantBandings[6]){
        return 6 / this.grantBandings.length;
      }
      if (value < this.grantBandings[7]){
        return 7 / this.grantBandings.length;
      }
      return 1;
    },
  },
}
</script>
