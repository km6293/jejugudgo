import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/store";
import router from "./router/router";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import MaterialDashboard from "./material-dashboard";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import '@/assets/fontawesome/css/all.min.css'


const appInstance = createApp(App);
appInstance.component('font-awesome-icon', FontAwesomeIcon);
appInstance.use(ElementPlus);
appInstance.use(store);
appInstance.use(router);
appInstance.use(MaterialDashboard);
appInstance.mount("#app");
