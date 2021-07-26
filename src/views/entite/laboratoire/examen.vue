<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <adminnavbar></adminnavbar>
        <examen></examen>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
// import header from "../components/header.vue";

import Header from '../../../components/header.vue'
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'
import examen from '../../../components/entite/laboratoire/examen.vue'

export default {
  components: {
    Header,
    adminnavbar,
    examen
  },
};
</script>
