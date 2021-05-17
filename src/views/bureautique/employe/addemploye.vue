<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <addemploye></addemploye>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
import Header from '../../../components/header.vue';
import addemploye from '../../../components/bureautique/employe/addemploye.vue'
export default {
  name: "Dashboard",
  components: {
    Header,
    addemploye
  },
};
</script> 
