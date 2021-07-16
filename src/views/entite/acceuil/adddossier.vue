<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <adminnavbar></adminnavbar>
        <adddossier></adddossier>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
// import header from "../components/header.vue";

import Header from '../../../components/header.vue'
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'
import adddossier from "../../../components/entite/acceuil/adddossier.vue"

export default {
  components: {
    Header,
    adminnavbar,
    adddossier,
  },
};
</script>
