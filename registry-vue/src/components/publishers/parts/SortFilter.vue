<template>
  <div>
    <h4>Sort:</h4>

    <div class="sort-filters">
      <div v-for="(filter,index) in filters" :key="`filter-${index}`" class="sort-filters__select-wrapper">
        <select v-model="values[filter.id]" @change="filterChange()" :if="filter.active ? `class=sort-filters__filter-active aria-label=${filter.status}` : ''">
          <option v-if="filter.label" value="">{{ filter.label }}</option>
          <option v-for="(option, index) in filter.options" :key="`option-${index}`" :value="`option-${index}`" :selected="filter.activeDefault">{{ option }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SortFilter",
  data() {
    return {
      filters: [
        {
          id: 'sort',
          active: true,
          activeDefault: true,
          options: ['Alphabetically', 'Total grants', 'Total amount'],
        },
        {
          id: 'recipient',
          label: "Filter by recipient",
          active: true,
          options: ['Jim', 'Pete', 'Simon'],
        },
        {
          id: 'feature',
          label: "Filter by data feature",
          active: true,
          options: ['Include metadata', 'Include external org IDs', 'Include location codes'],
        },
        {
          id: 'file',
          label: "Filter by data file",
          active: true,
          options: ['CSV', 'JSON', 'XLSX', 'ODS'],
        },
      ],
      values: {
        sort: "option-0",
        recipient: "",
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
// Custom select approach mostly inspired by https://moderncss.dev/custom-select-styles-with-pure-css/
.sort-filters {
  $border-arrow-colour: hsla(var(--gray-30-hsl), 1);

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-gap: 10px;

  &__select-wrapper {
    display: grid;
    grid-template-areas: "select";
    align-items: center;
    width: 100%;

    border: solid 1px $border-arrow-colour;
    border-radius: 0.25rem;
    padding: 0.25rem 0.5rem;
    background-color: #fff;
    cursor: pointer;

    &:after {
      grid-area: select;
      justify-self: end;

      content: "";
      width: 0.8rem;
      height: 0.5rem;
      background-color: $border-arrow-colour;
      clip-path: polygon(100% 0%, 0 0%, 50% 100%);
    }
  }

  select {
    grid-area: select;

    appearance: none;
    background-color: transparent;
    border: none;
    padding: 0 1rem 0 0;
    margin: 0;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;

    color: $border-arrow-colour;

    &.sort-filters__filter-active {
      color: $black;
    }
  }
}
</style>
