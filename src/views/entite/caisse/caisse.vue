<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <adminnavbar></adminnavbar>
        <caisse></caisse>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
// import header from "../components/header.vue";

import Header from '../../../components/header.vue'
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'
import caisse from '../../../components/entite/caisse/caisse.vue'

export default {
  components: {
    Header,
    adminnavbar,
    caisse,
  },
};
</script>
