<template>
  <div>
    <p>{{ this.data.name }}</p>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import {ItemVo} from "../models/ItemData";
export default {
    props : {
        data : {
            type: Object,
            default: null,
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