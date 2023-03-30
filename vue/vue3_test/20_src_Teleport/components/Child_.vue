<template>
  <div class="child">
    <h3>我是Child组件</h3>
    <Son_ />
  </div>
</template>

<script>
import Son_ from './Son_'
export default {
  name: 'Child_',
  components: { Son_ },
}
</script>

<style>
.child {
  background-color: skyblue;
  padding: 10px;
}
</style>