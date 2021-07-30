<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <adminnavbar></adminnavbar>
        <traiterurgence></traiterurgence>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
// import header from "../components/header.vue";

import Header from '../../../components/header.vue'
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'
import traiterurgence from '../../../components/entite/urgence/traiterurgence.vue'

export default {
  components: {
    Header,
    adminnavbar,
    traiterurgence,
  },
};
</script>
