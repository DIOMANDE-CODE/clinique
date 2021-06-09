<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <adminnavbar></adminnavbar>
        <ajoutspecialite></ajoutspecialite>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
import Header from '../../../components/header.vue';
import ajoutspecialite from '../../../components/bureautique/specialite/addspecialite.vue'
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'
export default {
  name: "Dashboard",
  components: {
    Header,
    ajoutspecialite,
    adminnavbar
  },
};
</script> 
