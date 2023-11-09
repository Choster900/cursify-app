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
    // This route is used for creating and maintaining categories.
    // It allows users to manage and add new categories to the application.
    component: () =>
      import(
        /* webpackChunkName: "CreateCategory" */ "../views/CreateCategory.vue"
      ),
  },
  {
    path: "/categories",
    name: "allCategories",
    // This route is used for creating and maintaining categories.
    // It allows users to manage and add new categories to the application.
    component: () =>
      import(
        /* webpackChunkName: "CreateCategory" */ "../views/CategoriesPage.vue"
      ),
  },
  {
    path: "/courses/my-courses",
    name: "my-courses",
    // This route represents the dashboard for courses.
    // It displays all the courses created by the user acting as a tutor.
    // The content for this route is lazy-loaded for better performance.
    component: () =>
      import(/* webpackChunkName: "MyCourses" */ "../views/MyCourses"),
  },
  {
    path: "/courses/my-enrollment",
    name: "my-enrollment",
    // This route represents the dashboard for courses.
    // It displays all the courses created by the user acting as a tutor.
    // The content for this route is lazy-loaded for better performance.
    component: () =>
      import(/* webpackChunkName: "MyCourses" */ "../views/MyCoursesEnrolled.vue"),
  },
  {
    path: "/courses/view/:courseId",
    name: "viewCourse",
    // This route is responsible for displaying the details of a specific course.
    // It allows users to view and enroll in the course.
    // The content for this route is lazy-loaded for better performance.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PreviewCourse"),
  },
  {
    path: "/courses/create/:step",
    name: "createCourse",
    // This route is responsible for creating courses.
    // It receives a parameter 'step' which indicates the current step in the course creation process.
    // The content for this route is lazy-loaded for better performance.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/createCoursePage.vue"),
  },
  {
    path: "/courses/configuration/:courseId",
    name: "configurationCourse",
    // This route is responsible for configuring a course, allowing the addition of content and other settings.
    // The route's content is lazy-loaded for better performance.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/CourseConfiguration.vue"
      ),

  },
  {
    path: "/courses/config-exam/:examId",
    name: "configurationExam",
    // This route is responsible for configuring a course, allowing the addition of content and other settings.
    // The route's content is lazy-loaded for better performance.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/Exams/Exam.vue"
      ),
  },
  {
    path: "/courses/makeExam/:examId",
    name: "makingExam",
    // This route is responsible for configuring a course, allowing the addition of content and other settings.
    // The route's content is lazy-loaded for better performance.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/Exams/ExamToStudent.vue"
      ),
  },
  {
    path: "/categories/:categoryId",
    name: "viewByCategory",
    // This route is responsible for configuring a course, allowing the addition of content and other settings.
    // The route's content is lazy-loaded for better performance.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/CoursesByCategory.vue"
      ),
  },
  {
    path: "/404",
    name: "not-found",
    component: NotFoundView, // You should create a view for the 404 page
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404", // Redirects to the 404 page
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),

  routes,
});

export default router;
