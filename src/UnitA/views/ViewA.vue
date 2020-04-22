<template>
    <div>
        {{ title }}
        <ol>
            <template v-for="item in listData" >
                <li :key="item">{{ item }} </li>
            </template>
        </ol>
    </div>
    
</template>

<script>
export default {
    computed: {
        title() {
            // console.log("view a");
            return this.$store.state.a.title;
        },
        listData() {
            return this.$store.state.a.list;
        }
    },
    created() {
        this.$store.dispatch({
            type : "a/getList",
            payload: {
                type: "all"
            }
        })
    }
    
}

</script>

<style scoped>

</style>