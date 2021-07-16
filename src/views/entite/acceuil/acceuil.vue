<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <adminnavbar></adminnavbar>
        <acceuil></acceuil>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
// import header from "../components/header.vue";

import Header from '../../../components/header.vue'
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'
import acceuil from "../../../components/entite/acceuil/acceuil.vue"

export default {
  components: {
    Header,
    adminnavbar,
    acceuil
  },
};
</script>
