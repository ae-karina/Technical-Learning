<template>
	<button @click="isShowDemo = !isShowDemo">切换隐藏/显示</button>
  <Demo_ v-if="isShowDemo"/>
</template>

<script>
import { ref } from 'vue'

import Demo_ from './components/Demo_'
export default {
  name: 'App',
  components:{ Demo_ },
  setup(){
    let isShowDemo=ref(true)
    return{isShowDemo}
  }
  }

</script>
