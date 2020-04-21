<template>
    <div>
        {{ title }}
    </div>
    
</template>

<script>
console.log("test a");
export default {
    computed: {
        title() {
            console.log("view a");
            return this.$store.state.a.title;
        },
    }
}
</script>

<style scoped>

</style>