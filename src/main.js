import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'moment'  // Importa Moment.js

import './assets/css/tailwind.css'
import './assets/scss/_variables.scss'
import './assets/scss/style.scss'
import './assets/css/icofont.min.css'
import './assets/css/swiper.css'

const app = createApp(App)

// Registra Moment.js globalmente
app.config.globalProperties.$moment = moment

app.use(store).use(router).mount('#app')
