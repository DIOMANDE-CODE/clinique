<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <adminnavbar></adminnavbar>
        <ajoutclinique></ajoutclinique>
    </div>
  </div>
</template>

<script>
// import header from "../components/header.vue";
import Header from '../../../components/header.vue'
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'
import ajoutclinique from '../../../components/bureautique/clinique/ajoutclinique.vue'

export default {
  name: "addclinique",
  components: {
    Header,
    adminnavbar,
    ajoutclinique
  },
};
</script>
