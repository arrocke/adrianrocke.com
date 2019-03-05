import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home";
import MyWork from "@/views/MyWork";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/my-work",
      name: 'my-work',
      component: MyWork
    }
  ]
});
