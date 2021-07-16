<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <adminnavbar></adminnavbar>
        <addmedicament></addmedicament>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
import Header from '../../../../components/header.vue';
import adminnavbar from '../../../../components/bureautique/adminnavbar.vue'
import addmedicament from "../../../../components/bureautique/pharmacie/medicament/addmedicament.vue"

export default {
  name: "Dashboard",
  components: {
    adminnavbar,
    Header,
    addmedicament
  },
};
</script> 
