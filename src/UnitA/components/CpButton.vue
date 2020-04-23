<template>
    <div>
        <a-button type="primary">{{ this.data.name }}</a-button>
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