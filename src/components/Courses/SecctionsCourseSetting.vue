<template>
    <!-- Forum entries -->
    <div class="space-y-2">
        <div class="">
            <button class="btn bg-indigo-500 hover:bg-indigo-600 text-white" @click="addSection">
                <svg class="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                    <path
                        d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z">
                    </path>
                </svg>
                <span class="ml-2">Add new seccion</span>
            </button>
        </div>
        <article class="bg-white shadow-md rounded border border-slate-200 p-5 space-y-2"
            v-for="(section, i) in objectSeccions" :key="i">
            <div class="flex flex-start space-x-4 ">
                <!-- Content -->
                <div class="grow cursor-pointer" @click.self="section.isNew ? '' : (activeIndex = activeIndex === i ? null : i)">
                    <!-- Title -->
                    <div class="sm:w-2/3" v-if="!section.isEditing">
                        <div class="flex justify-between">
                            <h2 class="font-semibold text-slate-800 mb-2 text-sm">
                                <span>{{ section.sectionTitle }}</span>
                            </h2>
                            <button class=" border-slate-200 hover:border-slate-300" @click="section.isEditing = true">
                                <svg class="w-4 h-4 fill-current text-slate-500 shrink-0" viewBox="0 0 16 16">
                                    <path
                                        d="M11.7.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM4.6 14H2v-2.6l6-6L10.6 8l-6 6zM12 6.6L9.4 4 11 2.4 13.6 5 12 6.6z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="sm:w-2/3" v-else>
                        <div class="flex justify-between gap-2">
                            <input v-model="section.sectionTitle" autofocus placeholder="Nuevo nombre de la seccion"
                                class="form-input w-full h-6" type="text">
                            <button class=" border-slate-200 hover:border-slate-300" v-if="!section.isNew"
                                @click="section.isEditing = false, sectionId = section.sectionId, updateSectiontName()">
                                <svg class="w-4 h-4 fill-current text-indigo-500 shrink-0" viewBox="0 0 16 16">
                                    <path
                                        d="M14.3 2.3L5 11.6 1.7 8.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4 4c.2.2.4.3.7.3.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0z">
                                    </path>
                                </svg>
                            </button>
                            <button
                                @click="sectionId = i, createCourseRequest(), section.isEditing = false, section.isNew = false"
                                class=" border-slate-200 hover:border-slate-300" v-else>
                                <svg class="w-7 h-7  shrink-0" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M11 13L15.4564 8.5M11 13L6.38202 9.57695C5.7407 9.07229 5.94107 8.06115 6.72742 7.834L20 4L17.117 15.9189C16.9651 16.6489 16.0892 16.9637 15.5 16.5L13.5 15M11 13V18L13.5 15M11 13L13.5 15M7 20L9 18M4 19L8.5 14.5M4 15L6.5 12.5"
                                        stroke="#16c057" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </button>
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
                <ContentSecctionSettings :contents="section.sectionContents" />
            </div>

            <footer class="flex flex-wrap justify-end text-sm" v-show='i === activeIndex'>
                <div
                    class="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 after:px-2">
                    <button class="btn-xs bg-indigo-500 hover:bg-indigo-600 text-white"
                        @click="addNewContent(i, section.sectionId)">
                        <svg class="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                            <path
                                d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z">
                            </path>
                        </svg>
                        <span class=" ml-2">Add content</span></button>
                </div>
            </footer>
        </article>
    </div>
</template>

<script>
import { onActivated, onMounted, ref, toRefs, watch } from 'vue';
import ContentSecctionSettings from './ContentSecctionSettings.vue'
import { useSection } from '../../composables/Courses/Section/useSection'
import { v4 as uuid, v4 } from "uuid";

export default {
    components: { ContentSecctionSettings },
    props: {
        sections: {
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