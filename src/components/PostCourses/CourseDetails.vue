<template>
    <article class="text-center">

        <ul class="meta flex justify-center text-[#626262] mb-5">
            <li
                class="relative mr-2 sm:mr-3 pr-3 sm:pr-4 after:w-1 after:h-1 after:bg-black after:top-1/2 after:right-0 after:transform after:-translate-y-1/2 after:absolute after:content-[''] after:rounded-full last:after:hidden font-semibold text-heading-light">
                <span class="text-[#9b9ea1]">By </span>
                <router-link :to="`/author/`" class="hover:text-primary">{{ course.user.user_name }}</router-link>
            </li>
            <li
                class="relative mr-2 sm:mr-3 pr-3 sm:pr-4 after:w-1 after:h-1 after:bg-black after:top-1/2 after:right-0 after:transform after:-translate-y-1/2 after:absolute after:content-[''] after:rounded-full last:after:hidden">
                <p>{{ course.created_at_course }}</p>
            </li>
            <li
                class="relative mr-2 sm:mr-3 pr-3 sm:pr-4 after:w-1 after:h-1 after:bg-black after:top-1/2 after:right-0 after:transform after:-translate-y-1/2 after:absolute after:content-[''] after:rounded-full last:after:hidden">
                3 min read</li>
        </ul>
        <div class="title">
            <h1 class="text-xl md:text-[32px] font-semibold  leading-[1.3] mb-5">{{ course.course_name }}</h1>
        </div>
        <div class="categories mt-7 mb-10">
            <router-link :to="`/categories/`"
                class="category bg-white-deep capitalize rounded-lg px-4 py-2 mr-3 inline-block">
                {{ course.category.category_name }}
            </router-link>
        </div>

        <div class="flex gap-6">
            <div class="content text-justify mt-9 md:px-15">
                <span v-html="course.course_description"></span>
            </div>
            <img :src="course.course_photo" :alt="course.course_photo" class="w-1/3 rounded-[10px]">
        </div>

        <div class="share-post sm:flex justify-between items-center md:mx-15 py-3 mt-10 border-y-1">
            <h4 class="sm:mb-0">Share this course:</h4>
            <div class="social-link flex justify-center sm:justify-end space-x-2">
                <SocialIcon icon="icofont-facebook" url="https://www.facebook.com/" />
                <SocialIcon icon="icofont-twitter" url="https://twitter.com/" />
                <SocialIcon icon="icofont-skype" url="https://www.skype.com/" />
                <SocialIcon icon="icofont-linkedin" url="https://www.linkedin.com/" />
            </div>
        </div>
    </article>
    <div class="container py-10">
        <div class="grid lg:grid-cols-2  items-center">
            <CourseSecctionContent class="lg:self-start pr-2" />

            <CourseAccordionContentVue :sections="course.sections" class="" />

        </div>
    </div>
</template>

<script>
import SocialIcon from '../Elements/SocialIcon.vue';
import CourseAccordionContentVue from './CourseAccordionContent.vue';
import CourseSecctionContent from './CourseSecctionContent.vue';


export default {
    components: {
        SocialIcon, CourseSecctionContent, CourseAccordionContentVue
    },
    props: {
        course: {
            type: Object,
            default: () => { },
        },
    },
};
</script>

<style lang="scss">
blockquote {
    h4 {
        @apply pt-3 mb-0 text-lg;
    }

    p {
        @apply font-semibold pt-3;
    }
}
</style>
