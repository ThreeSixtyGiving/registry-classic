<template>
  <div>
    <div class="tabs" v-if="$router.currentRoute.name !== 'publisher'">
      <span :class="`tab tab${$router.currentRoute.name === 'overview' ? '--active' : '--inactive'}`">
        <a class="tab__inner" href="/overview">Overview</a>
      </span>
    
      <span :class="`tab tab${$router.currentRoute.name === 'publishers' ? '--active' : '--inactive'}`">
        <a class="tab__inner" href="/publishers">Publishers</a>
      </span>
      <span class="tabs-empty-bar" />
    </div>

    <div v-if="$router.currentRoute.name === 'publisher'">
      <a href="/publishers" class="dashboard-page__back-link">
        <MaterialIcon :iconName="'arrow_back'" />
        Back to Publishers
      </a>
    </div>
  </div>
</template>

<script>
import MaterialIcon from '../../generic/MaterialIcon'
 
export default {
  name: "Tabs",
  components: {
    MaterialIcon,
  }
};
</script>

<style lang="scss">

.tabs {
  display: flex;
  margin-bottom: 1rem;

  &-empty-bar {
    display: inline-block;
    flex-grow: 1;
    border-bottom: solid 1px #e0e0e0;
  }
}

.tab {
  $light-border-colour: #e0e0e0;
  display: inline-block;

  &__inner {
    color: inherit;
    display: inline-block;
    padding: 1rem;
    border: solid 1px $light-border-colour;

    &:hover {
      color: inherit;
    }
  }

  &--active {
    border-top: 4px solid $teal;

    .tab__inner {
      border-width: 0 1px;
    }
  }

  &--inactive {
    background: hsla(var(--gray-10-hsl), 1);
  }
}
</style>
