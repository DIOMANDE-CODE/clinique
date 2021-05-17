<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <adminnavbar></adminnavbar>
        <departement></departement>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
import Header from '../../../components/header.vue';
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'
import departement from '../../../components/bureautique/departement/departement.vue'

export default {
  name: "Dashboard",
  components: {
    adminnavbar,
    Header,
    departement
  },
};
</script> 
