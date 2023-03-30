<template>
  <div>
    <Count_/>
    <hr>
    <Person_/>
  </div>
</template>

<script>
import Count_ from './components/Count_'
import Person_ from './components/Person_'
export default {
  name:'App',
  components:{Count_, Person_ },
  mounted(){
    console.log('App',this)
  }
}
</script>

