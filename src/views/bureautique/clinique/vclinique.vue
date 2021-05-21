<template>
    <div>
        <Header/>
        <vclinique></vclinique>
        <adminnavbar></adminnavbar>
    </div>
</template>
<script>
import vclinique from '../../../components/bureautique/clinique/vclinique.vue'
import Header from '../../../components/header.vue'
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'

export default {
    components:{
        vclinique,
        Header,
        adminnavbar
    }
}
</script>