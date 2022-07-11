import App from "./App.vue"
import { createApp } from 'vue'
import { plugin, defaultConfig } from '@formkit/vue'
import '@formkit/themes/genesis'

createApp(App).use(plugin, defaultConfig).mount('#app')