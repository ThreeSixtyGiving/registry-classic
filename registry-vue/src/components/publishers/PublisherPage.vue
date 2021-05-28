<template>
  <main class="layout__content">
    <div class="layout__content-inner">
      <div id="search-wrapper">
        <SearchFieldVue :searchFunction="searchFunction" />
      </div>
      <div v-if="dataDownloaded" id="publisher-list-wrapper">
        <PublisherResult v-for="publisher in publishers" :key="publisher.prefix" :publisher="publisher" />
      </div>
    </div>
  </main>
</template>

<script>
import SearchFieldVue from "./parts/SearchField";
import PublisherResult from "./parts/PublisherResult";

export default {
  name: "PublisherPage",
  components: {
    SearchFieldVue,
    PublisherResult,
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
          this.dataDownloaded = true
        });
    },
  },
  data() {
    return {
      publishers: Object,
      dataDownloaded: {
        type: Boolean,
        default: false
      }
    };
  },
  created() {
    this.searchFunction();
  },
};
</script>
