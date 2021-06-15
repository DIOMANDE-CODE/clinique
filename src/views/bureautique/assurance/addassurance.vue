<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <adminnavbar></adminnavbar>
        <addassurance></addassurance>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
import Header from '../../../components/header.vue';
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'
import addassurance from '../../../components/bureautique/assurance/addassurance.vue'
export default {
  name: "Dashboard",
  components: {
    Header,
    addassurance,
    adminnavbar
  },
};
</script> 
