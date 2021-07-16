<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <adminnavbar></adminnavbar>
        <constante></constante>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
import Header from '../../../components/header.vue';
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'
import constante from './../../../components/bureautique/constante/constante.vue'

export default {
  components: {
    adminnavbar,
    Header,
    constante
  },
};
</script> 
