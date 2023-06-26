<script setup lang="ts">
import MyCounter from './components/MyCounter.vue'

</script>

<template>
  <div class="main">
    <MyCounter/>
  </div>
</template>

<style>
*{
  margin: 0;
  top: 0;
  box-sizing: border-box;
}

.main{
  height: 750px;
  width: 366px;
  margin: 100px auto;
  padding: 10px;
  background-color: #eff0f1
  ;
}
</style>
