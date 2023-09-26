<template>
    
        <PostCourse />
        <TrendingCourseSection />
        <TutorCourseWrapper />
        <div class="bg-[#fafafa] py-section">
            <TrendingCategoryCarousel />
        </div>
  
</template>

<script>
import PostCourse from '@/components/PostCourses/PostCourse.vue'
import TrendingCourseSection from '@/components/Courses/TrendingCoursesSection.vue'
import TemplateBody from './Layout/Template.vue'
import TutorCourseWrapper from '@/components/PostCourses/TutorCourseWrapper.vue'
import TrendingCategoryCarousel from '@/components/Categories/TrendingCategoryCarousel.vue'
export default {
    components: { PostCourse, TrendingCourseSection, TemplateBody, TutorCourseWrapper, TrendingCategoryCarousel }

}
</script>

<style></style>