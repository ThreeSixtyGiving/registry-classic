<template>
  <span class="icon-badge">
    <MaterialIcon :iconName="badge.iconName"/>
    {{ badge.label }}
  </span>
</template>

<script>
import MaterialIcon from '../../generic/MaterialIcon.vue';

export default {
  name: 'IconBadge',
  components: {
    MaterialIcon,
  },
  props: {
    badge: {}
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../../360-ds/src/components/03-components/icon-badge/icon-badge.scss";
</style>
