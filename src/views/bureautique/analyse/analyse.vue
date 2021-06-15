<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <adminnavbar></adminnavbar>
        <analyse></analyse>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
import Header from '../../../components/header.vue';
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'
import analyse from '../../../components/bureautique/analyse/analyse.vue'

export default {
  name: "Dashboard",
  components: {
    adminnavbar,
    Header,
    analyse
  },
};
</script> 
