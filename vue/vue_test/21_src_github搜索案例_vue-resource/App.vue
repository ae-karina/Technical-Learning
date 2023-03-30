<template>
  <div class="container">
    <Search_/>
    <List_/>
  </div>
</template>

<script>
import Search_ from './components/Search_'
import List_ from './components/List_'
export default {
  name:'App',
  components:{ Search_ , List_ }
}
</script>

