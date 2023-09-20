<template>
  <div class="home-container">
    <HeaderVue />
    <PostCourse />
  </div>
</template>

<script>
import HeaderVue from './components/Header/Header'
import PostCourse from './components/PostCourses/PostCourse.vue'
export default {
  components: { HeaderVue, PostCourse }
}
</script>

<style></style>