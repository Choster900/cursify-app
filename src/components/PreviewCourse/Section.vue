<template>
    <!-- Forum entries -->
    <div class="space-y-2">
        <article class="bg-white shadow-md rounded border border-slate-200 p-5 space-y-2"
            v-for="(section, i) in objectSeccions" :key="i">
            <div class="flex flex-start space-x-4 ">
                <!-- Content -->
                <div class="grow cursor-pointer"
                    @click="section.isNew ? '' : (activeIndex = activeIndex === i ? null : i)">
                    <!-- Title -->
                    <div class="sm:w-2/3">
                        <div class="flex justify-between">
                            <h2 class="font-semibold text-slate-800 mb-2 text-sm">
                                <span>{{ section.sectionTitle }}</span>
                            </h2>
                        </div>
                    </div>
                    <!-- Footer -->
                    <footer class="flex flex-wrap text-sm">
                        <div
                            class="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 after:px-2">
                            <span class="text-slate-500">Cantidad de contenido:
                                10</span>
                        </div>
                        <div
                            class="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 after:px-2">
                            <span class="text-slate-500">688 Comments</span>
                        </div>
                    </footer>
                </div>
                <!-- Upvote button -->
                <div class="shrink-0">
                    <button :class='{ "border-indigo-400": activeIndex === i }'
                        @click='activeIndex = activeIndex === i ? null : i'
                        class="text-xs font-semibold text-center h-8 w-8 border  rounded-sm flex flex-col justify-center items-center outline outline-2 outline-indigo-100">
                        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                            :transform="activeIndex === i ? 'matrix(1, 0, 0, 1, 0, 0)rotate(270)' : 'matrix(1, 0, 0, 1, 0, 0)rotate(90)'">
                            <path
                                d="M16.1795 3.26875C15.7889 2.87823 15.1558 2.87823 14.7652 3.26875L8.12078 9.91322C6.94952 11.0845 6.94916 12.9833 8.11996 14.155L14.6903 20.7304C15.0808 21.121 15.714 21.121 16.1045 20.7304C16.495 20.3399 16.495 19.7067 16.1045 19.3162L9.53246 12.7442C9.14194 12.3536 9.14194 11.7205 9.53246 11.33L16.1795 4.68297C16.57 4.29244 16.57 3.65928 16.1795 3.26875Z"
                                fill="#000000"></path>

                        </svg>
                    </button>
                </div>
            </div>
            <div v-show='i === activeIndex'>
                <Content :contents="section.sectionContents" :isEnroll="isEnroll"/>
            </div>

            <footer class="flex flex-wrap justify-end text-sm" v-show='i === activeIndex'>
                <div
                    class="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 after:px-2">

                </div>
            </footer>
        </article>
    </div>
</template>

<script>
import { onActivated, onMounted, ref, toRefs, watch } from 'vue';
import Content from './Content.vue'
import { useSection } from '../../composables/Courses/Section/useSection'
import { v4 as uuid, v4 } from "uuid";

export default {
    components: { Content },
    props: {
        sections: {
            type: Object,
            default: () => { },
        },
        isEnroll: {
            type: Object,
            default: () => { },
        },
    },
    setup(props) {
        const activeIndex = ref(0);

        const { sections } = toRefs(props);
        const { objectSeccions, addSection, sectionId, updateSectiontName, createCourseRequest } = useSection();
        onMounted(() => {
            if (sections.value) {
                objectSeccions.value = sections.value;
                for (const section of objectSeccions.value) {
                    section.id = v4()
                    section.isEditing = false
                    section.isNew = false
                }
            }
        })
        onActivated(() => {
            if (sections.value) {
                objectSeccions.value = sections.value;
                for (const section of objectSeccions.value) {
                    section.id = v4()
                    section.isEditing = false
                    section.isNew = false
                }
            }
        })
        watch(sections, async () => {
            if (sections.value) {
                objectSeccions.value = sections.value;
                for (const section of objectSeccions.value) {
                    section.id = v4()
                    section.isEditing = false
                    section.isNew = false
                }
            }
        })

        const addNewContent = (key, sectionId) => {
            objectSeccions.value[key].sectionContents.push({
                contentId: '',
                sectionId: sectionId,
                contentName: 'TEST',
                contentType: 'mp4',
                contentFileName: '',
                fileVideoContent: '',
                isNew: true,
            })
        }

        return {
            activeIndex,
            updateSectiontName,
            objectSeccions,
            addNewContent,
            addSection,
            createCourseRequest,
            sectionId,
        }
    }

};
</script>

<style lang="scss" scoped></style>