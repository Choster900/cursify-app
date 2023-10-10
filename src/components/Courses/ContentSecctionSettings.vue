<template>
    <article class="pt-4 border-b border-slate-200" v-for="j in 2" :key="j">
        <header class="flex items-start mb-2 cursor-pointer" @click='activeIndex = activeIndex === j ? null : j'>
            <div class="mr-3">
                <svg class="w-4 h-4 shrink-0 fill-current" viewBox="0 0 16 16">
                    <path class="text-indigo-300" d="M4 8H0v4.9c0 1 .7 1.9 1.7 2.1 1.2.2 2.3-.8 2.3-2V8z">
                    </path>
                    <path class="text-indigo-500"
                        d="M15 1H7c-.6 0-1 .4-1 1v11c0 .7-.2 1.4-.6 2H13c1.7 0 3-1.3 3-3V2c0-.6-.4-1-1-1z">
                    </path>
                </svg>
            </div>
            <h3 class="text-base leading-snug  font-bold" :class="activeIndex === j ? 'text-slate-800' : 'text-slate-400'">
                1.Introducción al Curso</h3>
        </header>
        <div class="pl-7" v-show='j === activeIndex'>

            <FileUploader />
            <ul class="flex flex-wrap">
                <li
                    class="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 after:px-2">

                    <div class="m-1.5">
                        <button class="btn-xs bg-indigo-500 hover:bg-indigo-600 text-white">Button</button>
                    </div>
                </li>
                <li
                    class="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 after:px-2">
                    <div class="m-1.5">
                        <button class="btn-xs bg-indigo-500 hover:bg-indigo-600 text-white">Button</button>
                    </div>
                </li>
            </ul>
        </div>
    </article>
</template>

<script>
import { useFileHandling } from '@/composables/Courses/useFileHandling';
import { ref } from 'vue';
import FileUploader from './FileUploader.vue';

export default {
    props: {
        content: {
            type: Object,
            default: () => { },
        },
    },
    components: { FileUploader },
    setup() {
        const activeIndex = ref(0);

        const {
            fileInput,
            handleDrop,
            urlImageFile,
            openFileInput,
            handleDragOver,
            handleFileChange,
            courseFile: fileHandlingCourseFile,
            coursePhoto: fileNameHandlingCoursePhoto,
            openFileInputs,
            fileInputs,
        } = useFileHandling();

        return {
            fileInput,
            handleDrop,
            urlImageFile,
            openFileInput,
            handleDragOver,
            handleFileChange,
            activeIndex,
            coursePhoto: fileNameHandlingCoursePhoto,
            openFileInputs,
            fileInputs,

        }
    }

};
</script>

<style></style>