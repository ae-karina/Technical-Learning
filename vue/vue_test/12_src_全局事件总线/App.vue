<template>
  <div class="app">
		<h1>{{msg}}</h1>
    <School_/>
    <Student_/>
  </div>
</template>

<script>
// 引入School组件
import Student_ from './components/Student_'
import School_ from './components/School_'

export default {
  name:'App',
  components: { School_, Student_ },
  data(){
    return{
      msg:'你好啊！',
    }
  }
}
</script>

<!-- APP不太适用scope -->
<style scoped>
.app {
  background-color: gray;
  padding: 5px;
}
</style>