<template>
    <div class="author-wrapper py-section pt-0">
        <div class="container">
            <div class="section-title mb-8 py-5 border-y-1 border-[#ededed] flex justify-between items-center">
                <h2 class="text-2xl font-semibold  leading-6 mb-0">From Tutor's</h2>
                <div class="carousel-arrow flex items-center">
                    <!-- Swiper Navigation Start -->
                    <div
                        class="swiper-button-prev !static !mt-0 !w-10 !h-10 leading-10 text-center !text-heading-light bg-[#f4f4f4] rounded-full text-xl ml-3 first:ml-0 hover:bg-primary hover:!text-white transition-all">
                        <i class="icofont-long-arrow-left"></i>
                    </div>
                    <div
                        class="swiper-button-next !static !mt-0 !w-10 !h-10 leading-10 text-center !text-heading-light bg-[#f4f4f4] rounded-full text-xl ml-3 first:ml-0 hover:bg-primary hover:!text-white transition-all">
                        <i class="icofont-long-arrow-right"></i>
                    </div>
                    <!-- Swiper Navigation End -->
                </div>
            </div>
            <swiper :navigation="swiperNavigation" :loop="true" :speed="750" :modules="modules" class="mySwiper">
                <swiper-slide v-for="(data, i) in allCourses" :key="i">
                    <div class="grid grid-cols-7 gap-8">
                        <div class="lg:col-span-5 md:col-span-4 col-span-7 order-last md:order-first">
                            <div class="grid grid-cols-1 lg:grid-cols-2 gap-7">
                                 <pre>

                                    {{ data }}
                                    {{ data.category.categoryName }}
                                </pre>
                               <!--  <div v-for="(curso, i) in data" :key="i">
                                    <PostCourseTwo :course="curso" />
                                </div> -->
                            </div>
                        </div>
                        <div class="lg:col-span-2 md:col-span-3 col-span-7 order-first md:order-last">
                            <UserProfile :user="data" />
                        </div>
                    </div>
                </swiper-slide>

            </swiper>


        </div>
    </div>
</template>
<script>
import { onMounted, ref } from 'vue';
import PostCourseTwo from './PostCourseTwo.vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// import required modules
import { Navigation } from 'swiper/modules';
import UserProfile from '../User/UserProfile.vue';
import { useCourse } from '@/composables/Courses/useCourse';

export default {
    components: { PostCourseTwo, UserProfile, Swiper, SwiperSlide },
    setup() {
        const { getAllCourses, allCourses } = useCourse()
        onMounted(async () => getAllCourses())
        const users = ref([]);
        const swiperOption = {
            speed: 750,
            loop: true,
            autoHeight: true,
            pagination: { clickable: true },
            slidesPerView: 1,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        };

        const swiperNavigation = {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }

        const dataTutorCourse = [
            {
                "user_id": 1,
                "user_name": "John",
                "user_lastname": "Doe",
                "user_email": "john.doe@example.com",
                "user_password": "password123",
                "user_photo": "	https://secure.gravatar.com/avatar/1f3cf7702de78552591affcaff60e76c?s=96&d=mm&r=g",
                "user_description": "Our mission is to help you build websites faster with our VueJS templates and Nuxt JS themes",
                "role_id": 1,
                "created_at_user": "2023-09-18T08:00:00Z",
                "modified_at_user": "2023-09-18T08:30:00Z",
                "cursos": [
                    {
                        "course_id": 1,
                        "category": {
                            "category_id": 1,
                            "category_name": "Programación",
                            "category_photo": "programacion.jpg",
                            "created_at_category": "2023-09-15T11:00:00Z",
                            "modified_at_category": "2023-09-15T11:30:00Z"
                        },
                        "course_name": "Introducción a la Programación",
                        "course_description": "Un curso introductorio para aprender a programar.",
                        "course_photo": "https://vue.thethemedemo.com/bunzo/wp-content/uploads/2022/04/6-1.jpg",
                        "course_published": true,
                        "created_at_course": "2023-09-17T14:30:00Z",
                        "modified_at_course": "2023-09-17T15:15:00Z"
                    },
                    {
                        "course_id": 2,
                        "category": {
                            "category_id": 1,
                            "category_name": "Programación",
                            "category_photo": "programacion.jpg",
                            "created_at_category": "2023-09-15T11:00:00Z",
                            "modified_at_category": "2023-09-15T11:30:00Z"
                        },
                        "course_name": "Introducción a la Programación",
                        "course_description": "Un curso introductorio para aprender a programar.",
                        "course_photo": "https://vue.thethemedemo.com/bunzo/wp-content/uploads/2022/04/6-1.jpg",
                        "course_published": true,
                        "created_at_course": "2023-09-17T14:30:00Z",
                        "modified_at_course": "2023-09-17T15:15:00Z"
                    },
                    // Otros cursos del usuario 1...
                ],
            },
            {
                "user_id": 2,
                "user_name": "John",
                "user_lastname": "Doe",
                "user_email": "john.doe@example.com",
                "user_password": "password123",
                "user_photo": "	https://secure.gravatar.com/avatar/1f3cf7702de78552591affcaff60e76c?s=96&d=mm&r=g",
                "user_description": "Our mission is to help you build websites faster with our VueJS templates and Nuxt JS themes",
                "role_id": 1,
                "created_at_user": "2023-09-18T08:00:00Z",
                "modified_at_user": "2023-09-18T08:30:00Z",
                "cursos": [
                    {
                        "course_id": 1,
                        "category": {
                            "category_id": 1,
                            "category_name": "Programación",
                            "category_photo": "programacion.jpg",
                            "created_at_category": "2023-09-15T11:00:00Z",
                            "modified_at_category": "2023-09-15T11:30:00Z"
                        },
                        "course_name": "Introducción a la Programación",
                        "course_description": "Un curso introductorio para aprender a programar.",
                        "course_photo": "https://vue.thethemedemo.com/bunzo/wp-content/uploads/2022/04/6-1.jpg",
                        "course_published": true,
                        "created_at_course": "2023-09-17T14:30:00Z",
                        "modified_at_course": "2023-09-17T15:15:00Z"
                    },
                    {
                        "course_id": 2,
                        "category": {
                            "category_id": 1,
                            "category_name": "Programación",
                            "category_photo": "programacion.jpg",
                            "created_at_category": "2023-09-15T11:00:00Z",
                            "modified_at_category": "2023-09-15T11:30:00Z"
                        },
                        "course_name": "Introducción a la Programación",
                        "course_description": "Un curso introductorio para aprender a programar.",
                        "course_photo": "https://vue.thethemedemo.com/bunzo/wp-content/uploads/2022/04/6-1.jpg",
                        "course_published": true,
                        "created_at_course": "2023-09-17T14:30:00Z",
                        "modified_at_course": "2023-09-17T15:15:00Z"
                    },
                    // Otros cursos del usuario 1...
                ],
            },
        ]
        return {
            users,
            dataTutorCourse,
            allCourses,
            modules: [Navigation],
            swiperNavigation
        };
    },
};
</script>