<template>
  <div class="radio-buttons">
    <div v-on:click="setOverviewMode(radioItem.value)" v-for="radioItem in radioOptions" :key="radioItem.value" class="radio-buttons__group">
      <input class="screen-reader-only" type="radio" :id="radioItem.value" name="overviewMode" :value="radioItem.value" :checked="overviewMode === radioItem.value">
      <label class="radio-buttons__button" :for="radioItem.value">{{ radioItem.name }}</label>
    </div>
  </div>    
</template>

<script>
export default {
  name: "RadioButtons",
  data: function() {
    return {
      radioOptions: [{ name: "Publisher", value: "publisher", default: true }, { name: "Grant", value: "grant" }],
    }
  },
  props: {
    overviewMode: String,
  },
  methods: {
    setOverviewMode(value) {
      this.$emit('setOverviewMode', value)
    }
  }
};
</script>
