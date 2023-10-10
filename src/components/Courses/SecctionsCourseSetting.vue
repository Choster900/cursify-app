<template>
    <!-- Forum entries -->
    <div class="space-y-2">
        <article class="bg-white shadow-md rounded border border-slate-200 p-5 space-y-2" v-for="i in 3" :key="i">
            <div class="flex flex-start space-x-4 cursor-pointer" @click='activeIndex = activeIndex === i ? null : i'>
                <!-- Content -->
                <div class="grow">
                    <!-- Title -->
                    <h2 class="font-semibold text-slate-800 mb-2 text-sm">
                        <span>Seccion 1: Introducción a JavaScipt</span>
                    </h2>
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

            <footer class="flex flex-wrap text-sm" v-show='i === activeIndex'>
                <div
                    class="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 after:px-2">
                    <a class="font-medium text-blue-800 hover:text-indigo-600 border rounded-md px-2" href="#0">
                        <div class="flex items-center gap-2" ref_for="addSec">
                            <lord-icon id="addSec" src="https://cdn.lordicon.com/zgogqkqu.json" trigger="hover"
                                colors="primary:#4be1ec,secondary:#cb5eee" style="width:40px;height:40px">
                            </lord-icon>
                            Agregar seccion
                        </div>
                    </a>
                </div>
            </footer>
        </article>
    </div>
</template>

<script>
import { ref } from 'vue';
import ContentSecctionSettings from './ContentSecctionSettings.vue'

export default {
    components: { ContentSecctionSettings },
    props: {
        sections: {
            type: Object,
            default: () => { },
        },
    },
    setup() {
        const activeIndex = ref(0);
        return {
            activeIndex,
        }
    }

};
</script>

<style lang="scss" scoped>
.active span {
    @apply bg-indigo-600 text-white;
}
</style>