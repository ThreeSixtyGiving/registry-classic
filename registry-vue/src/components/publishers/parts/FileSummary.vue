<template>
<div >
  <div class="file-summary grid grid--three-columns">
    <div class="grid__1">
      {{ file.distribution.title }}
    </div>
    <div class="grid__1 align-right">
      <span class="file-summary__label">Records</span>
      <span class="file-summary__stat">{{ file.aggregate.count }}</span>
    </div>
    <div class="grid__1 align-right">
      <span class="file-summary__label">Total Grants &pound;</span>
      {{ file.aggregate.currencies.GBP.total_amount }}
      <span class="file-summary__stat">{{ file.grant_total_shorthand }}</span>
    </div>
    <div class="grid__1">
     <a v-bind:href="file.distribution.downloadURL"> <span class="tag file-summary__specs">{{ file.datagetter_data.file_type }} &ndash; {{ file.datagetter_data.file_size }}</span></a>
    </div>
    <div class="grid__1 align-right">
      <span class="file-summary__label">Valid data</span>
      <MaterialIcon v-if="file.datagetter_data.valid" iconName='check_circle_outline' />
      <MaterialIcon v-else iconName='priority_high' />
    </div>
    <div class="grid__1 align-right">
      <span class="file-summary__label">Licence</span>
      Unknown
      <span v-if="file.licence === 'cc'" class="file-summary__native-icon">
        <img src="@/assets/images/icons/cc.svg" alt="">
      </span>
      <span v-else class="file-summary__stat">{{ file.licence }}</span>
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

