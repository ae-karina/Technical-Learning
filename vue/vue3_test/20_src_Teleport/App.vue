<template>
  <div class="app">
    <h3>我是App组件</h3>
    <Child_/>
  </div>

</template>

<script>
import Child_ from './components/Child_'
export default {
  name: 'App',
  components: { Child_ },
}

</script>

<style>
.app {
  background-color: gray;
  padding: 10px;
}
</style>
