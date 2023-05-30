<template>
<main class="layout__content">
  <div class="grantnav-search__wrapper">
    <div class="grantnav-search__sidebar">
      <h2 class="grantnav-search__sidebar--heading">Refine your search</h2>

      <div class="grantnav-search__sidebar--filters">
        <SearchPublisherFilter :publisherList="publishers" :filteredPublishers="filteredPublishers" :key="dataDownloaded" @updateFilters="updateFilters($event)" />
        <br>
        <SearchBadgeFilter :badgesList="badges" :filteredBadges="filteredBadges" @updateFilters="updateFilters($event)" />
      </div>
    </div>
    <div class="grantnav-search__content">
      <SearchSortFilter :sortMode="sortMode" @sortChange="sortChange($event)" />
      <div class="spacer-4"></div>
      <div v-if="!dataDownloaded">
        <Spinner :key="dataDownloaded" />
      </div>
      <template v-if="dataDownloaded">
        <PublisherResult v-for="publisher in publisherResults" :key="publisher.prefix" :publisher="publisher" />
          <div class="spacer-1"></div>
        </template>
      </div>
    </div>
  </main>
</template>

<script>
import PublisherResult from "./parts/PublisherResult";
import SearchPublisherFilter from './parts/SearchPublisherFilter';
import SearchBadgeFilter from './parts/SearchBadgeFilter';
import SearchSortFilter from './parts/SearchSortFilter';
import Spinner from '../generic/Spinner'
import { badges } from './data/badges';

export default {
  name: "PublisherPage",
  components: {
    PublisherResult,
    SearchBadgeFilter,
    SearchPublisherFilter,
    SearchSortFilter,
    Spinner,
  },
  methods: {
    sortPublisherAlpha(){
      this.publisherResults.sort((publisherA, publisherB)=> {
        let a = publisherA.name.toLowerCase();
        let b = publisherB.name.toLowerCase();

        if (a.indexOf("the ") == 0){
          a = a.substr(4);
        }

        if (b.indexOf("the ") == 0){
          b = b.substr(4);
        }

        if (a > b){
          if (this.sortMode == "alphabeticallyDesc"){
            return -1;
          }
          return 1;
        }

        if (a < b){
          if (this.sortMode == "alphabeticallyDesc"){
            return 1;
          }
          return -1;
        }

        return 0;
      });
    },
    sortChange(sortMode) {
      this.sortMode = sortMode;
      this.sortPublisherAlpha();
    },
    badgeChange(selectedBadges, selectionType) {
      const selectedBadgesArray = new Array(selectedBadges).flat();
      
      if (selectedBadges.length) {
        if (selectionType === 'include') {
        this.publisherResults = this.publisherResults.filter(publisher => {
          if (publisher.quality) {
            return selectedBadgesArray.every(badge => publisher.quality[badge] === 100);
          }
        });
      } else {
        this.publisherResults = this.publisherResults.filter(publisher => {
          if (publisher.quality) {
            return selectedBadgesArray.every(badge => publisher.quality[badge] !== 100);
          }
        });
      }
      } else {
        this.publisherResults = this.publishers;
      }
    },
    publisherChange(selectedPublishers, selectionType) {
      if (selectedPublishers.length) {
        if (selectionType === 'include') {
          this.publisherResults = this.publishers.filter(publisher => selectedPublishers.includes(publisher.prefix));
        } else {
          this.publisherResults = this.publishers.filter(publisher => !selectedPublishers.includes(publisher.prefix));
        }
      } else {
        this.publisherResults = this.publishers;
      }
    },
    updateFilters () {
      this.publisherResults = this.publishers

      const publisherParams = this.$route.query.publishers || [];
      const publisherSelection = this.$route.query.publisherSelection || 'include';
      const badgeParams = this.$route.query.badges || [];
      const badgeSelection = this.$route.query.badgeSelection || 'include';

      this.filteredPublishers = publisherParams || null;
      this.filteredBadges = badgeParams || null;
      
      if (publisherParams.length) {
        this.publisherChange(publisherParams, publisherSelection);
      } 
      
      if (badgeParams.length) {
        this.badgeChange(badgeParams, badgeSelection);
      }

    }
  },
  data() {
    return {
      badges,
      publishers: [],
      filteredBadges: [],
      filteredPublishers: [],
      publisherResults: [],
      dataDownloaded: false,
      sortMode: "alphabeticallyAsc",
      publisherUpdated: false,
      badgeUpdated: false,
    }
  },
  created() {
    this.dataDownloaded = false;
    this.badgeUpdated = false;
    this.publisherUpdated = false;
    fetch(`${process.env.VUE_APP_DATASTORE_API}/publishers?format=json`)
      .then((response) => response.json())
      .then((json) => {
        this.publishers = json;
        this.publisherResults = this.publishers;
        this.sortPublisherAlpha();
        this.dataDownloaded = true;
        this.updateFilters({})
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
};
</script>
