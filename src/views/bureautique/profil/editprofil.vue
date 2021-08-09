<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <editprofil></editprofil>
        <adminnavbar></adminnavbar>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
import Header from '../../../components/header.vue';
import editprofil from '../../../components/bureautique/profil/editprofil.vue'
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'

export default {
  components: {
    Header,
    editprofil,
    adminnavbar
  },
};
</script> 
