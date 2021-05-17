<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <editemploye></editemploye>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
import Header from '../../../components/header.vue';
import editemploye from '../../../components/bureautique/employe/editemploye.vue'
export default {
  name: "Dashboard",
  components: {
    Header,
    editemploye
  },
};
</script> 
