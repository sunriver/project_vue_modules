<template>
    <div>
        <p>{{this.data.name}}</p>
        <!-- <a-input>{{data.name}}</a-input> -->
    </div>
    
</template>

<script>
export default {
    props: {
        data : {
            name : undefined,
            type : undefined
        }
    }  
}
</script>

<style scoped>

</style>