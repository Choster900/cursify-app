<template>
    <article class="post group">
        <div class="post-image overflow-hidden rounded-[10px] h-[200px] md:h-auto relative" :class="imgHeight">
            <router-link :to="`/courses/view/${course.courseId}`">
                <img :src="`${IMAGE_PATH}/${course.coursePhoto}`" :alt="course.courseName"
                    class="object-cover h-full w-full group-hover:scale-110 transition-all duration-500">
                <div
                    class="icon w-7 h-7  text-white text-xl absolute top-4 right-4 rounded-full flex items-center justify-center">
                    <GeneralMenu align="right" :courseId="course.courseId"
                        v-if="authIsReady && course.user.userId === userStore.userId" />
                </div>
            </router-link>
        </div>
        <div class="post-info pt-6">
            <div class="flex items-center">
                <router-link :to="`/categories/`"
                    class="category bg-[#edebf5] capitalize rounded-md px-4 py-1.5 mr-2 hover:bg-primary hover:text-white">
                    {{ course.category.categoryName }}
                </router-link>
                <div class="author ml-4 md:ml-6 ">
                    <span class="text-[#9b9ea1] mx-1">By </span>
                    <router-link :to="`/author/`" class="hover:text-primary">
                        {{ course.user.userName }}
                    </router-link>
                </div>
            </div>
            <h5 class="md:font-semibold  pt-4 mb-0 hover:text-primary" :class="textVariant">
                <router-link :to="`/blog/`">
                    {{ $options.filters.truncate(course.courseName, 55, '...') }}
                </router-link>
            </h5>
            <div class="meta flex items-center mt-4">
                <div class="flex items-center">
                    <i class="icofont-ui-calendar"></i>
                    <p class="pl-2">{{ course.createdAtCourse }}</p>
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
import { IMAGE_PATH } from '@/config/config';
import GeneralMenu from '../Elements/MenuConfiguration.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';
import { truncateString } from '@/mixins/truncateString';

export default {
    components: {
        GeneralMenu,
    },
    mixins: [truncateString],
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
    setup() {
        const store = useStore()
        return {
            IMAGE_PATH,
            userStore: computed(() => store.state.user),
            authIsReady: computed(() => store.state.authIsReady),

        }
    }
};
</script>
