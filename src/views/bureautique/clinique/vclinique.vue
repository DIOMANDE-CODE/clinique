<template>
    <div>
        <Header/>
        <vclinique></vclinique>
    </div>
</template>
<script>
import vclinique from '../../../components/bureautique/clinique/vclinique.vue'
import Header from '../../../components/header.vue'

export default {
    components:{
        vclinique,
        Header
    }
}
</script>