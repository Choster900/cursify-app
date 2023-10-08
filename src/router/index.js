import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

import NotFoundView from "../views/NotFound404.vue";
import homePage from "../views/index.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: homePage,
  },
  {
    path: "/category/create",
    name: "createCategory",
    // route level code-splitting 
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CreateCategory.vue"),
  },
  {
    path: "/courses/my-courses",
    name: "my-courses",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MyCourses"),
  },
  {
    path: "/courses/nombre-curso",
    name: "viweCourse",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CourseIndex"),
  },
  {
    path: "/courses/create/:step",
    name: "createCourse",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/createCoursePage.vue"),

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
