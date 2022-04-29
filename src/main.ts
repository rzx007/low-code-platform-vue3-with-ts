/*
 * @Author: 阮志雄
 * @Date: 2022-04-29 18:08:58
 * @LastEditTime: 2022-04-29 22:18:26
 * @LastEditors: 阮志雄
 * @Description: In User Settings Edit
 * @FilePath: \low-code-platform-vue3-with-ts\src\main.ts
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { ElementPlugin } from './plugin/element-plus'

const app = createApp(App)
ElementPlugin(app)
app.use(createPinia())
app.use(router)
app.mount('#app')
