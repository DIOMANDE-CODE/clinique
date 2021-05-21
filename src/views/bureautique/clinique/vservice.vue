<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <adminnavbar></adminnavbar>
        <vservice></vservice>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
import Header from '../../../components/header.vue';
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'
import vservice from '../../../components/bureautique/clinique/vservice.vue'

export default {
  name: "Dashboard",
  components: {
    adminnavbar,
    Header,
    vservice
  },
};
</script> 
