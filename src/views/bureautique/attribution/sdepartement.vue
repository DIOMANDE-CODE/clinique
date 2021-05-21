<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <sdepartement></sdepartement>
        <adminnavbar></adminnavbar>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
import Header from '../../../components/header.vue'
import sdepartement from '../../../components/bureautique/attribution/sdepartement.vue'
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'
export default {
  name: "Dashboard",
  components: {
    Header,
    sdepartement,
    adminnavbar
  },
};
</script>
