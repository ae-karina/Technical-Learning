//引入的不再是Vue构造函数了，引入的是一个名为createApp的工厂函数（首字母无需大写和new）
import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')

//创建应用实例对象——app(类似于之前Vue2中的vm，但app比vm更“轻”)
const app = createApp(App)

//挂载
app.mount('#app')