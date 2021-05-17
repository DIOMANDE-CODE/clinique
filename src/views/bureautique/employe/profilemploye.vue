<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <eprofile></eprofile>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>
// import header from "../components/header.vue";
import Header from '../../../components/header.vue'
import eprofile from '../../../components/bureautique/employe/eprofile.vue'

export default {
  name: "profilemploye",
  components: {
    Header,
    eprofile
  },
};
</script>
