<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <editemploye></editemploye>
        <adminnavbar></adminnavbar>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
import Header from '../../../components/header.vue';
import editemploye from '../../../components/bureautique/employe/editemploye.vue'
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'
export default {
  name: "Dashboard",
  components: {
    Header,
    editemploye,
    adminnavbar
  },
};
</script> 
