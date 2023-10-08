<template>
    <main class="bg-white">

        <div class="relative flex">

            <!-- Content -->
            <div class="w-full md:w-1/2">

                <div class="min-h-screen h-full flex flex-col after:flex-1">

                    <div class="flex-1">

                        <!-- Header -->
                        <div class="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
                            <!-- Logo -->
                            <router-link class="block" to="/">
                                <svg width="32" height="32" viewBox="0 0 32 32">
                                    <defs>
                                        <linearGradient x1="28.538%" y1="20.229%" x2="100%" y2="108.156%" id="logo-a">
                                            <stop stop-color="#A5B4FC" stop-opacity="0" offset="0%" />
                                            <stop stop-color="#A5B4FC" offset="100%" />
                                        </linearGradient>
                                        <linearGradient x1="88.638%" y1="29.267%" x2="22.42%" y2="100%" id="logo-b">
                                            <stop stop-color="#38BDF8" stop-opacity="0" offset="0%" />
                                            <stop stop-color="#38BDF8" offset="100%" />
                                        </linearGradient>
                                    </defs>
                                    <rect fill="#6366F1" width="32" height="32" rx="16" />
                                    <path
                                        d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z"
                                        fill="#4F46E5" />
                                    <path
                                        d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z"
                                        fill="url(#logo-a)" />
                                    <path
                                        d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z"
                                        fill="url(#logo-b)" />
                                </svg>
                            </router-link>
                            <div class="text-sm">
                                Have an account? <router-link class="font-medium text-indigo-500 hover:text-indigo-600"
                                    to="/signin">Sign
                                    In</router-link>
                            </div>
                        </div>

                        <!-- Progress bar -->
                        <div class="px-4 pt-12 pb-8">
                            <div class="max-w-md mx-auto w-full">
                                <div class="relative">
                                    <div class="absolute left-0 top-1/2 -mt-px w-full h-0.5 bg-slate-200"
                                        aria-hidden="true"></div>
                                    <ul class="relative flex justify-between w-full">
                                        <li>
                                            <router-link
                                                :class="step == 1 ? 'bg-indigo-500 text-white' : 'bg-slate-100 text-slate-500'"
                                                class="flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold "
                                                to="/courses/create/1">1</router-link>
                                        </li>
                                        <li>
                                            <router-link
                                                :class="step == 2 ? 'bg-indigo-500 text-white' : 'bg-slate-100 text-slate-500'"
                                                class="flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold "
                                                to="/courses/create/2">2</router-link>
                                        </li>
                                        <li>
                                            <router-link
                                                :class="step == 3 ? 'bg-indigo-500 text-white' : 'bg-slate-100 text-slate-500'"
                                                class="flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold "
                                                to="/courses/create/3">3</router-link>
                                        </li>
                                        <li>
                                            <router-link
                                                :class="step == 4 ? 'bg-indigo-500 text-white' : 'bg-slate-100 text-slate-500'"
                                                class="flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold "
                                                to="/courses/create/4">4</router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="px-4 py-8" v-show="step == 1">
                        <div class="max-w-md mx-auto">

                            <h1 class="text-3xl text-slate-800 font-bold mb-6">Tell us what’s going to be the name</h1>
                            <!-- Form -->
                            <div class="space-y-3 mb-8">
                                <input type="text" v-model="courseName"
                                    class="h-10 w-full border border-indigo-500 rounded-md px-4 py-2 focus:outline-none focus:border-indigo-700"
                                    placeholder="Name's course">

                                <div class="flex items-center justify-between">
                                    <router-link class="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-auto"
                                        @click="handleLinkClick" :to="courseName ? '/courses/create/2' : ''"
                                        :disabled="!courseName">Next Step
                                        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none">
                                            <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#ffffff" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </router-link>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="px-4 py-8" v-show="step == 2">
                        <div class="max-w-md mx-auto">
                            <h1 class="text-3xl text-slate-800 font-bold mb-6">Select the category you course will be ✨</h1>
                            <!-- Form -->
                            <div>
                                <div class="space-y-3 mb-8">
                                    <select v-model="categoryId"
                                        class="h-10 w-full border border-indigo-500 rounded-md px-4 py-2 focus:outline-none focus:border-indigo-700 bg-white">
                                        <option disabled selected value="">Select a category</option>
                                        <option v-for="(cateogory, i) in categoriesObject" :value="cateogory.categoryId"
                                            :key="i" class="text-indigo-700 uppercase">
                                            {{ cateogory.categoryName }}
                                        </option>
                                    </select>
                                </div>
                                <div class="flex items-center justify-between space-x-6 mb-8">
                                    <textarea v-model="courseDescription"
                                        class="w-full h-32 px-4 py-2 border border-indigo-500 rounded-md focus:outline-none focus:border-indigo-700"
                                        placeholder="Enter your text here..."></textarea>
                                </div>
                                <div class="flex items-center justify-between">
                                    <router-link class="text-sm underline hover:no-underline" to="/courses/create/1">&lt;-
                                        Back</router-link>
                                    <router-link class="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-auto"
                                        @click="handleLinkClick"
                                        :to="categoryId && courseDescription ? '/courses/create/3' : ''">Next Step
                                        -&gt;</router-link>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="px-4 py-8" v-show="step == 3">
                        <div class="max-w-md mx-auto">

                            <h1 class="text-3xl text-slate-800 font-bold mb-6">Image From Course ✨</h1>
                            <!-- Form -->
                            <div>
                                <div v-if="!urlImageFile"
                                    class="h-72 w-full border-[3px] border-dashed flex items-center justify-center"
                                    @dragover.prevent="handleDragOver" @drop="handleDrop">
                                    <div class="text-center">
                                        <p class="font-semibold">Dragon and Drop files here</p>
                                        <p>Or</p>
                                        <button class="py-2 px-4 bg-red-500 text-white rounded-sm" @click="openFileInput">

                                            <div class="flex justify-center gap-2">
                                                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                        stroke-linejoin="round"></g>
                                                    <g id="SVGRepo_iconCarrier">
                                                        <path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15"
                                                            stroke="#ffffff" stroke-width="1.5" stroke-linecap="round">
                                                        </path>
                                                        <path
                                                            d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                                                            stroke="#ffffff" stroke-width="1.5" stroke-linecap="round">
                                                        </path>
                                                    </g>
                                                </svg>
                                                <span>
                                                    Add files
                                                </span>
                                            </div>
                                        </button>
                                        <p class="mt-4">64Mb max</p>
                                        <p>JPG,JPEG,PNG</p>
                                        <input type="file" ref="fileInput"
                                            accept="image/gif,image/jpeg,image/png,image/jpg,image" style="display: none;"
                                            @change="handleFileChange">
                                    </div>
                                </div>
                                <div v-if="urlImageFile"
                                    class="relative h-72 w-full border-[3px] border-dashed flex items-center justify-center">
                                    <img :src="urlImageFile" alt="" class="w-full h-full object-cover"
                                        style="max-height: 42.2rem;" />
                                    <span class="absolute top-0 right-0 m-2 cursor-pointer text-red-500 text-2xl"
                                        @click="urlImageFile = ''; imagenfile = '';">

                                        <svg fill="#ff0000" class="w-3 h-3" viewBox="0 0 469.404 469.404">

                                            <path
                                                d="M310.4,235.083L459.88,85.527c12.545-12.546,12.545-32.972,0-45.671L429.433,9.409c-12.547-12.546-32.971-12.546-45.67,0 L234.282,158.967L85.642,10.327c-12.546-12.546-32.972-12.546-45.67,0L9.524,40.774c-12.546,12.546-12.546,32.972,0,45.671 l148.64,148.639L9.678,383.495c-12.546,12.546-12.546,32.971,0,45.67l30.447,30.447c12.546,12.546,32.972,12.546,45.67,0 l148.487-148.41l148.792,148.793c12.547,12.546,32.973,12.546,45.67,0l30.447-30.447c12.547-12.546,12.547-32.972,0-45.671 L310.4,235.083z">
                                            </path>

                                        </svg>
                                    </span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <router-link class="text-sm underline hover:no-underline" to="/courses/create/2">&lt;-
                                        Back</router-link>
                                    <router-link class="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-auto"
                                        @click="handleLinkClick" :to="urlImageFile ? '/courses/create/4' : ''"
                                        :disabled="!courseName">Next Step
                                        -&gt;</router-link>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="px-4 py-8" v-show="step == 4">
                        <div class="max-w-md mx-auto">

                            <div class="text-center">
                                <svg class="inline-flex w-16 h-16 fill-current mb-6" viewBox="0 0 64 64">
                                    <circle class="text-emerald-100" cx="32" cy="32" r="32" />
                                    <path class="text-emerald-500" d="m28.5 41-8-8 3-3 5 5 12-12 3 3z" />
                                </svg>
                                <h1 class="text-3xl text-slate-800 font-bold mb-8">Nice to have you, Acme Inc. 🙌</h1>
                                <button class="btn bg-indigo-500 hover:bg-indigo-600 text-white"
                                    @click="createCategoryRequest">Go To Dashboard
                                    -&gt;</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <!-- Image -->
            <div class="hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2" aria-hidden="true">
                <img class="object-cover object-center w-full h-full" src="../static/image/banners/dev1.jpg" width="760"
                    height="1024" alt="Onboarding" />
                <img class="absolute top-1/4 left-0 -translate-x-1/2 ml-8 hidden lg:block"
                    src="https://preview.cruip.com/mosaic/images/auth-decoration.png" width="218" height="224"
                    alt="Authentication decoration" />
            </div>

        </div>

    </main>
</template>

<script>
import { useRoute } from 'vue-router';
import { onActivated, onMounted, ref, watch } from 'vue';
import { useCourse } from '@/composables/Courses/useCourse';
import useCategory from '@/composables/Category.vue/useCategory';
import { useFileHandling } from '@/composables/Courses/useFileHandling';
import { useCourseDataValidation } from '@/composables/Courses/useCourseDataValidation';
export default {
    components: {},
    setup() {
        const step = ref(null)
        const route = useRoute()
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

        const {
            courseName,
            categoryId,
            courseFile,
            coursePhoto,
            courseDescription,
            createCategoryRequest,
        } = useCourse();



        const { categoriesObject } = useCategory();

        const validateCourseData = (data) => {
            return useCourseDataValidation(data);
        }

        const handleLinkClick = async () => {
            const courseData = {
                courseName: courseName.value, // Accede al valor de ref usando .value
                categoryId: categoryId.value,
                courseDescription: courseDescription.value,
                coursePhoto: fileNameHandlingCoursePhoto.value,
            };

            const validationError = validateCourseData(courseData);
   
            courseFile.value = fileHandlingCourseFile.value;
            coursePhoto.value = fileNameHandlingCoursePhoto.value


            if (validationError) {
                console.log(validationError); // Puedes mostrar el error en la consola o en tu interfaz de usuario
            } else {
                console.log('Datos válidos, puedes enviarlos al servidor');
                const resp = await createCategoryRequest();
            }
        }

        watch(() => {
            console.log(route.params);
            step.value = route.params.step
        })
        return {
            step, 
            fileInput,
            courseFile,
            handleDrop,
            courseName,
            categoryId,
            coursePhoto,
            urlImageFile,
            openFileInput,
            handleDragOver,
            handleLinkClick,
            handleFileChange,
            categoriesObject,
            courseDescription,
            createCategoryRequest,
        }
    }
}
</script>

<style scoped>
select {
    appearance: none;
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22%23b4b4b4%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M7.41%206.58a2%202%200%200%201%202.83%200l4.59%204.59a1%201%200%200%201%200%201.41l-4.59%204.59a2%202%200%200%201-2.83%200%202%202%200%200%201%200-2.83l3.3-3.29H2a1%201%200%200%201-1-1%201%201%200%200%201%201-1h8.88l-3.29-3.3a2%202%200%200%201%200-2.83z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E');
    background-repeat: no-repeat;
    background-position: right 0.7em top 50%;
    background-size: 12px;
    padding-right: 2.5em;
    border-radius: 0.375rem;
}
</style>