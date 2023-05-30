<template>
  <div :class="$route.name !== 'publishers' ? 'layout layout--single-column' : 'layout'">
    <Nav />
    <hr class="separator-light">
    <main>
      <div class="layout__content dashboard-page">
        <TopStats />
        <Tabs />
          <router-view />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Nav from "./parts/Nav";
import TopStats from "./parts/TopStats";
import Footer from "./parts/Footer";
import Tabs from "./parts/Tabs";

export default {
  name: "HomePage",
  components: {
    Nav,
    TopStats,
    Footer,
    Tabs,
  },
};
</script>

<style lang="css" scoped>
@import "../../assets/styles/main.css";
</style>
