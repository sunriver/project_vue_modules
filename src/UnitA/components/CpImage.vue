<template>
  <div>
    <p>{{ this.data.name }}</p>
  </div>
</template>

<script>
import {ItemVo} from "../models/ItemData";
export default {
    props : {
        data : {
            type: ItemVo,
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