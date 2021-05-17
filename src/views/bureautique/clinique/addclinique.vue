<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <adminnavbar></adminnavbar>
        <addclinique></addclinique>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
// import header from "../components/header.vue";
import Header from '../../../components/header.vue'
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'
import addclinique from '../../../components/bureautique/clinique/addclinique.vue'

export default {
  name: "addclinique",
  components: {
    Header,
    adminnavbar,
    addclinique
  },
};
</script>
