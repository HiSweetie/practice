import { createApp } from 'vue'
import 'element-plus/dist/index.css'
import 'virtual:windi.css'
import './style.css'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router/index'



createApp(App).use(ElementPlus).use(router).mount('#app')
