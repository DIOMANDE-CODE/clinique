<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <adminnavbar></adminnavbar>
        <addemploye></addemploye>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
import Header from '../../../components/header.vue';
import addemploye from '../../../components/bureautique/employe/addemploye.vue'
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'
export default {
  name: "Dashboard",
  components: {
    Header,
    addemploye,
    adminnavbar
  },
};
</script> 
