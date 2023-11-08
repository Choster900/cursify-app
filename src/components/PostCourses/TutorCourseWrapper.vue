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
                                
                                <div v-for="(curso, i) in data.coursesByUser" :key="i">
                                    <PostCourseTwo :course="curso" />
                                    
                                </div>
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
import { onActivated, onMounted, ref } from 'vue';
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
        onActivated(async () => getAllCourses())
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
        return {
            users,
            allCourses,
            modules: [Navigation],
            swiperNavigation
        };
    },
};
</script>