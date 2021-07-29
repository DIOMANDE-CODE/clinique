<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <adminnavbar></adminnavbar>
        <soigner></soigner>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
// import header from "../components/header.vue";

import Header from '../../../components/header.vue'
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'
import soigner from '../../../components/entite/pensement/soigner.vue'

export default {
  components: {
    Header,
    adminnavbar,
    soigner,
  },
};
</script>
