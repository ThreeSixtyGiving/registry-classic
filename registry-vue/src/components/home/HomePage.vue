<template>
  <div class="layout layout--single-column">
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

<style lang="scss" scoped>
.dashboard-page {
  &__back-link {
    color: $black;
  }

  &__pager {
    display: flex;
    justify-content: center;
    margin-bottom: 48px;
  }
}
</style>
