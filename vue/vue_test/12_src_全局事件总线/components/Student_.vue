<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
  </div>
</template>

<script>
export default {
  name:'Student_',
 data() {
  return {
   name:'张三',
   sex:'男',
  }
 },
  methods: {
    sendStudentName() {
      this.$bus.$emit('hello', this.name)
    }
  }, 
}
</script>

<!--  -->
<style lang="less" scoped>
.student {
  background-color: pink;
  padding: 5px;
  margin-top: 50px;
}
</style>

