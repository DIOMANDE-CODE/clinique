<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <adminnavbar></adminnavbar>
        <attribution></attribution>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
import Header from '../../../components/header.vue'
import attribution from "../../../components/bureautique/attribution/attribution.vue"
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'

export default {
  name: "Dashboard",
  components: {
    Header,
    attribution,
    adminnavbar
  },
};
</script>
