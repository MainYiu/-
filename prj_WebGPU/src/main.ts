import '@/styles/main.scss'
import '@/styles/normalize.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'virtual:svg-icons-register'
import gloableComponents from "@/components/index_components";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(gloableComponents)

app.mount('#app')
