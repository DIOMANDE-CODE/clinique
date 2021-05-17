<template>
    <div>
        <Header/>
        <permission></permission>
    </div>
</template>
<script>
import permission from '../../../components/bureautique/clinique/permissions.vue'
import Header from '../../../components/header.vue'

export default {
    components:{
        permission,
        Header
    }
}
</script>