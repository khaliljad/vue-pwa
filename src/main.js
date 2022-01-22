import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
// import Vuex from "vuex";

import { BootstrapVue } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(VueAxios, axios);
// Vue.use(Vuex);
Vue.use(BootstrapVue);

Vue.filter("textLength", function (v, len) {
  return v.substr(v, len);
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
