<template>
<div class="dashboard-publisher-result-wrapper">
  <div class="dashboard-publisher-result__head">
    <div class="dashboard-publisher-result__left-side">
      <div class="dashboard-publisher-result__title">
        {{ publisher.title }}
      </div>
    </div>

    <div class="dashboard-publisher-result__right-side">
      <div class="dashboard-publisher-result__date">
        Last update <time :datetime="publisher.date_timestamp">{{ publisher.date }}</time>
      </div>
    </div>
  </div>

  <span v-for="(badge, index) in publisher.badges" :key="index" class="dashboard-publisher-result__badge">
    <IconBadge :badge="badge" />
  </span>
  
  <hr class="separator-light">

  <div class="spacer-1"></div>

  <div class="dashboard-publisher-result-wrapper__external-buttons align-right">
    <a :href="`https://grantnav.threesixtygiving.org/publisher/${publisher.prefix}`" target="_blank" class="button">See in GrantNav</a>
  </div>

  <div class="spacer-3"></div>

  <div class="dashboard-publisher-result">
    <h4 class="dashboard-publisher-result__title">Total grants published</h4>
    <p>The number of grants published by award year for the past 10 years, with the total grants published that were awarded 11 or more years ago.</p>
    <YearsChart :chart="publisher.chart" />
  </div>

  <div class="dashboard-publisher-result">
    <h4 class="dashboard-publisher-result__title">Datasets</h4>
    <p>{{ publisher.files_description }}</p>
    <hr class="separator-light">
    <FileSummary v-for="(summary, index) in publisher.fileSummaries" :key="`summary-${index}`" :prefix="publisher.prefix" :summary="summary" />
  </div>
</div>
</template>

<script>
import YearsChart from "../generic/YearsChart";
import FileSummary from './parts/FileSummary.vue';
import IconBadge from './parts/IconBadge';

export default {
  name: "PublisherDetail",
  components: {
    YearsChart,
    FileSummary,
    IconBadge,
  },
  methods: {
  },
  data() {
    return {
      publisher: {
        title: "AB Charitable Trust",
        prefix: "360G-ABCT",
        date: "22 Aug 2017",
        date_timestamp: "2017-08-22",
        badges: [
          {
            "iconName": "location_on",
            "label": "Include recipient location codes"
          },
          {
            "iconName": "money",
            "label": "Include charity or company nos."
          },
          {
            "overlaid_text": "xlsx",
            "label": "Publish using spreadsheets"
          }
        ],
        files_description: "The file(s) published by AB Charitable Trust are linked\nbelow, with details of the file type and open license for each file.\n",
        fileSummaries: [
          {
            "description": "Grants from Jan 2013 to Jan 2021",
            "num_records": 783,
            "grant_total_shorthand": "12.8m",
            "file_type": "XLSX",
            "file_size": "194kB",
            "valid_data": true,
            "licence": "cc"
          }
        ]
      }
    }
  },
  created() {
  },
};
</script>

<style lang="scss" scoped>
@import "../../../../../360-ds/src/components/04-modules/dashboard-publisher-result/dashboard-publisher-result.scss";
</style>
