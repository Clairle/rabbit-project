// 引入初始化样式文件
import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 全局指令注册
import { lazyPlugin } from '@/directives'

// 引入全局组件插件
import { componentPlugin } from '@/components'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// // 测试接口函数
// import { getCategoryAPI } from '@/apis/test_api'
// getCategoryAPI().then(res => {
//     console.log(res)
// })

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

// app.use(createPinia())
app.use(router)

app.use(lazyPlugin)

app.use(componentPlugin)

app.use(pinia).mount('#app')

