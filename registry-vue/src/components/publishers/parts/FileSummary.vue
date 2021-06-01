<template>
  <div class="file-summary grid grid--three-columns">
  <div class="grid__1">
    {{ summary.description }}
  </div>
  <div class="grid__1 align-right">
    <span class="file-summary__label">Records</span>
    <span class="file-summary__stat">{{ summary.num_records }}</span>
  </div>
  <div class="grid__1 align-right">
    <span class="file-summary__label">Total Grants &pound;</span>
    <span class="file-summary__stat">{{ summary.grant_total_shorthand }}</span>
  </div>
  <div class="grid__1">
    <span class="tag file-summary__specs">{{ summary.file_type }} &ndash; {{ summary.file_size }}</span>
  </div>
  <div class="grid__1 align-right">
    <span class="file-summary__label">Valid data</span>
    <MaterialIcon v-if="summary.validData" iconName='check_circle_outline' />
    <MaterialIcon v-else iconName='priority_high' />
  </div>
  <div class="grid__1 align-right">
    <span class="file-summary__label">Licence</span>
    <span v-if="summary.licence === 'cc'" class="file-summary__native-icon">
      <img src="@/assets/images/icons/cc.svg" alt="">
    </span>
    <span v-else class="file-summary__stat">{{ summary.licence }}</span>
  </div>
</div>
</template>

<script>
import MaterialIcon from '../../generic/MaterialIcon';

export default {
  name: 'FileSummary',
  components: {
    MaterialIcon,
  },
  props: {
    summary: {},
  }
}
</script>

<style lang="scss" scoped>
.file-summary {
  align-items: baseline;

  &__label {
    margin-right: 0.5rem;
  }

  &__stat {
    font-size: 2rem;
  }

  &__specs {
    // This is also a `.tag` so gets most styling from that element.
    border-color: $red;
    color: $red;
  }

  &__native-icon {
    position: relative;
    top: 5px;

    img {
      width: 22px;
      height: auto;
    }
  }
}
</style>
