<template>
  <div class="app">
    <h3>我是App组件</h3>
    <Suspense>
      <template v-slot:default>
        <Child_/>
      </template>
      <template v-slot:fallback>
        <h3>稍等，加载中...</h3>
      </template>
    </Suspense>
  </div>

</template>

<script>
// import Child_ from './components/Child_'//静态引入
import { defineAsyncComponent } from 'vue'
const Child_ = defineAsyncComponent(() => import('./components/Child_')) //异步引入
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
