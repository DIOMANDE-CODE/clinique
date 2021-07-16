<template>
  <div>
    <div class="main-wrapper">
        <Header/>
        <adminnavbar></adminnavbar>
        <droit></droit>
      <div class="sidebar-overlay" data-reff=""></div>
    </div>
  </div>
</template>

<script>

import Header from '../../../components/header.vue'
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'
import droit from '../../../components/bureautique/droit/droit.vue'

export default {
  components: {
    Header,
    droit,
    adminnavbar
  },
};
</script>
