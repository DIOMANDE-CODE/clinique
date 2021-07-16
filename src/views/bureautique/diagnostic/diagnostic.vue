<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <adminnavbar></adminnavbar>
        <diagnostic></diagnostic>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
import Header from '../../../components/header.vue';
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'
import diagnostic from './../../../components/bureautique/diagnostic/diagnostic.vue'

export default {
  name: "Dashboard",
  components: {
    adminnavbar,
    Header,
    diagnostic
  },
};
</script> 
