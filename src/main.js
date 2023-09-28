import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import moment from "moment"; // Importa Moment.js
import VueCookies from "vue-cookies";
import "./assets/css/tailwind.css";
import "./assets/scss/_variables.scss";
import "./assets/scss/style.scss";
import "./assets/css/icofont.min.css";
import "./assets/css/swiper.css";
import { API_URL } from '@/config/config.js';

const app = createApp(App);

// Registra Moment.js globalmente
app.config.globalProperties.$moment = moment;

app.use(store).use(router).use(VueCookies).use(API_URL).mount("#app");
