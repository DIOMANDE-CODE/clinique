<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <eprofile></eprofile>
        <adminnavbar></adminnavbar>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
// import header from "../components/header.vue";
import Header from '../../../components/header.vue'
import eprofile from '../../../components/bureautique/employe/eprofile.vue'
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'

export default {
  name: "profilemploye",
  components: {
    Header,
    eprofile,
    adminnavbar
  },
};
</script>
