<template>
    <div class="p-6 space-y-1">
        <h2 class="text-2xl text-slate-800 font-bold ">General Information</h2><!-- Picture -->
        <span>Designing an Earth-positive future, together 🌿</span>
        <section>
            <div class="flex items-center">
                <div class="mr-4">
                    <div class="text-sm text-slate-800 space-y-2 mb-5">
                        <div class="relative !my-4">
                            <div class="relative w-2/3 rounded-lg overflow-hidden">
                                <img class="block w-full" :src="`${IMAGE_PATH}/${cursoObject.coursePhoto}`" alt="Feed 01"
                                    v-if="!fileNameHandlingCoursePhoto">
                                <img class="block w-full" :src="urlImageFile" alt="Feed 01" v-else>
                                <div @click="openFileInput"
                                    class="cursor-pointer absolute inset-0 bg-black/60 opacity-0 hover:opacity-75 transition-opacity duration-300">
                                    <svg fill="#ffffff"
                                        class="w-10 h-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
                                        viewBox="0 0 32 32" stroke="#ffffff">
                                        <path
                                            d="M30 2.497h-28c-1.099 0-2 0.901-2 2v23.006c0 1.099 0.9 2 2 2h28c1.099 0 2-0.901 2-2v-23.006c0-1.099-0.901-2-2-2zM30 27.503l-28-0v-5.892l8.027-7.779 8.275 8.265c0.341 0.414 0.948 0.361 1.379 0.035l3.652-3.306 6.587 6.762c0.025 0.025 0.053 0.044 0.080 0.065v1.85zM30 22.806l-5.876-6.013c-0.357-0.352-0.915-0.387-1.311-0.086l-3.768 3.282-8.28-8.19c-0.177-0.214-0.432-0.344-0.709-0.363-0.275-0.010-0.547 0.080-0.749 0.27l-7.309 7.112v-14.322h28v18.309zM23 12.504c1.102 0 1.995-0.894 1.995-1.995s-0.892-1.995-1.995-1.995-1.995 0.894-1.995 1.995c0 1.101 0.892 1.995 1.995 1.995z">
                                        </path>
                                    </svg>
                                </div>

                                <input type="file" ref="fileInput" accept="image/gif,image/jpeg,image/png,image/jpg,image"
                                    style="display: none;" @change="handleFileChange_NOCOMPOSABLE">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        <section>
            <h3 class="text-2xl leading-snug text-slate-800 font-bold mb-1">{{ cursoObject.courseName }}</h3>
            <div class="text-sm">With this name, your students will be able to find your course easily.</div>
            <div class="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
                <div class="sm:w-1/3">
                    <label class="block text-sm font-medium mb-1" for="name">Course Name</label>
                    <input id="name" v-model="courseName" class="form-input w-full" type="text">
                </div>
                <div class="sm:w-1/3">
                    <label class="block text-sm font-medium mb-1" for="business-id">Category</label>
                    <select id="countries" v-model="categoryId"
                        class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                        <option selected>Selec a category</option>
                        <option v-for="(cat, i) in categories" :key="i" :value="cat.categoryId">{{ cat.categoryName }}
                        </option>
                    </select>
                </div>
            </div>
        </section>
        <section>
            <h3 class="text-xl leading-snug text-slate-800 font-bold mb-1">Course Description</h3>
            <div class="text-sm">Some descriptions from your course.</div>
            <div class="flex flex-wrap mt-5">
                <div class="mr-2 w-2/3">
                    <label class="sr-only" for="email">Business email</label>
                    <textarea id="message" rows="4" v-model="courseDescription"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                        placeholder="Course Description"></textarea>
                </div>
            </div>
        </section>
        <button class="btn border-slate-200 hover:border-slate-300 shadow-sm text-indigo-500"
            @click="updateQuestionCourse">Change Settings</button>
    </div>
</template>

<script>
import { IMAGE_PATH } from '@/config/config';
import { useCourse } from '@/composables/Courses/useCourse';
import { onMounted, toRefs } from 'vue';
import { useFileHandling } from '@/composables/Courses/useFileHandling';
export default {
    props: {
        curso: {
            type: Object,
            default: () => { },
        },
        categories: {
            type: Object,
            default: () => { },
        },
    },
    setup(props) {
        const { curso } = toRefs(props);
        const {
            courseName,
            categoryId,
            courseFile,
            coursePhoto,
            courseDescription,
            updateCourseRequest,
            courseId,
            updateQuestionCourse,
        } = useCourse();
        const handleFileChange_NOCOMPOSABLE = () => {
            handleFileChange();
            coursePhoto.value = fileNameHandlingCoursePhoto.value
            courseFile.value = fileHandlingCourseFile.value
        }
        const {
            fileInput,
            handleDrop,
            urlImageFile,
            openFileInput,
            handleDragOver,
            handleFileChange,
            courseFile: fileHandlingCourseFile,
            coursePhoto: fileNameHandlingCoursePhoto,
        } = useFileHandling();

        onMounted(() => {
            if (curso.value) {
                const { category, courseName: name, courseDescription: description, coursePhoto: photo, courseId: id } = curso.value;
                categoryId.value = category.categoryId;
                courseName.value = name;
                courseDescription.value = description;

                const partes = photo.split("/");
                coursePhoto.value = partes[partes.length - 1];

                courseId.value = id;
            }
        });

        return {
            cursoObject: curso,
            IMAGE_PATH,
            courseName,
            categoryId,
            courseFile,
            coursePhoto,
            courseDescription,
            courseId,
            updateQuestionCourse,

            fileInput,
            handleDrop,
            urlImageFile,
            openFileInput,
            handleDragOver,
            handleFileChange,
            fileHandlingCourseFile,
            fileNameHandlingCoursePhoto,

            updateCourseRequest,
            handleFileChange_NOCOMPOSABLE,
        }
    }
}
</script>
