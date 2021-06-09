<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <adminnavbar></adminnavbar>
        <editdepartement></editdepartement>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
import Header from '../../../components/header.vue';
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'
import editdepartement from '../../../components/bureautique/departement/editdepartement.vue'

export default {
  name: "Dashboard",
  components: {
    adminnavbar,
    Header,
    editdepartement
  },
};
</script> 
