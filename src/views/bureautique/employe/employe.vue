<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <adminnavbar></adminnavbar>
        <employe></employe>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
// import header from "../components/header.vue";
import employe from "../../../components/bureautique/employe/employe.vue";
import Header from '../../../components/header.vue'
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'

export default {
  name: "bemploye",
  components: {
    Header,
    employe,
    adminnavbar
  },
};
</script>
