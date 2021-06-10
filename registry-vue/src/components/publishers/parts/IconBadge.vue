<template>
  <span class="icon-badge">
    <img :src="`@/assets/images/icons/${badge.iconName}.svg`" alt="" />
    {{ badge.label }}
  </span>
</template>

<script>
export default {
  name: 'IconBadge',
  props: {
    badge: {}
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../../360-ds/src/components/03-components/icon-badge/icon-badge.scss";
</style>
