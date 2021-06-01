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
.icon-badge {
  display: inline-block;
  border: solid 1px $black;
  border-radius: 10px;
  padding: 0.5rem 0.8rem;
  margin: 0 0.5rem 0.5rem 0;
  font-size: 80%;

  @include breakpoint($medium) {
    font-size: 90%;
  }
}
</style>
