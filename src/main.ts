// import { createApp } from 'vue'
import { createSSRApp } from 'vue'
import 'element-plus/dist/index.css'
import 'virtual:windi.css'
import './style.css'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import router from './router/index'


// const app = createApp(App)
// app.use(ElementPlus).use(router).mount('#app')

// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//     app.component(key, component)
// }

export default function createApp() {
    const app = createSSRApp(App);
    return app;
}