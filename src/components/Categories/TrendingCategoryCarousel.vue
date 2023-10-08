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
                            <swiper-slide v-for="(category, index) in categoriesObject" :key="index" class="categories">
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
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Virtual } from 'swiper/modules';
import CategoryStyleCourse from './CategoryStyleCourse.vue';
import useCategory from '@/composables/Category.vue/useCategory';
export default {
    components: { CategoryStyleCourse, Swiper, SwiperSlide },
    setup() {
        const swiperNavigation = {
            nextEl: '.trending-button-next',
            prevEl: '.trending-button-prev'
        }

        // Create array with 500 slides
        let swiperRef = null;
        let prependNumber = 1;
        let appendNumber = 500;
        const {categoriesObject} = useCategory()
        const slides = ref(Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`));

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
            slides,
            append,
            slideTo,
            prepend,
            appendNumber,
            setSwiperRef,
            prependNumber,
            trendingOptions,
            swiperRef: null,
            categoriesObject,
            swiperNavigation,
            swiperBreakpoints,
            modules: [Pagination, Navigation, Virtual],
        };
    }
};
</script>

