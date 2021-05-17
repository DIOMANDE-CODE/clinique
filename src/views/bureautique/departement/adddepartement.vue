<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <adddepartement></adddepartement>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
import Header from '../../../components/header.vue';
import adddepartement from '../../../components/bureautique/departement/adddepartement.vue'

export default {
  name: "Dashboard",
  components: {
    Header,
    adddepartement
  },
};
</script> 
