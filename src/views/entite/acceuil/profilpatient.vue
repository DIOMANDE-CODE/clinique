<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <adminnavbar></adminnavbar>
        <profilepatient></profilepatient>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
// import header from "../components/header.vue";

import Header from '../../../components/header.vue'
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'
import profilepatient from '../../../components/entite/acceuil/profilpatient.vue'

export default {
  components: {
    Header,
    adminnavbar,
    profilepatient
  },
};
</script>
