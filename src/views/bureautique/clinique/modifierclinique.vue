<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <modifierclinique></modifierclinique>
        <adminnavbar></adminnavbar>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
// import header from "../components/header.vue";

import Header from '../../../components/header.vue'
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'
import modifierclinique from '../../../components/bureautique/clinique/modifierclinique.vue'

export default {
  components: {
    Header,
    modifierclinique,
    adminnavbar
  },
};
</script>
