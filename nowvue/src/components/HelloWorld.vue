<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
  num: Number
})


</script>
  
<template>
    <h3>{{ msg }}和{{ num }}</h3>
</template>

<style scoped>

</style>
