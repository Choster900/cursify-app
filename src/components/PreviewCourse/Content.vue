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
            <div class=" flex justify-between">
                <video width="490" height="232" :src="`${IMAGE_PATH}/media/${contents[i].contentFileName}`" controls
                    class="rounded-md object-cover"></video>
            </div>
            <div class="w-1/2 pt-4">
                <div>
                    <div>
                        <h1>{{ content.contentName }}</h1>
                    </div>
                </div>
            </div>

        </div>
    </article>
</template>

<script>
import { onActivated, onMounted, ref, toRefs, watch } from 'vue';
import FileUploader from '../Courses/FileUploader.vue';
import { useContent } from '@/composables/Courses/Section/content/useContent';
import { IMAGE_PATH } from '@/config/config';

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
        //const contents = ref(props.contents);
        const { contents } = toRefs(props);

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
        onActivated(() => {
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
        watch(contents, async () => {
            //  alert("cambio")
            if (contents.value && contents.value.length > 0) {
                contents.value.forEach((content) => {
                    if (content.contentFileName) {
                        content.contentFileName = content.contentFileName.split("/").pop();
                    }
                    content.fileVideoContent = '';
                    content.isNew = false;
                });
            }
        })

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
            IMAGE_PATH,

        }
    }
};
</script>

<style></style>