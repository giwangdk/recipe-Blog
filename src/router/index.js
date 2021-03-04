import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Discover from "../views/Discover.vue";
import Categories from "../views/Categories.vue";
import Recipes from "../views/Recipes.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
   {
    path: "/discover",
    name: "Discover",
    component: Discover
  },
   {
    path: "/categories",
    name: "Categories",
    component: Categories
  },
  {
    path: "/recipes/:id",
    name: "Recipes",
    component: Recipes
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
