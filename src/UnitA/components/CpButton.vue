<template>
    <div>
        <a-button type="primary">{{ this.data.name }}</a-button>
    </div>
</template>
<script>
export default {
    props : {
        data : {
            name : undefined,
            type : undefined
        }
    },
    data() {
        return {

        }
    }
    
}
</script>

<style scoped>

</style>