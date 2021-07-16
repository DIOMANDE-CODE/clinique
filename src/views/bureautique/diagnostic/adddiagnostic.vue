<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <adminnavbar></adminnavbar>
        <adddiagnostic></adddiagnostic>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
import Header from '../../../components/header.vue';
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'
import adddiagnostic from "../../../components/bureautique/diagnostic/adddiagnostic.vue"

export default {
  name: "Dashboard",
  components: {
    adminnavbar,
    Header,
    adddiagnostic
  },
};
</script> 
