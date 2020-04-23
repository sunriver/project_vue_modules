<template>
  <div>
    <p>{{ this.data.name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      name: undefined,
      type: undefined
    }
  }
};
</script>

<style scoped>
</style>