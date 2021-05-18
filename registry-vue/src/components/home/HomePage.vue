<template>
  <div class="layout layout--single-column">
    <header class="layout__header">
      <Hero />
      <TopStats />
    </header>
    <nav class="layout__content">
      <button><router-link to="/dashboard">Dashboard</router-link></button>
      <button><router-link to="/publishers">Publishers</router-link></button>
    </nav>
    <router-view />
  </div>
</template>

<script>
import Hero from "./parts/Hero";
import TopStats from "./parts/TopStats";

export default {
  name: "HomePage",
  components: {
    Hero,
    TopStats,
  },
};
</script>
