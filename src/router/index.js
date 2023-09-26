import { createRouter, createWebHashHistory,createWebHistory } from "vue-router";
import NotFoundView from "../views/NotFound404.vue";
import homePage from "../views/index.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: homePage,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/404", // Definimos una ruta para la página 404
    name: "not-found",
    component: NotFoundView, // Debes crear una vista para la página 404
  },
  {
    path: "/:catchAll(.*)", // Este comodín captura todas las rutas que no coinciden
    redirect: "/404", // Redirige a la página 404
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  
  routes,
});

export default router;
