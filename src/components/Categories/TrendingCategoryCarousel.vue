<template>
    <div class="trending-topic">
        <div class="container">
            <div class="md:grid md:grid-cols-5">
                <div class="md:col-span-1">
                    <div class="mb-7 md:mb-0 flex justify-between items-center md:block">
                        <h2 class="text-2xl font-semibold  leading-6 mb-0">Trending Topic</h2>
                        <div class="carousel-arrow flex md:mt-7">
                            <!-- Swiper Navigation Start -->
                            <div
                                class="trending-button-prev cursor-pointer w-10 h-10 leading-10 text-center bg-heading-light text-white rounded-full text-xl ml-3 first:ml-0 hover:bg-primary transition-all">
                                <i class="icofont-long-arrow-left"></i>
                            </div>
                            <div
                                class="trending-button-next cursor-pointer w-10 h-10 leading-10 text-center bg-heading-light text-white rounded-full text-xl ml-3 first:ml-0 hover:bg-primary transition-all">
                                <i class="icofont-long-arrow-right"></i>
                            </div>
                            <!-- Swiper Navigation End -->
                        </div>
                    </div>
                </div>
                <div class="md:col-span-4">
                    <div class="category-carousel">
                        <swiper :modules="modules" :slidesPerView="4" :centeredSlides="false" :spaceBetween="20" 
                            :breakpoints="swiperBreakpoints" :speed="750" :navigation="swiperNavigation" :virtual="true" class="mySwiper"
                            @swiper="setSwiperRef">
                            <swiper-slide v-for="(category, index) in CategoryCourses" :key="index" class="categories">
                                <CategoryStyleCourse :category="category" />
                            </swiper-slide>
                        </swiper>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import CategoryStyleCourse from './CategoryStyleCourse.vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// import required modules
import { Navigation } from 'swiper/modules';
// import Swiper core and required modules
import { Pagination, Virtual } from 'swiper/modules';
export default {
    components: { CategoryStyleCourse, Swiper, SwiperSlide },
    setup() {
        const swiperNavigation = {
            nextEl: '.trending-button-next',
            prevEl: '.trending-button-prev'
        }

        // Create array with 500 slides
        const slides = ref(
            Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
        );
        let swiperRef = null;
        let appendNumber = 500;
        let prependNumber = 1;

        const setSwiperRef = (swiper) => {
            swiperRef = swiper;
        };
        const slideTo = (index) => {
            swiperRef.slideTo(index - 1, 0);
        };
        const append = () => {
            slides.value = [...slides.value, 'Slide ' + ++appendNumber];
        };
        const prepend = () => {
            slides.value = [
                `Slide ${prependNumber - 2}`,
                `Slide ${prependNumber - 1}`,
                ...slides.value,
            ];
            prependNumber -= 2;
            swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
        };
        // Define las opciones de Swiper
        const trendingOptions = {
            speed: 750,
            slidesPerView: 4,
            spaceBetween: 20,
            navigation: {
                nextEl: '.trending-button-next',
                prevEl: '.trending-button-prev',
            },
            breakpoints: {
                992: { slidesPerView: 2 },
                768: { slidesPerView: 2 },
                480: { slidesPerView: 2 },
                320: { slidesPerView: 1 }
            }
        };

        const CategoryCourses = [
            {
                "category_id": 1,
                "category_name": "Programming",
                "category_photo": "https://vue.thethemedemo.com/bunzo/wp-content/uploads/2022/04/4-2.jpg",
                "created_at_category": "2023-09-17T12:00:00Z",
                "modified_at_category": "2023-09-17T12:30:00Z"
            },
            {
                "category_id": 2,
                "category_name": "Design",
                "category_photo": "https://vue.thethemedemo.com/bunzo/wp-content/uploads/2022/04/5.jpg",
                "created_at_category": "2023-09-16T14:00:00Z",
                "modified_at_category": "2023-09-16T14:45:00Z"
            },
            {
                "category_id": 3,
                "category_name": "Marketing",
                "category_photo": "https://vue.thethemedemo.com/bunzo/wp-content/uploads/2022/04/3.jpg",
                "created_at_category": "2023-09-15T10:00:00Z",
                "modified_at_category": "2023-09-15T10:20:00Z"
            },
            {
                "category_id": 4,
                "category_name": "Data Science",
                "category_photo": "https://vue.thethemedemo.com/bunzo/wp-content/uploads/2022/04/2.jpg",
                "created_at_category": "2023-09-14T11:00:00Z",
                "modified_at_category": "2023-09-14T11:30:00Z"
            },
            {
                "category_id": 5,
                "category_name": "Photography",
                "category_photo": "https://vue.thethemedemo.com/bunzo/wp-content/uploads/2022/04/1.jpg",
                "created_at_category": "2023-09-13T09:00:00Z",
                "modified_at_category": "2023-09-13T09:45:00Z"
            },
            {
                "category_id": 6,
                "category_name": "Business",
                "category_photo": "https://vue.thethemedemo.com/bunzo/wp-content/uploads/2022/04/8.jpg",
                "created_at_category": "2023-09-12T15:00:00Z",
                "modified_at_category": "2023-09-12T15:20:00Z"
            },
            {
                "category_id": 7,
                "category_name": "Language",
                "category_photo": "https://vue.thethemedemo.com/bunzo/wp-content/uploads/2022/04/7.jpg",
                "created_at_category": "2023-09-11T16:00:00Z",
                "modified_at_category": "2023-09-11T16:30:00Z"
            },
            {
                "category_id": 8,
                "category_name": "Cooking",
                "category_photo": "https://vue.thethemedemo.com/bunzo/wp-content/uploads/2022/04/10.jpg",
                "created_at_category": "2023-09-10T17:00:00Z",
                "modified_at_category": "2023-09-10T17:45:00Z"
            },
            {
                "category_id": 9,
                "category_name": "Fitness",
                "category_photo": "https://vue.thethemedemo.com/bunzo/wp-content/uploads/2022/04/9-1.jpg",
                "created_at_category": "2023-09-09T18:00:00Z",
                "modified_at_category": "2023-09-09T18:15:00Z"
            },
            {
                "category_id": 10,
                "category_name": "Music",
                "category_photo": "https://vue.thethemedemo.com/bunzo/wp-content/uploads/2022/04/11.jpg",
                "created_at_category": "2023-09-08T19:00:00Z",
                "modified_at_category": "2023-09-08T19:30:00Z"
            }
        ];


        const swiperBreakpoints = {

            '992': {
                slidesPerView: 4,
            },
            '768': {
                slidesPerView: 3,
            },
            '480': {
                slidesPerView: 2,
            },
            '320': {
                slidesPerView: 1,

            }
        }

        // Devuelve las referencias y opciones que necesitas
        return {
            trendingOptions,
            swiperBreakpoints,
            CategoryCourses,
            slides,
            swiperRef: null,
            appendNumber,
            prependNumber,
            setSwiperRef,
            slideTo,
            append,
            prepend,
            modules: [Pagination, Navigation, Virtual],
            swiperNavigation,
        };
    }
};
</script>

