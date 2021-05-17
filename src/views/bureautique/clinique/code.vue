<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <cliniquenav></cliniquenav>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
// import header from "../components/header.vue";
import cliniquenav from "../../../components/bureautique/clinique/cliniquenav.vue";
import Header from '../../../components/header.vue'

export default {
  name: "password",
  components: {
    Header,
    cliniquenav,
  },
};
</script>
