<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <adminnavbar></adminnavbar>
        <pensement></pensement>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
// import header from "../components/header.vue";

import Header from '../../../components/header.vue'
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'
import pensement from '../../../components/entite/pensement/pensement.vue'

export default {
  components: {
    Header,
    adminnavbar,
    pensement,
  },
};
</script>
