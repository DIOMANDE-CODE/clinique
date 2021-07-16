<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <adminnavbar></adminnavbar>
        <editpatient></editpatient>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
// import header from "../components/header.vue";

import Header from '../../../components/header.vue'
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'
import editpatient from '../../../components/entite/acceuil/editpatient.vue'

export default {
  components: {
    Header,
    adminnavbar,
    editpatient
  },
};
</script>
