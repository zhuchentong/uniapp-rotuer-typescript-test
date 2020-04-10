import Vue from "vue";
import App from "./App.vue";

import { RouterMount } from "uni-simple-router";
import "./router";

Vue.config.productionTip = false;
App["mpType"] = "app";
const app = new Vue({
  ...App
});

RouterMount(app, "#app");
