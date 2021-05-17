<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <sdepartement></sdepartement>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
import Header from '../../../components/header.vue'
import sdepartement from '../../../components/bureautique/attribution/sdepartement.vue'
export default {
  name: "Dashboard",
  components: {
    Header,
    sdepartement,
  },
};
</script>
