<template>
  <div>
    <School_/>
    <hr>
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

<style>

</style>