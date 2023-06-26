<script setup>
import { provide, ref } from "vue";
import RoomMsgItem from "./components/son-com.vue";
provide("data-key", "this is room data");
const count = ref(0);

provide("count-key", count);
setTimeout(() => {
  count.value = 100;
}, 3000);
const setCount = () => {
  count.value++;
};
provide("setCount-key", setCount);
</script>
<template>
  <div class="page">
    顶层组件
    <RoomMsgItem />
  </div>
</template>

<style scoped>
</style>