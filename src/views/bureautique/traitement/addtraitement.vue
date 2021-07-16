<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <adminnavbar></adminnavbar>
        <addtraitement></addtraitement>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
import Header from '../../../components/header.vue';
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'
import addtraitement from "../../../components/bureautique/traitement/addtraitement.vue"

export default {
  components: {
    adminnavbar,
    Header,
    addtraitement
  },
};
</script> 
