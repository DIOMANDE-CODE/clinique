<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <adminnavbar></adminnavbar>
        <editanalyse></editanalyse>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
import Header from '../../../components/header.vue';
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'
import editanalyse from '../../../components/bureautique/analyse/editanalyse.vue'

export default {
  name: "Dashboard",
  components: {
    adminnavbar,
    Header,
    editanalyse
  },
};
</script> 
