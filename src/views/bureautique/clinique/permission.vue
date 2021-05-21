<template>
    <div>
        <Header/>
        <permission></permission>
        <adminnavbar></adminnavbar>
    </div>
</template>
<script>
import permission from '../../../components/bureautique/clinique/permissions.vue'
import Header from '../../../components/header.vue'
import adminnavbar from '../../../components/bureautique/adminnavbar.vue'

export default {
    components:{
        permission,
        Header,
        adminnavbar
    }
}
</script>