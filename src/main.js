import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "bootstrap";
import "bootstrap/scss/bootstrap.scss";
import "./assets/css/style.scss";
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';

Vue.use(BootstrapIconsPlugin) ;
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
