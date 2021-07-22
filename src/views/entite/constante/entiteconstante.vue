<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <adminnavbar></adminnavbar>
        <entiteconstante></entiteconstante>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
// import header from "../components/header.vue";

import Header from '../../../components/header.vue'
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'
import entiteconstante from '../../../components/entite/constante/entiteconstante.vue'

export default {
  components: {
    Header,
    adminnavbar,
    entiteconstante
  },
};
</script>
