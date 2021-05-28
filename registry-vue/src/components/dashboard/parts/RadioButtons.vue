<template>
  <div class="radio-buttons">
    <div v-for="radioItem in radioOptions" :key="radioItem.value" class="radio-buttons__group">
      <label class="radio-buttons__button" :for="radioItem.value">{{ radioItem.name }}</label>
      <input class="screen-reader-only" type="radio" :id="radioItem.value" name="overviewMode" :value="radioItem.value" :checked="radioItem.default">
    </div>
  </div>    
</template>

<script>
export default {
  name: "RadioButtons",
  props: {
    radioOptions: {},
  }
};
</script>
