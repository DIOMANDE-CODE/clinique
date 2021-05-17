<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <editprofile></editprofile>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
// import header from "../components/header.vue";
import Header from '../../../components/header.vue'
import editprofile from '../../../components/bureautique/employe/editprofile.vue'

export default {
  name: "profilemploye",
  components: {
    Header,
    editprofile
  },
};
</script>
