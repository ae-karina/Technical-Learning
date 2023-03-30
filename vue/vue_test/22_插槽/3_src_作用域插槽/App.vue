<template>
  <div class="container">
    <Category_ title="游戏" >
      <template scope="atguigu">
         <ul>
            <li v-for="(g, index) in atguigu.games" :key="index">{{ g }}</li>
         </ul>
      </template>
    </Category_>

    <Category_ title="游戏" >
       <template scope="{games}">
          <ol>
             <li style="color:red" v-for="(g, index) in games" :key="index">{{ g }}</li>
          </ol>
      </template>
    </Category_>

    <Category_ title="游戏" >
      <template slot-scope="{games}">
         <h4 v-for="(g, index) in games" :key="index">{{ g }}</h4>
      </template>
    </Category_>
  </div>
</template>

<script>
import Category_ from './components/Category_'
export default {
  name:'App',
  components:{ Category_ }
}
</script>

<style scoped>
.container,.foot{
  display: flex;
  justify-content: space-around;
}
h4{
		text-align: center;
	}
</style>
