<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <creer></creer>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
import Header from '../../../components/header.vue';
import creer from '../../../components/bureautique/specialite/creer.vue'

export default {
  name: "Dashboard",
  components: {
    Header,
    creer,
  },
};
</script> 
