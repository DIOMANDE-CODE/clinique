<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <dclinique></dclinique>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
import Header from '../../../components/header.vue'
import dclinique from '../../../components/bureautique/attribution/dclinique.vue'

export default {
  name: "Dashboard",
  components: {
    Header,
    dclinique,
  },
};
</script>
