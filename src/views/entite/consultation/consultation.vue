<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <adminnavbar></adminnavbar>
        <consultation></consultation>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
// import header from "../components/header.vue";

import Header from '../../../components/header.vue'
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'
import consultation from '../../../components/entite/consultation/consultation.vue'

export default {
  components: {
    Header,
    adminnavbar,
    consultation
  },
};
</script>
