<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <adminnavbar></adminnavbar>
        <profil></profil>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
import adminnavbar from "../../../components/bureautique/adminnavbar.vue";
import Header from '../../../components/header.vue';
import profil from '../../../components/bureautique/profil/profil.vue'

export default {
  name: "Dashboard",
  components: {
    Header,
    adminnavbar,
    profil
  },
};
</script> 
