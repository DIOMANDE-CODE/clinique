<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <index></index>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
import index from "../../components/bureautique/bureautique.vue";
import Header from '../../components/header.vue'

export default {
  name: "Dashboard",
  components: {
    Header,
    index
  },
};
</script>
