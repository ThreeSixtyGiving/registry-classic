<template>
  <a class="alert-tag alert-tag--anchor" v-on:click="showModal()">
    <span class="alert-tag__icon"><img src="@/assets/images/icons/info.svg" alt=""/></span>
    <span class="alert-tag__content">{{ label }}</span>
  </a>
</template>

<script>
export default {
  name: "AlertTag",
  props: {
    href: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
  },
  methods: {
    showModal() {
      this.$emit('showModalEvent');
    }
  }
};
</script>
