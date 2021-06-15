<template>
  <main class="layout__content">
    <div class="layout__content-inner">
      <DataTable />
      <div class="spacer-2"></div>
      <SortFilter :publisherList="publisherList" :key="dataDownloaded" v-on:filterChange="searchFunction($event.publisher)" />
      <div class="spacer-4"></div>
      <div v-if="!dataDownloaded">
        <Spinner :key="dataDownloaded" />
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
    searchFunction(searchTerm = '') {
      this.dataDownloaded = false;
      const query = searchTerm;
        // searchTerm === '' ? '' : [`&search=${searchTerm}`].join("&");
      fetch(`${process.env.VUE_APP_DATASTORE_API}/publishers?format=json${query}`)
        .then((response) => response.json())
        .then((json) => {
          this.publishers = json;
          console.log(json);
          this.publisherList = json.reduce((list, publisher) => {
            return {...list, [publisher.prefix]: publisher.name}
          }, this.publisherList);
          this.dataDownloaded = true
        })
        .catch(error => {
          console.error('Error:', error);
        });
    },
  },
  data() {
    return {
      publishers: {},
      publisherList: {},
      dataDownloaded: false
    };
  },
  created() {
    this.searchFunction();
  },
};
</script>
