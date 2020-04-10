import Vue from "vue";
import App from "./App.vue";

import { RouterMount } from "uni-simple-router";

Vue.config.productionTip = false;

const app = new Vue({
  render: h => h(App)
});

RouterMount(app, "#app");
