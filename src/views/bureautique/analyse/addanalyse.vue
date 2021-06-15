<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <adminnavbar></adminnavbar>
        <addanalyse></addanalyse>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
import Header from '../../../components/header.vue';
import addanalyse from '../../../components/bureautique/analyse/addanalyse.vue'
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'

export default {
  name: "Dashboard",
  components: {
    Header,
    addanalyse,
    adminnavbar
  },
};
</script> 
