import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'

const mainApp = createApp(App)
mainApp.use(Router)
mainApp.mount('#app')
