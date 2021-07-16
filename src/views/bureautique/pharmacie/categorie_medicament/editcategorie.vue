<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <adminnavbar></adminnavbar>
        <editcategorie></editcategorie>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
import Header from '../../../../components/header.vue';
import adminnavbar from '../../../../components/bureautique/adminnavbar.vue'
import editcategorie from "../../../../components/bureautique/pharmacie/categorie_medicament/editcategorie.vue"

export default {
  name: "Dashboard",
  components: {
    adminnavbar,
    Header,
    editcategorie
  },
};
</script> 
