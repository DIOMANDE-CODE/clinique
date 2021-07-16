<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <adminnavbar></adminnavbar>
        <addconstante></addconstante>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
import Header from '../../../components/header.vue';
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'
import addconstante from "../../../components/bureautique/constante/addconstante.vue"

export default {
  components: {
    adminnavbar,
    Header,
    addconstante
  },
};
</script> 
