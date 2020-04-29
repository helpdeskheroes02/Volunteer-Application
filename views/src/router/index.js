import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true
  },
  {
    path: "/charities",
    name: "Charities",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Charities.vue")
  },
  {
    path: "/tester",
    name: "Tester",
    component: () => import("../views/Tester.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue")
  },
  {
    path: "/events",
    name: "Events",
    component: () => import("../views/Events.vue")
  },
  {
    path: "/signin",
    name: "SignIn",
    component: () => import("../views/SignIn.vue")
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () => import("../components/SignUp.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
