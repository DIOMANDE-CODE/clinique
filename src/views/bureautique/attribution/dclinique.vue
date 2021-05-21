<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <dclinique></dclinique>
        <adminnavbar></adminnavbar>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
import Header from '../../../components/header.vue'
import dclinique from '../../../components/bureautique/attribution/dclinique.vue'
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'

export default {
  name: "Dashboard",
  components: {
    Header,
    dclinique,
    adminnavbar
  },
};
</script>
