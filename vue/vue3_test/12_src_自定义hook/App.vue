<template>
	<button @click="isShowDemo = !isShowDemo">切换隐藏/显示</button>
  <Demo_ v-if="isShowDemo"/>
  <hr>
  <Test_/>
</template>

<script>
import { ref } from 'vue'

import Demo_ from './components/Demo_'
import Test_ from './components/Test_'

export default {
  name: 'App',
  components:{ Demo_ , Test_ },
  setup(){
    let isShowDemo=ref(true)
    return{isShowDemo}
  }
  }

</script>
