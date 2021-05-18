<template>
  <div class="layout layout--single-column">
    <main class="layout__content">
      <div class="layout__content-inner">
        <div id="search-wrapper">
          <SearchFieldVue :searchFunction="searchFunction" />
        </div>
        <div id="publisher-summary-wrapper">
          <PublisherSummaryVue />
        </div>
        <div id="publisher-list-wrapper">
          <PublisherListVue :publishers="publishers" />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import PublisherListVue from "../molecules/PublisherList";
import PublisherSummaryVue from "../molecules/PublisherSummary";
import SearchFieldVue from "../molecules/SearchField";

export default {
  name: "PublisherPage",
  components: {
    PublisherListVue,
    PublisherSummaryVue,
    SearchFieldVue,
  },
  props: {
    searchFunction: { type: Function },
    publishers: {},
  },
};
</script>
