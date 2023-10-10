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

            <footer class="flex flex-wrap justify-end text-sm" v-show='i === activeIndex'>
                <div
                    class="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 after:px-2">
                    <button class="btn-xs bg-indigo-500 hover:bg-indigo-600 text-white">
                        <svg class="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                            <path
                                d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z">
                            </path>
                        </svg>
                        <span class=" ml-2">Agregar seccion</span></button>
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