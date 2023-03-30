<template>
  <div class="son">
    <h3>我是Son组件</h3>
    <Dialog_/>
  </div>
</template>

<script>
import Dialog_ from './Dialog_';
export default {
  name: 'Son_',
  components:{Dialog_}
}
</script>

<style>
.son {
  background-color: orange;
  padding: 10px;
}
</style>