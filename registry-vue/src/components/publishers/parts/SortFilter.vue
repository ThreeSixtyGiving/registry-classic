<template>
  <div>
    <h4>Sort:</h4>
    <div class="sort-filters" style="display: grid; grid-template-columns: 2fr 2fr 2fr 1fr">
      <v-select :options="filters[0].options" :clearable=false :reduce="(option) => option.code" :value="sortMode" @input="sortChange" :placeholder="filters[0].label">
      </v-select>
      <v-select :options="filters[1].options" label="name" :reduce="(publisher) => publisher.prefix" :value="filteredPublishers" @input="publisherChange" :placeholder="filters[1].label" multiple>
      </v-select>
<!--      <v-select :options="filters[2].options" label="label" :reduce="(badge) => badge.qualityMetric" :value="filteredBadges" @input="badgeChange" :placeholder="filters[2].label" multiple>
      </v-select> -->
      <button class="clear-all" @click="clearFilters">Clear all</button>
    </div>
  </div>
</template>

<script>
import 'vue-select/dist/vue-select.css';

export default {
  name: "SortFilter",
  props: {
    badgesList: {},
    publisherList: {},
    sortMode: {},
    filteredBadges: {},
    filteredPublishers: {},
  },
  data() {
    return {
      filters: [
        {
          id: 'sort',
          label: "Please select a sorting option",
          activeDefault: true,
          options: [{code: 'alphabeticallyAsc', label: 'Alphabetically (ascending)'}, { code: 'alphabeticallyDesc', label: 'Alphabetically (descending)'}],
        },
        {
          id: 'publisher',
          label: "Select publisher(s)",
          options: this.publisherList,
        },
        {
          id: 'feature',
          label: "Filter by data feature",
          options: this.badgesList,
        },
      ],
    }
  },
  methods: {
    sortChange(changed) {
      this.sortMode = changed;
      this.$emit('sortChange', this.sortMode);
    },
    badgeChange(changed) {
      const query = { ...this.$route.query, badges: changed };
      this.$router.replace({ query });
      this.$emit('badgeChange', changed);
    },
    publisherChange(changed) {
      const query = { ...this.$route.query, publishers: changed };
      this.$router.replace({ query });
      this.$emit('publisherChange', changed);
    },
    clearFilters() {
      this.publisherChange([]);
      this.badgeChange([]);
    }
  },
}
</script>
