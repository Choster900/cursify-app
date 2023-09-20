<template>
    <div class="home-container">
        <Header />
        <PostCourse />
        <TrendingCourseSection
         />
    </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import PostCourse from '@/components/PostCourses/PostCourse.vue'
import TrendingCourseSection from '@/components/Courses/TrendingCoursesSection.vue'
export default {
    components: { Header, PostCourse, TrendingCourseSection }

}
</script>

<style></style>