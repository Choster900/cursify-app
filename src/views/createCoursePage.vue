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
                                        to="/courses/create/2">Next
                                        Step -&gt;</router-link>
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
                                        <option v-for="category in categories" :value="category.id" :key="category.id"
                                            class="text-indigo-700">
                                            {{ category.name }}
                                        </option>
                                    </select>
                                </div>
                                <div class="flex items-center justify-between space-x-6 mb-8">
                                    <textarea
                                        class="w-full h-32 px-4 py-2 border border-indigo-500 rounded-md focus:outline-none focus:border-indigo-700"
                                        placeholder="Enter your text here..."></textarea>
                                </div>
                                <div class="flex items-center justify-between">
                                    <router-link class="text-sm underline hover:no-underline" to="/courses/create/1">&lt;-
                                        Back</router-link>
                                    <router-link class="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-auto"
                                        to="/courses/create/3">Next Step -&gt;</router-link>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div class="px-4 py-8" v-show="step == 3">
                        <div class="max-w-md mx-auto">

                            <h1 class="text-3xl text-slate-800 font-bold mb-6">Company information ✨</h1>
                            <!-- Form -->
                            <div>
                                <div class="ud-form-group">
                                    <label for="form-group--124" class="ud-form-label ud-heading-md">Course image</label>

                                    <div
                                        class="course-basics-form--image-upload--1BfBH udlite-in-udheavy flex items-center space-x-4">
                                        <!-- Vista previa de la imagen -->
                                        <div
                                            class="ud-image-upload-preview-wrapper image-upload-preview-with-crop--preview-wrapper--3mrme">
                                            <div class="image-upload-preview-with-crop--image-wrapper--2soBW">
                                                <img data-purpose="image-preview"
                                                    src="https://udemy-image-web-upload.s3.amazonaws.com:443/cropped_image_00d31720-60d1-11ee-ac45-46d0b7c1fb6b.png"
                                                    alt="" height="422" width="750" class="" loading="lazy"
                                                    style="max-height: 42.2rem;" />
                                            </div>
                                        </div>

                                        <div class="">
                                            <input accept=".gif,.jpg,.jpeg,.png" id="form-group--126" type="file"
                                                class="sr-only" />

                                            <label for="form-group--126" class="flex border">
                                                <span class="w-28">
                                                    <span class="file-uploader-module--fake-input-text--2n1U1"
                                                        id="file-name">No file selected</span>
                                                </span>

                                                <span class="bg-red-500">
                                                    <span>Upload File</span>
                                                </span>
                                            </label>
                                        </div>

                                    </div>
                                </div>
                                <!--  <div class="space-y-4 mb-8">
                                    <div class="flex items-center space-x-4">
                                        <div class="flex-shrink-0">
                                            <label for="file-upload"
                                                class="cursor-pointer flex items-center space-x-2 text-indigo-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
                                                    viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M12 4v16m8-8H4" />
                                                </svg>
                                                <span>Upload a file</span>
                                            </label>
                                            <input id="file-upload" type="file" class="hidden" accept="image/*"
                                                @change="fileChange" />
                                        </div>
                                        <div class="flex items-center">
                                            <span v-if="coursePhoto" class="text-gray-700">{{ coursePhoto }}</span>
                                        </div>
                                    </div>
                                    <div v-if="coursePhoto" class="mt-4 border border-gray-300 p-2 rounded-md">
                                        <img :src="fileUrl" alt="Uploaded File" class="max-w-xs rounded " />
                                    </div>
                                    <div v-else class="border border-gray-300 p-2 rounded-md">
                                        <div class="text-gray-700 text-center">No image selected</div>
                                    </div>
                                </div> -->
                                <div class="flex items-center justify-between">
                                    <router-link class="text-sm underline hover:no-underline" to="/courses/create/2">&lt;-
                                        Back</router-link>
                                    <router-link class="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-auto"
                                        to="/courses/create/4">Next Step -&gt;</router-link>
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
                                <router-link class="btn bg-indigo-500 hover:bg-indigo-600 text-white" to="/">Go To Dashboard
                                    -&gt;</router-link>
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
import { onActivated, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router'
import StepOne from '@/components/Courses/OnboardingCreateCourse/StepOne.vue';
import StepTwo from '@/components/Courses/OnboardingCreateCourse/StepTwo.vue';
import StepThree from '@/components/Courses/OnboardingCreateCourse/StepThree.vue';
import StepFour from '@/components/Courses/OnboardingCreateCourse/StepFour.vue';


export default {
    components: { StepOne, StepTwo, StepThree, StepFour },
    setup() {
        const route = useRoute()
        const step = ref(null)
        const courseName = ref(null)
        const categoryId = ref(null)
        const coursePhoto = ref(null);

        const categories = ref([
            { id: 1, name: 'Category 1' },
            { id: 2, name: 'Category 2' },
            // Agrega más categorías según sea necesario
        ])

        const fileUrl = ref(null);
        const fileInputRef = ref(null);

        const fileChange = (e) => {

            const file = e.target.files[0]; // Obtener el primer archivo seleccionado

            if (file) {
                // Actualizar los ref values
                fileInputRef.value = file;
                fileUrl.value = URL.createObjectURL(file);
                coursePhoto.value = file.name;
            } else {
                // Manejar el caso en el que no se selecciona ningún archivo
                console.error("No se seleccionó ningún archivo.");
            }

        }

        watch(() => {
            console.log(route.params);
            step.value = route.params.step
        })
        return {
            step,
            courseName,
            categoryId,
            categories,
            fileInputRef,
            fileUrl,
            fileChange,
            coursePhoto,
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