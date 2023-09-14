import { createApp } from 'vue'
import 'virtual:windi.css'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router/index'



createApp(App).use(ElementPlus).use(router).mount('#app')
