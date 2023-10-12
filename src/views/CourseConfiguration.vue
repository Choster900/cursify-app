<template>
    <div class="blog-posts">
        <div class="">
            <div class="container">
                <main>
                    <div class="px-4 sm:px-6 lg:px-8 py-8 md:py-0 w-full max-w-9xl mx-auto">
                        <div class="xl:flex">
                            <div class="md:flex flex-1">
                                <div
                                    class="flex flex-nowrap overflow-x-scroll no-scrollbar md:block md:overflow-auto px-3 py-6 border-b md:border-b-0 md:border-r border-slate-200 min-w-60 md:space-y-3">
                                    <div>
                                        <div class="text-xs font-semibold text-slate-400 uppercase mb-3">Course settings
                                        </div>
                                        <ul class="flex flex-nowrap md:block mr-3 md:mr-0">
                                            <li class="mr-0.5 md:mr-0 md:mb-0.5">
                                                <a class="flex items-center px-2.5 py-2 rounded whitespace-nowrap"
                                                    :class="activeMenu == 'general' ? 'bg-indigo-50' : ''"
                                                    @click="activeMenu = 'general'" href="#general">
                                                    <svg class="w-4 h-4 shrink-0 fill-current mr-2 "
                                                        :class="activeMenu == 'general' ? 'text-indigo-400' : 'text-slate-400'"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M12.311 9.527c-1.161-.393-1.85-.825-2.143-1.175A3.991 3.991 0 0012 5V4c0-2.206-1.794-4-4-4S4 1.794 4 4v1c0 1.406.732 2.639 1.832 3.352-.292.35-.981.782-2.142 1.175A3.942 3.942 0 001 13.26V16h14v-2.74c0-1.69-1.081-3.19-2.689-3.733zM6 4c0-1.103.897-2 2-2s2 .897 2 2v1c0 1.103-.897 2-2 2s-2-.897-2-2V4zm7 10H3v-.74c0-.831.534-1.569 1.33-1.838 1.845-.624 3-1.436 3.452-2.422h.436c.452.986 1.607 1.798 3.453 2.422A1.943 1.943 0 0113 13.26V14z">
                                                        </path>
                                                    </svg>
                                                    <span class="text-sm font-medium  "
                                                        :class="activeMenu == 'general' ? 'text-indigo-500' : 'text-slate-600 hover:text-slate-700'">General</span>
                                                </a>
                                            </li>
                                            <li class="mr-0.5 md:mr-0 md:mb-0.5">
                                                <a class="flex items-center px-2.5 py-2 rounded whitespace-nowrap"
                                                    :class="activeMenu == 'content' ? 'bg-indigo-50' : ''"
                                                    @click="activeMenu = 'content'" href="#content">
                                                    <svg class="w-4 h-4 shrink-0 fill-current  mr-2"
                                                        :class="activeMenu == 'content' ? 'text-indigo-400' : 'text-slate-400'"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M14.3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-8 8c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l8-8zM15 7c.6 0 1 .4 1 1 0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8c.6 0 1 .4 1 1s-.4 1-1 1C4.7 2 2 4.7 2 8s2.7 6 6 6 6-2.7 6-6c0-.6.4-1 1-1z">
                                                        </path>
                                                    </svg>
                                                    <span class="text-sm font-medium  "
                                                        :class="activeMenu == 'content' ? 'text-indigo-500' : 'text-slate-600 hover:text-slate-700'">Content</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div class="text-xs font-semibold text-slate-400 uppercase mb-3">Experience</div>
                                        <ul class="flex flex-nowrap md:block mr-3 md:mr-0">
                                            <li class="mr-0.5 md:mr-0 md:mb-0.5">
                                                <a class="flex items-center px-2.5 py-2 rounded whitespace-nowrap"
                                                    href="/settings/feedback">
                                                    <svg class="w-4 h-4 shrink-0 fill-current text-slate-400 mr-2"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M7.001 3h2v4h-2V3zm1 7a1 1 0 110-2 1 1 0 010 2zM15 16a1 1 0 01-.6-.2L10.667 13H1a1 1 0 01-1-1V1a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1zM2 11h9a1 1 0 01.6.2L14 13V2H2v9z">
                                                        </path>
                                                    </svg>
                                                    <span
                                                        class="text-sm font-medium text-slate-600 hover:text-slate-700">Give
                                                        Feedback</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                               <!--  <pre>
                            {{ courseDetails }}
                        </pre> -->
                                <div class="flex-1 md:ml-8 xl:mx-4 2xl:mx-8">
                                    <div class="md:py-8">
                                        <!-- Content course setting -->
                                        <div v-if="courseDetails && categoriesObject" >
                                            
                                            <GeneralCourseSettings :class="activeMenu == 'general' ? '' : 'hidden'"
                                            :categories="categoriesObject" :curso="courseDetails" />

                                            
                                            <ContentCourseSettings :class="activeMenu == 'content' ? '' : 'hidden'" :sections="courseDetails.sections" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </main>

            </div>
        </div>
    </div>
</template>

<script>
import ContentCourseSettings from '@/components/Courses/SecctionsCourseSetting.vue';
import GeneralCourseSettings from '@/components/Courses/GeneralCourseSettings.vue';
import { useRoute } from 'vue-router';
import { useCourseSettings } from '../composables/Courses/useCourseSettings.js'
import { reactive, toRefs } from 'vue';
import useCategory from '@/composables/Category.vue/useCategory';

export default {
    components: { ContentCourseSettings, GeneralCourseSettings },
    setup() {
        const route = useRoute()
        const courseId = route.params.courseId
        const { activeMenu, courseDetails } = useCourseSettings(courseId);
        const { categoriesObject } = useCategory()
        return {
            activeMenu,
            courseDetails,
            categoriesObject
        }
    }
};
</script>

<style></style>
