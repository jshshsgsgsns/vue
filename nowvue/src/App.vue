<script setup>
import { ref } from 'vue'
import son from './components/HelloWorld.vue'

let num = ref(1)

const add = () => {
  num.value += 1; // 正确修改响应式数据
}
</script>

<template>
  <p @click="add">{{ num }}</p> <!-- 使用 Vue 的事件绑定方式 -->
  <son msg = "123" num = '14'></son>
</template>

<style scoped>
</style>
