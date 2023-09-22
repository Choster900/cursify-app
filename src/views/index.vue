<template>
    <TemplateBody>
        <PostCourse />
        <TrendingCourseSection />
        <TutorCourseWrapper />

    </TemplateBody>
</template>

<script>
import PostCourse from '@/components/PostCourses/PostCourse.vue'
import TrendingCourseSection from '@/components/Courses/TrendingCoursesSection.vue'
import TemplateBody from './Layout/Template.vue'
import TutorCourseWrapper from '@/components/PostCourses/TutorCourseWrapper.vue'
export default {
    components: { PostCourse, TrendingCourseSection, TemplateBody, TutorCourseWrapper }

}
</script>

<style></style>