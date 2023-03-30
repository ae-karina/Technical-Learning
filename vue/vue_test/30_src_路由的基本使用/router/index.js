// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../components/About_'
import Home from '../components/Home_'

//创建并暴露一个路由器
export default new VueRouter({
	routes:[
		{
			path:'/about_',
			component:About
		},
		{
			path:'/home_',
			component:Home
		}
	]
})
