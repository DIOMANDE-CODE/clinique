<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <adminnavbar></adminnavbar>
        <clinique></clinique>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
// import header from "../components/header.vue";

import Header from '../../../components/header.vue'
import clinique from '../../../components/bureautique/clinique/clinique.vue'
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'

export default {
  components: {
    Header,
    clinique,
    adminnavbar
  },
};
</script>
