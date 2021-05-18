<template>
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
</template>

<script>
import PublisherListVue from "./parts/PublisherList";
import PublisherSummaryVue from "./parts/PublisherSummary";
import SearchFieldVue from "./parts/SearchField";

export default {
  name: "PublisherPage",
  components: {
    PublisherListVue,
    PublisherSummaryVue,
    SearchFieldVue,
  },
  methods: {
    searchFunction(searchTerm = null) {
      const query =
        searchTerm !== null ? [`&search=${searchTerm}`].join("&") : "";
      fetch(
        `http://store.dev.default.threesixtygiving.uk0.bigv.io/api/dashboard/publishers?format=json${query}`
      )
        .then((response) => response.json())
        .then((json) => {
          this.publishers = json;
        });
    },
  },
  data() {
    return {
      publishers: {},
    };
  },
  created() {
    this.searchFunction();
  },
};
</script>
