<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <adminnavbar></adminnavbar>
        <editconstante></editconstante>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
import Header from '../../../components/header.vue';
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'
import editconstante from '../../../components/bureautique/constante/editconstante.vue'

export default {
  name: "Dashboard",
  components: {
    adminnavbar,
    Header,
    editconstante
  },
};
</script> 
