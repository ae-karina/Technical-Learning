<template>
  <div>
    <Student_ name="李四" sex="女" :age="18"/><!-- 加冒号是双引号运行的结果 -->
  </div>
</template>

<script>
// 引入School组件
import Student_ from './components/Student_'

export default {
  name:'App',
  components: { Student_ }
}
</script>

<style>

</style>