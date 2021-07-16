<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <adminnavbar></adminnavbar>
        <categorie></categorie>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
import Header from '../../../../components/header.vue';
import adminnavbar from '../../../../components/bureautique/adminnavbar.vue'
import categorie from "../../../../components/bureautique/pharmacie/categorie_medicament/categorie.vue"

export default {
  name: "Dashboard",
  components: {
    adminnavbar,
    Header,
    categorie
  },
};
</script> 
