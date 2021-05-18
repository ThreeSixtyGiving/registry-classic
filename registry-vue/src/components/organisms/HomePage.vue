<template>
  <div class="layout layout--single-column">
    <header class="layout__header">
      <Hero />
    </header>
    <router-view />
  </div>
</template>

<script>
import Hero from "../molecules/Hero"

export default {
  name: "HomePage",
  components: {
    Hero,
  },
};
</script>
