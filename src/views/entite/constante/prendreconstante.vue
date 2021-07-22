<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <adminnavbar></adminnavbar>
        <prendreconstante></prendreconstante>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
// import header from "../components/header.vue";

import Header from '../../../components/header.vue'
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'
import prendreconstante from '../../../components/entite/constante/prendreconstante.vue'

export default {
  components: {
    Header,
    adminnavbar,
    prendreconstante
  },
};
</script>
