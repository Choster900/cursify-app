<template>
    <div class="trending py-section">
        <div class="container">
            <h2 class="text-2xl font-semibold  mb-12 leading-6">Trending Courses</h2>
            <div class="grid lg:grid-cols-2 gap-9">
                <article v-for="(course, i) in RandomCoursesArray" :key="i" class="post md:flex items-center group">
                    <div class="post-image md:w-[250px] flex-shrink-0 flex-grow-0 rounded-[10px] overflow-hidden relative">
                        <router-link :to="`/courses/view/${course.courseId}`">
                            <img :src="IMAGE_PATH + course.coursePhoto" alt="post.node.title"
                                class="object-cover h-full w-full group-hover:scale-125 transition-all duration-500">
                            <div
                                class="icon w-12 h-12 bg-primary border-2 border-white text-white text-xl absolute top-4 right-4 rounded-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20" fill="currentColor">
                                    <g>
                                        <path
                                            d="M42,21a4,4,0,0,0-2.34.75L35,25.06V24a5,5,0,0,0-5-5h-.23a8,8,0,1,0-10.54,0H14.46a6,6,0,1,0-8.75.19A5,5,0,0,0,2,24V38a5,5,0,0,0,5,5H30a5,5,0,0,0,5-5V36.94l4.63,3.31A4,4,0,0,0,46,37V25A4,4,0,0,0,42,21ZM18.5,13a6,6,0,1,1,6,6A6,6,0,0,1,18.5,13ZM10,11a4,4,0,1,1-4,4A4,4,0,0,1,10,11ZM33,38a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V24a3,3,0,0,1,3-3H30a3,3,0,0,1,3,3V38Zm11-1a2,2,0,0,1-3.21,1.65L35,34.49v-7l5.79-4.13A2,2,0,0,1,44,25Z" />
                                    </g>
                                </svg>
                            </div>
                        </router-link>
                    </div>
                    <div class="post-info md:pl-7 md:mt-0 mt-5">
                        <div class="flex items-center">
                            <router-link :to="`categories/${course.category.categoryId}`"
                                class="category bg-[#edebf5] capitalize rounded-md px-4 py-1.5 mr-2 hover:bg-primary hover:text-white">
                                {{ course.category.categoryName }}
                            </router-link>
                            <div class="date flex items-center ml-4 md:ml-6">
                                <i class="icofont-ui-calendar"></i>
                                <p class="pl-2">{{ $moment(course.createdAtCategory).format('DD MMM, YYYY') }}</p>
                            </div>
                        </div>
                        <h2 class="mb-0 text-lg !leading-relaxed pt-2 md:pt-5">
                            <router-link :to="`/courses/view/${course.courseId}`" class="hover:text-primary">{{
                                $options.filters.truncate(course.courseName, 45, '...') }}</router-link>
                        </h2>
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>

<script>
import { useCourse } from '@/composables/Courses/useCourse';
import { onActivated } from 'vue';
import { IMAGE_PATH } from '@/config/config';
import { truncateString } from '@/mixins/truncateString';

export default {
    mixins: [truncateString],
    setup() {
        const { getRandomCourses, RandomCoursesArray } = useCourse();

        onActivated(async () => {
            getRandomCourses();
        })

        return {
            RandomCoursesArray,
            IMAGE_PATH,
        }
    }


};
</script>
