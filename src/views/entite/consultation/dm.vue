<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <adminnavbar></adminnavbar>
        <dm></dm>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
// import header from "../components/header.vue";

import Header from '../../../components/header.vue'
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'
import dm from '../../../components/entite/consultation/dm.vue'

export default {
  components: {
    Header,
    adminnavbar,
    dm,
  },
};
</script>
