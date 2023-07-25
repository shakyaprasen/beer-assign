import './assets/main.css'
import 'floating-vue/dist/style.css'

import { createApp } from 'vue'
import { VTooltip } from 'floating-vue'
import { VueQueryPlugin } from '@tanstack/vue-query'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(VueQueryPlugin)
app.directive('tooltip', VTooltip)

app.mount('#app')
