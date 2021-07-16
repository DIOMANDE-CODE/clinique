<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <adminnavbar></adminnavbar>
        <addpatient></addpatient>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
// import header from "../components/header.vue";

import Header from '../../../components/header.vue'
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'
import addpatient from "../../../components/entite/acceuil/addpatient.vue"

export default {
  components: {
    Header,
    adminnavbar,
    addpatient
  },
};
</script>
