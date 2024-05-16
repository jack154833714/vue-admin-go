import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/base.css'
import './assets/theme.css'
import App from './App.vue'
import router from './router'
import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ArcoVue)

app.mount('#app')
