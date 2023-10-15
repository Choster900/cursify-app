<template>
    <article class="pt-4 border-b border-slate-200" v-for="(content, i) in contents" :key="i">
        <header class="flex items-start mb-2 cursor-pointer" @click='activeIndex = activeIndex === i ? null : i'>
            <div class="mr-3">
                <svg class="w-4 h-4 shrink-0 fill-current" viewBox="0 0 16 16">
                    <path class="text-indigo-300" d="M4 8H0v4.9c0 1 .7 1.9 1.7 2.1 1.2.2 2.3-.8 2.3-2V8z">
                    </path>
                    <path class="text-indigo-500"
                        d="M15 1H7c-.6 0-1 .4-1 1v11c0 .7-.2 1.4-.6 2H13c1.7 0 3-1.3 3-3V2c0-.6-.4-1-1-1z">
                    </path>
                </svg>
            </div>
            <h3 class="text-base leading-snug  font-bold" :class="activeIndex === i ? 'text-slate-800' : 'text-slate-400'">
                {{ !content.isNew ? contents[i].contentName : content.contentName }}</h3>
        </header>
        <div class="pl-7" v-show='i === activeIndex'>
            <FileUploader @file-uploaded="handleFileUploaded" :videoFile="contents[i].contentFileName" :rowFile="i" />
            <div class="w-1/2 pt-4">
                <div>
                    <div>
                        <label class="block text-sm font-medium mb-1" for="supporting-text">Nombre del contenido</label>
                        <input id="name-text" class="form-input w-full" type="text" v-model="content.contentName">
                    </div>
                </div>
            </div>
            <ul class="flex flex-wrap py-2">
                <li v-if="!content.isNew"
                    class="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 after:px-2">
                    <a @click="objectSeccionContent = contents, modifiedContentIntoCourseRequest(i)"
                        class="text-sm font-semibold text-blue-500 hover:text-blue-600" href="#0">Enviar informacion</a>
                </li>
                <li v-else
                    class="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 after:px-2">
                    <a @click="objectSeccionContent = contents, createContentIntoCourseRequest(i)"
                        class="text-sm font-semibold text-blue-500 hover:text-blue-600" href="#0">Agregar</a>
                </li>
                <li
                    class="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 after:px-2">
                    <a class="text-sm font-semibold text-rose-500 hover:text-rose-600" href="#0">Poner en privado</a>
                </li>
            </ul>
        </div>
    </article>
</template>

<script>
import { onMounted, ref, toRefs, watch } from 'vue';
import FileUploader from './FileUploader.vue';
import { useContent } from '@/composables/Courses/Section/content/useContent';

export default {
    props: {
        contents: {
            type: Object,
            default: () => { },
        },
    },
    components: { FileUploader },
    setup(props) {
        const activeIndex = ref(0);
        const contents = ref(props.contents);
        const {
            objectSeccionContent,
            modifiedContentIntoCourseRequest,
            createContentIntoCourseRequest,
            objectRetunredWhenIsAdding,
            addNewContent,
        } = useContent()

        onMounted(() => {
            if (contents.value && contents.value.length > 0) {
                contents.value.forEach((content) => {
                    if (content.contentFileName) {
                        content.contentFileName = content.contentFileName.split("/").pop();
                    }
                    content.fileVideoContent = '';
                    content.isNew = false;
                });
            }
        });


        watch(objectRetunredWhenIsAdding, () => {
            console.log("Contenido actualizado:", objectRetunredWhenIsAdding.value);
            console.log(contents.value);

            contents.value[objectRetunredWhenIsAdding.value.rowAffected].isNew = false;
            contents.value[objectRetunredWhenIsAdding.value.rowAffected].contentId = objectRetunredWhenIsAdding.value.response.contentId;
        });
        const handleFileUploaded = (object) => {
            const { data, rowFile } = object
            contents.value[rowFile].contentFileName = data.contentVideoName
            contents.value[rowFile].fileVideoContent = data.contentFile

        }
        return {
            activeIndex,
            objectSeccionContent,
            handleFileUploaded,
            modifiedContentIntoCourseRequest,
            createContentIntoCourseRequest,
            objectRetunredWhenIsAdding,
            addNewContent,

        }
    }
};
</script>

<style></style>