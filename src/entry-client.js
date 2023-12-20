import createApp from "./main";

const app = createApp();

app.use(ElementPlus).use(router).mount('#app')

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}