<template>
    <div class="blog-posts">
        <!-- <Breadcrumb slug="All Post" /> -->
        <div class="py-section">

            <div class="container">
                <div class="sm:flex sm:justify-between sm:items-center mb-8"><!-- Left: Title -->
                    <div class="mb-4 sm:mb-0">
                        <h1 class="text-lg md:text-3xl text-slate-800 font-bold">My Created Courses</h1>
                    </div>

                    <div class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2"><!-- Search form -->
                        <form class="relative">
                            <label for="action-search" class="sr-only">Search</label>
                            <input id="action-search" class="form-input pl-9 focus:border-slate-300" type="search"
                                placeholder="Search…">
                            <button class="absolute inset-0 right-auto group" type="submit" aria-label="Search">
                                <svg class="w-4 h-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-3 mr-2"
                                    viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z">
                                    </path>
                                    <path
                                        d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z">
                                    </path>
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
                <h1 class=" sr-only">All Posts XD</h1>
                <div>
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[40px]"
                        v-if="courseEnrolledIndArray">

                        <PostCourseTwo v-for="curso in courseEnrolledIndArray" :key="curso.courseId" :course="curso"
                            excerpt text-variant="lg:text-2xl" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '@/components/Elements/Breadcrumb.vue';
import PostCourseTwo from '../components/PostCourses/PostCourseTwo.vue';
import { onActivated } from 'vue';
import { useCourse } from '@/composables/Courses/useCourse';

export default {
    name: 'MyCourses',
    components: {
        Breadcrumb, PostCourseTwo
    },
    setup() {
        //const course
        const { getCoursesEnrolled,courseEnrolledIndArray, } = useCourse();

        onActivated(async () => {
            getCoursesEnrolled()
            console.log(courseEnrolledIndArray.value);
        })

        return {
            courseEnrolledIndArray,
        }
    }
}
</script>

<style></style>