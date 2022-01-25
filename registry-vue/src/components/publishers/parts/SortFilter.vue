<template>
  <div>
    <h4>Sort:</h4>

    <div class="sort-filters">
      <div v-for="(filter, index) in filters" :key="`filter-${index}`" class="sort-filters__select-wrapper">
        <select v-model="sortValues[filter.id]" @change="filterChange(filter.id)" :class="filter.active ? `sort-filters__filter-active aria-label='${filter.label}'` : ''">
          <option value="" disabled>{{ filter.label }}</option>
          <option v-if="!filter.activeDefault" value="">All publishers</option>
          <option v-for="(option, key, index) in filter.options" :key="`option-${index}`" :value="key || ''" :selected="filter.activeDefault">{{ option }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
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
          options: {alphabeticallyAsc: 'Alphabetically (ascending)', alphabeticallyDesc: 'Alphabetically (descending)',},
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
    filterChange(changed) {
      this.sortValues.changed = changed;
      this.$emit('filterChange', this.sortValues);
    },
  }
}
</script>
