<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <ajoutspecialite></ajoutspecialite>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
import Header from '../../../components/header.vue';
import ajoutspecialite from '../../../components/bureautique/specialite/addspecialite.vue'

export default {
  name: "Dashboard",
  components: {
    Header,
    ajoutspecialite
  },
};
</script> 
