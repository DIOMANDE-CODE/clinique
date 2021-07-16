<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <addprofil></addprofil>
        <adminnavbar></adminnavbar>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
import Header from '../../../components/header.vue';
import addprofil from '../../../components/bureautique/profil/addprofil.vue'
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'

export default {
  name: "Dashboard",
  components: {
    Header,
    addprofil,
    adminnavbar
  },
};
</script> 
