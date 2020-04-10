import Vue from "vue";
import Router from "uni-simple-router";

Vue.use(Router);
console.log("router init");
//初始化
const router = new Router({
  routes: [
    {
      name: "index",
      aliasPath: "/",
      path: "/pages/index/index"
    },
    {
      name: "index2",
      path: "/pages/index/index2"
    }
  ]
});

export default router;
