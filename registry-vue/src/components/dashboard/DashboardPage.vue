<template>
  <main class="layout__content">
    <div class="layout__content-inner">
      <DashboardFiles />
      <DashboardGrants />
      <DashboardLocations />
      <DashboardOrgs />
      <DashboardTimeliness />
    </div>
  </main>
</template>

<script>
import DashboardFiles from "./parts/DashboardFiles";
import DashboardGrants from "./parts/DashboardGrants";
import DashboardLocations from "./parts/DashboardLocations";
import DashboardOrgs from "./parts/DashboardOrgs";
import DashboardTimeliness from "./parts/DashboardTimeliness";

export default {
  name: "DashboardPage",
  components: {
    DashboardFiles,
    DashboardGrants,
    DashboardLocations,
    DashboardOrgs,
    DashboardTimeliness
  },
  props: {
    publishers: {},
  },
};
</script>
