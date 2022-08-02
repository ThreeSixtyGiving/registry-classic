<template>
  <main class="layout__content">
    <div class="layout__content-inner">
      <SortFilter :sortValues="sortValues" :publisherList="filteredPublishers" :key="dataDownloaded" v-on:sortChange="sortChange($event)" v-on:filterChange="filterChange($event)" />
      <div class="spacer-4"></div>
      <div v-if="!dataDownloaded">
        <Spinner :key="dataDownloaded" />
      </div>
      <template v-if="dataDownloaded" id="publisher-list-wrapper">
        <PublisherResult v-for="publisher in filteredPublishers" :key="publisher.prefix" :publisher="publisher" />
        <div class="spacer-1"></div>
      </template>
    </div>
  </main>
</template>

<script>
import PublisherResult from "./parts/PublisherResult";
import SortFilter from './parts/SortFilter';
import Spinner from '../generic/Spinner'

export default {
  name: "PublisherPage",
  components: {
    PublisherResult,
    SortFilter,
    Spinner,
  },
  methods: {
    sortPublisherAlpa(){
      this.filteredPublishers.sort((publisherA, publisherB)=> {
            let a = publisherA.name.toLowerCase();
            let b = publisherB.name.toLowerCase();

            if (a.indexOf("the ") == 0){
              a = a.substr(4);
            }

            if (b.indexOf("the ") == 0){
              b = b.substr(4);
            }

            if (a > b){
              if (this.sortValues.sort == "alphabeticallyDesc"){
                return -1;
              }
              return 1;
            }

            if (a < b){
              if (this.sortValues.sort == "alphabeticallyDesc"){
                return 1;
              }
              return -1;
            }

            return 0;
          });

    },
    searchFunction() {
      this.dataDownloaded = false;
      fetch(`${process.env.VUE_APP_DATASTORE_API}/publishers?format=json`)
        .then((response) => response.json())
        .then((json) => {
          this.publishers = json;
          this.filteredPublishers = this.publishers;
          this.sortPublisherAlpa();
          this.dataDownloaded = true
        })
        .catch(error => {
          console.error('Error:', error);
        });
    },
    sortChange(sortMode) {
      this.sortValues.sort = sortMode.changed;
      this.sortPublisherAlpa();
    },
    filterChange(selectedPublishers) {
      if (selectedPublishers.publisher.length) {
        this.filteredPublishers = this.publishers.filter(publisher => selectedPublishers.publisher.includes(publisher.prefix));
      } else {
        this.filteredPublishers = this.publishers;
      }
    }
  },
  data() {
    return {
      publishers: [],
      filteredPublishers: [],
      dataDownloaded: false,
      sortValues: {
        sort: "alphabeticallyAsc",
        publisher: "",
        feature: "",
        file: "",
      }
    };
  },
  created() {
    this.searchFunction();
  },
};
</script>
