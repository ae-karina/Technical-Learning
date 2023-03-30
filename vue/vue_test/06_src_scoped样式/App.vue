<template>
  <div>
		<h1 class="title">你好啊</h1>
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
  components: { School_,Student_ }
}
</script>

<!-- APP不太适用scope -->
<style scoped>
.title {
  color: red;
}
</style>