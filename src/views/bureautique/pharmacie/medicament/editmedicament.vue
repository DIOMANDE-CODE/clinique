<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <adminnavbar></adminnavbar>
        <editmedicament></editmedicament>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
import Header from '../../../../components/header.vue';
import adminnavbar from '../../../../components/bureautique/adminnavbar.vue'
import editmedicament from "../../../../components/bureautique/pharmacie/medicament/editmedicament.vue"

export default {
  name: "Dashboard",
  components: {
    adminnavbar,
    Header,
    editmedicament
  },
};
</script> 
