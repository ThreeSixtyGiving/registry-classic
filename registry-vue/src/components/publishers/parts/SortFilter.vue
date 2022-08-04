<template>
  <div>
    <h4>Sort:</h4>
    <div class="sort-filters">
      <v-select :options="filters[0].options" :clearable=false :reduce="(option) => option.code" :value="sortValues.sort" @input="sortChange" :placeholder="filters[0].label">
      </v-select>
      <v-select :options="filters[1].options" label="name" :reduce="(publisher) => publisher.prefix" :value="sortValues.publisher" @input="filterChange" :placeholder="filters[1].label" multiple>
      </v-select>
    </div>
  </div>
</template>

<script>
import 'vue-select/dist/vue-select.css';

export default {
  name: "SortFilter",
  props: {
    publisherList: {},
    sortValues: {}
  },
  data() {
    return {
      filters: [
        {
          id: 'sort',
          label: "Please select a sorting option",
          active: true,
          activeDefault: true,
          options: [{code: 'alphabeticallyAsc', label: 'Alphabetically (ascending)'}, { code: 'alphabeticallyDesc', label: 'Alphabetically (descending)'}],
        },
        {
          id: 'publisher',
          label: "Filter by publisher",
          active: true,
          options: this.publisherList,
        },/*
        {
          id: 'feature',
          label: "Filter by data feature",
          active: false,
          options: {metadata: 'Include metadata', externalIds: 'Include external org IDs', locationCode: 'Include location codes'},
        },
        {
          id: 'file',
          label: "Filter by data file",
          active: false,
          options: {csv: 'CSV', json: 'JSON', xlsx: 'XLSX', ods: 'ODS'},
        },*/
      ],
    }
  },
  methods: {
    sortChange(changed) {
      this.sortValues.changed = changed;
      this.$emit('sortChange', this.sortValues);
    },
    filterChange(changed) {
      this.sortValues.publisher = changed;
      const query = { ...this.$route.query, publisherParams: this.sortValues.publisher };
      this.$router.replace({ query });
      this.$emit('filterChange', this.sortValues);
    },
  },
  created: function() {
    const publisherParams = this.$route.query.publisherParams;
    if (publisherParams) {
      this.filterChange(publisherParams);
    }
  }
}
</script>
