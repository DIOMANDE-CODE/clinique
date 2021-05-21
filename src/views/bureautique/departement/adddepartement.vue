<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <adddepartement></adddepartement>
        <adminnavbar></adminnavbar>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
import Header from '../../../components/header.vue';
import adddepartement from '../../../components/bureautique/departement/adddepartement.vue'
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'

export default {
  name: "Dashboard",
  components: {
    Header,
    adddepartement,
    adminnavbar
  },
};
</script> 
