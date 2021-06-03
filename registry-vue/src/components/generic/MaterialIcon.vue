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
.icon {
  --icon-color: var(--color-teal);

  display: inline-block;
  $icon-size: 24px;

  &__overlaid-text {
    font-size: $icon-size / 2;
    font-weight: 700;
    color: $white;
    background: var(--icon-color);
    justify-content: center;
    padding: 2px;
    border-radius: 2px;
    min-width: 4rem;
    vertical-align: middle;
  }

  &__mat-icon {
    font-size: $icon-size;
    vertical-align: bottom;
  }

  &__mat-icon {
    color: var(--icon-color);
  }
}
</style>
