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
            <div class="flex flex-start space-x-4 cursor-pointer">
                <!-- Content -->
                <div class="grow" @click.self='activeIndex = activeIndex === i ? null : i'>
                    <!-- Title -->
                    <div class="sm:w-2/3" v-if="!section.isEditing">
                        <div class="flex justify-between">
                            <h2 class="font-semibold text-slate-800 mb-2 text-sm">
                                <span>{{ section.sectionTitle }}</span>
                            </h2>
                            <svg class="w-5 h-5" viewBox="0 0 32 32" @click="section.isEditing = true">
                                <path
                                    d="M24.336,4.8l2.859,2.859L15.3,20H12V16.7L24.336,4.8M24.362,0a1.991,1.991,0,0,0-1.411.584L8,15v9h9L31.416,9.05a2,2,0,0,0,0-2.822L25.773.585A1.988,1.988,0,0,0,24.362,0Z"
                                    fill="#1f0066"></path>
                                <path
                                    d="M28,27a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4h5a2,2,0,0,0,2-2h0a2,2,0,0,0-2-2H2A2,2,0,0,0,0,2V30a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V22a2,2,0,0,0-2-2h0a2,2,0,0,0-2,2Z"
                                    fill="#1f0066"></path>

                            </svg>
                        </div>
                    </div>
                    <div class="sm:w-2/3" v-else>
                        <div class="flex justify-between">
                            <input v-model="section.sectionTitle" autofocus placeholder="Nuevo nombre de la seccion"
                                class="form-input w-full h-6" type="text">
                            <svg class="h-6 w-6  " viewBox="0 0 24 24"
                                @click="section.isEditing = false, sectionId = section.sectionId, updateContentName()">
                                <path
                                    d="M12 21C16.9706 21 21 16.9706 21 12C21 10.1666 20.4518 8.46124 19.5103 7.03891L12.355 14.9893C11.6624 15.7589 10.4968 15.8726 9.66844 15.2513L6.4 12.8C5.95817 12.4686 5.86863 11.8418 6.2 11.4C6.53137 10.9582 7.15817 10.8686 7.6 11.2L10.8684 13.6513L18.214 5.48955C16.5986 3.94717 14.4099 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                                    fill="#00a83b"></path>
                            </svg>
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
                <ContentSecctionSettings />
            </div>

            <footer class="flex flex-wrap justify-end text-sm" v-show='i === activeIndex'>
                <div
                    class="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 after:px-2">
                    <button class="btn-xs bg-indigo-500 hover:bg-indigo-600 text-white">
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
import { onMounted, ref, toRefs } from 'vue';
import ContentSecctionSettings from './ContentSecctionSettings.vue'
import { useSection } from '../../composables/Courses/Section/useSection'
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
        const { objectSeccions, addSection, sectionId, updateContentName } = useSection();
        onMounted(() => {
            if (sections.value) {
                objectSeccions.value = sections.value;
                for (const section of objectSeccions.value) {
                    section.isEditing = false;// Agregamos una nueva llave para manejar la parte de edicion
                }
            }
        })

        return {
            activeIndex,
            updateContentName,
            sectionId,
            objectSeccions,
            addSection
        }
    }

};
</script>

<style lang="scss" scoped></style>