<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <adminnavbar></adminnavbar>
        <pharmacie></pharmacie>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
import Header from '../../../components/header.vue';
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'
import pharmacie from './../../../components/bureautique/pharmacie/pharmacie.vue'

export default {
  name: "Dashboard",
  components: {
    adminnavbar,
    Header,
    pharmacie
  },
};
</script> 
