<template>
  <ul class="years-chart">
    <li v-for="(item, index) in chart" :key="`item-${index}`" class="years-chart__item" :style="`--opacity: ${item.value};`">
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
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../../360-ds/src/components/03-components/years-chart/years-chart.scss";
</style>
