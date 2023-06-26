<script setup>
import { inject } from "vue";
const roomData = inject("data-key");

const countData = inject("count-key");

const setCount = inject("setCount-key");
</script>
<template>
  <div class="comment">
    底层组件
    <div>来自顶层组件中的数据为：{{ roomData }}</div>
    <div>来自顶层组件中的响应式数据：{{ countData }}</div>
    <div>
      <button @click="setCount">修改顶层的数据count</button>
    </div>
  </div>
</template>

<style scoped>
</style>