<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <adminnavbar></adminnavbar>
        <editdiagnostic></editdiagnostic>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
import Header from '../../../components/header.vue';
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'
import editdiagnostic from "../../../components/bureautique/diagnostic/editdiagnostic.vue"

export default {
  name: "Dashboard",
  components: {
    adminnavbar,
    Header,
    editdiagnostic
  },
};
</script> 
