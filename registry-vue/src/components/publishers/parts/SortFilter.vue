<template>
  <div>
    <h4>Sort: (not implemented)</h4>

    <div class="sort-filters">
      <div v-for="(filter, index) in filters" :key="`filter-${index}`" class="sort-filters__select-wrapper">
        <select v-model="values[filter.id]" @change="filterChange()" :if="filter.active ? `class=sort-filters__filter-active aria-label=${filter.status}` : ''">
          <option v-if="filter.label" value="">{{ filter.label }}</option>
          <option v-for="(option, key, index) in filter.options" :key="`option-${index}`" :value="key" :selected="filter.activeDefault">{{ option }}</option>
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
  },
  data() {
    return {
      filters: [
        {
          id: 'sort',
          active: true,
          activeDefault: true,
          options: {alphabetically: 'Alphabetically', grants: 'Total grants', modified: 'Last modified'},
        },
        {
          id: 'publisher',
          label: "Filter by publisher",
          active: true,
          options: this.publisherList,
        },
        {
          id: 'feature',
          label: "Filter by data feature",
          active: true,
          options: {metadata: 'Include metadata', externalIds: 'Include external org IDs', locationCode: 'Include location codes'},
        },
        {
          id: 'file',
          label: "Filter by data file",
          active: true,
          options: {csv: 'CSV', json: 'JSON', xlsx: 'XLSX', ods: 'ODS'},
        },
      ],
      values: {
        sort: "alphabetically",
        publisher: "",
        feature: "",
        file: "",
      }
    }
  },
  methods: {
    filterChange() {
      this.$emit('filterChange', this.values);
    },
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../../360-ds/src/components/04-modules/sort-filter-bar/sort-filter-bar.scss";
</style>
