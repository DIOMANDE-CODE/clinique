<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <adminnavbar></adminnavbar>
        <editservice></editservice>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
import Header from '../../../components/header.vue';
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'
import editservice from '../../../components/bureautique/specialite/editspecialite.vue'

export default {
  name: "Dashboard",
  components: {
    adminnavbar,
    Header,
    editservice
  },
};
</script> 
