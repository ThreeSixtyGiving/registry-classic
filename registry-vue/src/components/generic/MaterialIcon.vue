<template>
  <div class="icon">
    <span v-if="overlaidText" class="icon__overlaid-text">{{ overlaidText }}</span>
    <i v-else class="material-icons icon__mat-icon">{{ iconName }}</i>
  </div>
</template>

<script>
export default {
  name: 'MaterialIcon',
  props: {
    overlaidText: null,
    iconName: null,
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../../360-ds/src/components/02-elements/icon/icon.scss";
</style>
