<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <adminnavbar></adminnavbar>
        <editassurance></editassurance>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
import Header from '../../../components/header.vue';
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'
import editassurance from '../../../components/bureautique/assurance/editassurance.vue'
export default {
  name: "Dashboard",
  components: {
    adminnavbar,
    Header,
    editassurance
  },
};
</script> 
