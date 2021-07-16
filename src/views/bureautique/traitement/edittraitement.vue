<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <adminnavbar></adminnavbar>
        <edittraitement></edittraitement>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
import Header from '../../../components/header.vue';
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'
import edittraitement from '../../../components/bureautique/traitement/edittraitement.vue'

export default {
  name: "Dashboard",
  components: {
    adminnavbar,
    Header,
    edittraitement
  },
};
</script> 
