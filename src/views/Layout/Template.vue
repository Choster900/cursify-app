<template>
    <div class="home-container" >
      <Header />
      <slot></slot>
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '@/components/Header/Header.vue'
  import Footer from '@/components/Footer/Footer.vue'
  import { onActivated, onMounted, ref } from 'vue'
  
  export default {
    components: { Header, Footer },
    /* setup() {
      const isCreateCourseRoute = ref(false);
 
        const path = window.location.pathname;
        console.log(path);
        isCreateCourseRoute.value = path.startsWith("/courses/create");
 
      return {
        isCreateCourseRoute,
      }
    } */
  }
  </script>
  
  <style></style>
  