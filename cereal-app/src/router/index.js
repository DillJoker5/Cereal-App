import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: '/flavors',
    name: 'Flavors',
    component: () => {
      import('../views/Flavors.vue')
    },
  },
  {
    path: '/consumptioninstructions',
    name: 'ConsumptionInstructions',
    component: () => {
      import('../views/ConsumptionInstructions.vue')
    },
  },
  {
    path: '/details',
    name: 'Details',
    component: () => {
      import('../views/Details.vue')
    },
  }, 
  {
    path: '/favoriteFlavors',
    name: 'FavoriteFlavors',
    component: () => {
      import('../views/FavoriteFlavors.vue')
    },
  }
];

const router = new VueRouter({
  routes,
});

export default router;
