<template>
    <article class="post md:flex items-center group">

        <div
            class="post-image overflow-hidden rounded-[10px] xl:w-[530px] md:w-[400px] h-[200px] md:h-[265px] flex-shrink-0 relative">
            <router-link :to="`/courses/view/${cursos.courseId}`">
                <img :src="IMAGE_PATH + cursos.coursePhoto" :alt="cursos.courseName"
                    class="object-cover h-full w-full group-hover:scale-110 transition-all duration-500">
            </router-link>
        </div>
        <div class="post-info md:pl-7 md:mt-0 mt-10">
            <div class="flex items-center text-[13px] md:text-base">
                <router-link :to="`/categories`"
                    class="category bg-[#edebf5] capitalize rounded-md px-4 py-1.5 mr-2 hover:bg-primary hover:text-white">
                    {{ cursos.category.categoryName }}
                </router-link>
                <div class="author ml-4 md:ml-6">
                    <span class="text-[#9b9ea1]">By </span>
                    <router-link :to="`/author`" class="hover:text-primary">
                        {{ cursos.user.userName }}
                    </router-link>
                </div>
            </div>
            <h2 class="text-lg md:text-xl font-semibold pt-4 md:pt-6 mb-0 hover:text-primary">
                <router-link :to="`/courses/view/${cursos.courseId}`"> {{ $options.filters.truncate(cursos.courseName, 40,
                    '...') }}</router-link>
            </h2>
            <client-only>
                <p class="mt-4">{{ $options.filters.truncate(cursos.courseDescription, 100, '...') }}</p>
            </client-only>

            <div class="meta flex items-center mt-4 md:mt-5">
                <div class="flex items-center">
                    <i class="icofont-ui-calendar"></i>
                    <p class="pl-2">{{ $moment(cursos.createdAtCourse).format('DD MMM, YYYY') }}</p>
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
import { truncateString } from "@/mixins/truncateString.js";
import { IMAGE_PATH } from '@/config/config';

export default {
    mixins: [truncateString],
    props: {
        cursos: {
            type: Object,
            default: () => { },
        },
    },
    setup() {
        return {
            IMAGE_PATH
        }
    }



};
</script>
