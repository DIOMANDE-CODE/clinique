<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <adminnavbar></adminnavbar>
        <specialite></specialite>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
import adminnavbar from "../../../components/bureautique/adminnavbar.vue";
import Header from '../../../components/header.vue';
import specialite from '../../../components/bureautique/specialite/specialite.vue'

export default {
  name: "Dashboard",
  components: {
    Header,
    adminnavbar,
    specialite
  },
};
</script> 
