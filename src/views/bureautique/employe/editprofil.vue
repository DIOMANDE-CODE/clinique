<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <editprofile></editprofile>
        <adminnavbar></adminnavbar>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
// import header from "../components/header.vue";
import Header from '../../../components/header.vue'
import editprofile from '../../../components/bureautique/employe/editprofile.vue'
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'

export default {
  name: "profilemploye",
  components: {
    Header,
    editprofile,
    adminnavbar
  },
};
</script>
