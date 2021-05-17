<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <editclinique></editclinique>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
// import header from "../components/header.vue";

import Header from '../../../components/header.vue'
import editclinique from '../../../components/bureautique/clinique/editclinique.vue'

export default {
  name: "editclinique",
  components: {
    Header,
    editclinique
  },
};
</script>
