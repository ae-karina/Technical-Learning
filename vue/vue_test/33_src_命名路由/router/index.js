// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About_'
import Home from '../pages/Home_'
import News_ from '../pages/News_'
import Message_ from '../pages/Message_'
import Detail_ from '../pages/Detail_'

//创建并暴露一个路由器
export default new VueRouter({
	routes:[
		{
			name:'guanyu',
			path:'/about',
			component:About
		},
		{
			path:'/home',
			component:Home,
			children:[
				{
					path:'news',
					component:News_,
				},
				{
					path:'message',
					component:Message_,
					children:[
						{
							name:'xiangqing',
							path:'detail',
							component:Detail_,
						}
					]
				}
			]
		}
	]
})
