<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <adminnavbar></adminnavbar>
        <fairetraitement></fairetraitement>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
// import header from "../components/header.vue";

import Header from '../../../components/header.vue'
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'
import fairetraitement from '../../../components/entite/urgence/fairetraitement.vue'

export default {
  components: {
    Header,
    adminnavbar,
    fairetraitement,
  },
};
</script>
