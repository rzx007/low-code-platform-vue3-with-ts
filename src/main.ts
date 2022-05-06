import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { ElementPlugin } from './plugin/element-plus'
import '@/assets/style/reset.css'

const app = createApp(App)
ElementPlugin(app)
app.use(createPinia())
app.use(router)
app.mount('#app')
