<template>
  <div class="child">
    <h3>我是Child组件（子）</h3>
    <Son_ />
  </div>
</template>

<script>
// import { inject } from 'vue'
import Son_ from './Son_.vue'
export default {
  name: 'Child_',
  components: { Son_ },
  /* setup(){
    let x = inject('car')
    console.log(x,'Child-----')
  } */
}
</script>

<style>
.child {
  background-color: skyblue;
  padding: 10px;
}
</style>