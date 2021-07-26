<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <adminnavbar></adminnavbar>
        <diagnostics></diagnostics>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
// import header from "../components/header.vue";

import Header from '../../../components/header.vue'
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'
import diagnostics from '../../../components/entite/consultation/diagnostics.vue'

export default {
  components: {
    Header,
    adminnavbar,
    diagnostics,
  },
};
</script>
