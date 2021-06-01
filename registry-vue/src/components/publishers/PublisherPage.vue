<template>
  <main class="layout__content">
    <div class="layout__content-inner">
      <DataTable />
      <div class="spacer-2"></div>
      <SortFilter />
      <div class="spacer-4"></div>
      <div v-if="!dataDownloaded">
        <Spinner />
      </div>
      <template v-if="dataDownloaded" id="publisher-list-wrapper">
        <PublisherResult v-for="publisher in publishers" :key="publisher.prefix" :publisher="publisher" />
        <div class="spacer-1"></div>
      </template>
    </div>
  </main>
</template>

<script>
import PublisherResult from "./parts/PublisherResult";
import DataTable from './parts/DataTable';
import SortFilter from './parts/SortFilter';
import Spinner from '../generic/Spinner'

export default {
  name: "PublisherPage",
  components: {
    PublisherResult,
    DataTable,
    SortFilter,
    Spinner,
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
      publishers: {},
      dataDownloaded: false
    };
  },
  created() {
    this.searchFunction();
  },
};
</script>
