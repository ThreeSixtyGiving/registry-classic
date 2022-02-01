<template>
<div >
  <div class="file-summary grid grid--three-columns">
    <div class="grid__1">
      {{ file.distribution.title }}
    </div>
    <div class="grid__1 align-right">
      <span class="file-summary__label">Grants</span>
      <span class="file-summary__stat">{{ (file.aggregate.count).toLocaleString() }}</span>
    </div>
    <div class="grid__1 align-right">
      <span class="file-summary__label">Total amount &pound;</span>
      {{ (file.aggregate.currencies.GBP.total_amount).toLocaleString() }}
      <span class="file-summary__stat">{{ file.grant_total_shorthand }}</span>
    </div>
    <div class="grid__1">
     <a v-bind:href="file.distribution.downloadURL"> <span class="tag file-summary__specs">{{ file.datagetter_data.file_type }} &ndash; {{ file.datagetter_data.file_size|numeral('0b') }}</span></a>
    </div>
    <div class="grid__1 align-right">
      <span class="file-summary__label">Valid data</span>
      <MaterialIcon v-if="file.datagetter_data.valid" iconName='check_circle_outline' />
      <MaterialIcon v-else iconName='priority_high' />
    </div>
    <div class="grid__1 align-right">
      <span class="file-summary__label">License</span>
      <span v-if="file.license.indexOf('Creative Commons') === 0" class="file-summary__native-icon">
        <img src="@/assets/images/icons/cc.svg" style="height: 22px; width: 22px; vertical-align: unset" v-bind:alt="file.license" v-bind:title="file.license">
      </span>
      <span v-else class="file-summary__stat">{{ file.license }}</span>
    </div>
  </div>
  <hr class="separator-light">
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
    file: {},
    prefix: {},
  }
}
</script>

