<template>
    <div>
        {{ title }}
    </div>
    
</template>

<script>
import {mapState} from "vuex";
export default {
    computed: {
        ...mapState({
            title : state => state.b.title,
        }),
    }
}
</script>

<style scoped>

</style>