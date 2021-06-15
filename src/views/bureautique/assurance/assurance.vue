<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <adminnavbar></adminnavbar>
        <assurance></assurance>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
import Header from '../../../components/header.vue';
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'
import assurance from '../../../components/bureautique/assurance/assurance.vue'
export default {
  name: "Dashboard",
  components: {
    adminnavbar,
    Header,
    assurance
  },
};
</script> 
