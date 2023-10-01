<template>
    <article class="post group">
        <div class="post-image overflow-hidden rounded-[10px] h-[200px] md:h-auto relative" :class="imgHeight">
            <router-link to="/courses/nombre-curso">
                <img :src="course.course_photo" :alt="course.course_name"
                    class="object-cover h-full w-full group-hover:scale-110 transition-all duration-500">
                <div
                    class="icon w-15 h-15 bg-primary border-2 border-white text-white text-xl absolute top-4 right-4 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="30" fill="currentColor">
                        <g>
                            <path
                                d="M42,21a4,4,0,0,0-2.34.75L35,25.06V24a5,5,0,0,0-5-5h-.23a8,8,0,1,0-10.54,0H14.46a6,6,0,1,0-8.75.19A5,5,0,0,0,2,24V38a5,5,0,0,0,5,5H30a5,5,0,0,0,5-5V36.94l4.63,3.31A4,4,0,0,0,46,37V25A4,4,0,0,0,42,21ZM18.5,13a6,6,0,1,1,6,6A6,6,0,0,1,18.5,13ZM10,11a4,4,0,1,1-4,4A4,4,0,0,1,10,11ZM33,38a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V24a3,3,0,0,1,3-3H30a3,3,0,0,1,3,3V38Zm11-1a2,2,0,0,1-3.21,1.65L35,34.49v-7l5.79-4.13A2,2,0,0,1,44,25Z" />
                        </g>
                    </svg>
                </div>
            </router-link>
        </div>
        <div class="post-info pt-6">
            <div class="flex items-center">
                <router-link
                    :to="`/categories/`"
                    class="category bg-[#edebf5] capitalize rounded-md px-4 py-1.5 mr-2 hover:bg-primary hover:text-white">
                    {{  course.category.category_name }}
                </router-link>
                <div class="author ml-4 md:ml-6">
                    <span class="text-[#9b9ea1]">By</span>
                    <router-link :to="`/author/`" class="hover:text-primary">
                        POR AHOR NADA
                    </router-link>0
                </div>
            </div>
            <h5 class="md:font-semibold  pt-4 mb-0 hover:text-primary" :class="textVariant">
                <n-link :to="`/blog/`">{{ course.course_name }}</n-link>
            </h5>
            <!-- <client-only>
                <p v-if="excerpt" class="mt-3" v-html="post.node.excerpt"></p>
            </client-only> -->
            <div class="meta flex items-center mt-4">
                <div class="flex items-center">
                    <i class="icofont-ui-calendar"></i>
                    <p class="pl-2">{{ course.created_at_course }}</p>
                </div>
                <div class="flex items-center pl-5">
                    <i class="icofont-clock-time"></i>
                    <p class="pl-2"> 3 min read</p>
                </div>
            </div>
        </div>
    </article>
</template>

<script>

export default {

    props: {
        course: {
            type: Object,
            default: () => { },
        },
        imgHeight: {
            type: String,
            default: ''
        },
        excerpt: {
            type: Boolean
        },
        textVariant: {
            type: String,
            default: ''
        }
    },
};
</script>
