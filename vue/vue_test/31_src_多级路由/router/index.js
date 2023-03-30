// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About_'
import Home from '../pages/Home_'
import News_ from '../pages/News_'
import Message_ from '../pages/Message_'

//创建并暴露一个路由器
export default new VueRouter({
	routes:[
		{
			path:'/about_',
			component:About
		},
		{
			path:'/home_',
			component:Home,
			children:[
				{
					path:'news',
					component:News_,
				},
				{
					path:'message',
					component:Message_,
				}
			]
		}
	]
})
