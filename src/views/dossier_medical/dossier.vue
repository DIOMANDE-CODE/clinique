<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <adminnavbar></adminnavbar>
        <dossier></dossier>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
// import header from "../components/header.vue";

import Header from '../../components/header.vue'
import adminnavbar from '../../components/bureautique/adminnavbar.vue'
import dossier from '../../components/dossier_medical/dossier.vue'

export default {
  components: {
    Header,
    adminnavbar,
    dossier
  },
};
</script>
