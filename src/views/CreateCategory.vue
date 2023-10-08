<template>
    <div class="sm:px-6 lg:px-32 py-8 lg:grow  xl:pr-16 2xl:ml-[80px] ">
        <div class="lg:relative lg:flex xl:pr-28">
            <!-- Content -->
            <div class=" px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                <!-- Page header -->
                <div class="sm:flex sm:justify-between sm:items-center mb-5">
                    <!-- Left: Title -->
                    <div class="mb-4 sm:mb-0">
                        <h1 class="text-2xl md:text-3xl text-slate-800 font-bold">Categories ✨</h1>
                    </div>
                    <!-- Add card button -->
                    <button class="btn bg-indigo-500 hover:bg-indigo-600 text-white" @click="ModalIsOpen = true"
                        @touchend="ModalIsOpen = true">
                        <svg class="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                            <path
                                d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                        </svg>
                        <span class="hidden xs:block ml-2">Add
                            Category</span>
                    </button>
                </div>

                <!-- Filters -->
                <div class="mb-5">
                    <ul class="flex flex-wrap -m-1">
                        <li class="m-1">
                            <button
                                class="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-indigo-500 text-white duration-150 ease-in-out">View
                                All</button>
                        </li>
                        <li class="m-1">
                            <button
                                class="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 hover:border-slate-300 shadow-sm bg-white text-slate-500 duration-150 ease-in-out">Physical
                                Cards</button>
                        </li>
                        <li class="m-1">
                            <button
                                class="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 hover:border-slate-300 shadow-sm bg-white text-slate-500 duration-150 ease-in-out">Virtual
                                Cards</button>
                        </li>
                    </ul>
                </div>

                <!-- Credit cards -->
                <div class="space-y-2">
                    <!-- Card 1 -->
                    <label class="relative block cursor-pointer text-left w-full" v-for="(category, i) in categoriesObject"
                        :key="i" @click="categoryInformation = category">
                        <input type="radio" name="radio-buttons" class="peer sr-only" checked />
                        <div
                            class="p-4 rounded border border-slate-200 hover:border-slate-300 shadow-sm duration-150 ease-in-out">
                            <div class="grid grid-cols-12 items-center ">
                                <!-- Card -->
                                <div
                                    class="col-span-6 order-1 sm:order-none sm:col-span-3 flex items-center space-x-4 lg:sidebar-expanded:col-span-6 xl:sidebar-expanded:col-span-3">
                                    <img class="h-[24px] w-[32px]" :src="`${IMAGE_PATH}${category.categoryPhoto}`" alt="">
                                    <div>
                                        <div class="text-sm font-medium text-slate-800">{{ category.categoryName }}</div>

                                    </div>
                                </div>
                                <!-- Name -->
                                <div
                                    class="col-span-6 order-2 sm:order-none sm:col-span-3 text-left sm:text-center lg:sidebar-expanded:hidden xl:sidebar-expanded:block">
                                    <div class="text-sm font-medium text-slate-800 truncate">Dominik Lamakani
                                    </div>
                                </div>
                                <!-- Card limits -->
                                <div
                                    class="col-span-6 order-1 sm:order-none sm:col-span-4 text-right sm:text-center lg:sidebar-expanded:col-span-6 xl:sidebar-expanded:col-span-4">
                                    <div class="text-sm">$780,00 / $20,000</div>
                                </div>
                                <!-- Card status -->
                                <div
                                    class="col-span-6 order-2 sm:order-none sm:col-span-2 text-right lg:sidebar-expanded:hidden xl:sidebar-expanded:block">
                                    <div
                                        class="text-xs inline-flex font-medium bg-emerald-100 text-emerald-600 rounded-full text-center px-2.5 py-1">
                                        Active</div>
                                </div>
                            </div>
                        </div>
                        <div class="absolute inset-0 border-2 border-transparent peer-checked:border-indigo-400 rounded pointer-events-none"
                            aria-hidden="true"></div>
                    </label>
                </div>
            </div>
            <!-- Sidebar -->
            <CategoryInfo :categoryinfor="categoryInformation" @modifiedUser="preparingToEdit" />

        </div>
    </div>

    <Modal :show="ModalIsOpen" @close="ModalIsOpen = false" modal-title="Proveedores" maxWidth="3xl">

        <div class="pb-3 border-b border-slate-200">
            <div class="flex justify-between items-center">
                <div class="font-semibold text-slate-800">Create category</div>
                <button class="text-slate-400 hover:text-slate-500">
                    <div class="sr-only">Close</div>
                    <svg class="w-4 h-4 fill-current" @click.stop="ModalIsOpen = false">
                        <path
                            d="M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z">
                        </path>
                    </svg>
                </button>
            </div>
        </div>

        <div class="flex flex-col lg:flex-row">
            <!-- Lado Izquierdo (Imagen) -->
            <div class="flex-shrink-0 pr-2 w-full lg:w-1/2 flex justify-center items-center">
                <div class="text-center">
                    <div class="image-container">
                        <img v-if="url" :src="url" alt="Imagen" class="w-full object-cover rounded" />
                        <img v-else :src="emptyImage" alt="Imagen" class="h-48 object-cover rounded" />
                    </div>
                </div>
            </div>

            <!-- Lado Derecho (Inputs) -->
            <div class="flex-grow p-3 w-full lg:w-1/2">
                <!-- Aquí colocas tus inputs -->
                <div class="pb-4">
                    <label class="block text-sm font-medium mb-1" for="name">Categorie's name <span
                            class="text-rose-500">*</span></label>
                    <input v-model="categoryName"
                        class="border w-full h-5 px-3 py-3 mt-2 hover:outline-none border-indigo-500 focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
                        type="text" required />
                </div>
                <!-- component -->
                <label for="dropzone-file"
                    class="mx-auto cursor-pointer flex w-full max-w-lg flex-col items-center rounded-xl border-2 border-dashed border-blue-400 bg-white p-6 text-center">
                    <svg class="h-7 w-7" viewBox="0 0 20 20" fill="none">
                        <path fill="#006eff" fill-rule="evenodd"
                            d="M9 12a1 1 0 102 0V4.26l3.827 3.48a1 1 0 001.346-1.48l-5.5-5a1 1 0 00-1.346 0l-5.5 5a1 1 0 101.346 1.48L9 4.26V12zm-5.895-.796A1 1 0 001.5 12v3.867a2.018 2.018 0 002.227 2.002c1.424-.147 3.96-.369 6.273-.369 2.386 0 5.248.236 6.795.383a2.013 2.013 0 002.205-2V12a1 1 0 10-2 0v3.884l-13.895-4.68zm0 0L2.5 11l.605.204zm0 0l13.892 4.683a.019.019 0 01-.007.005h-.006c-1.558-.148-4.499-.392-6.984-.392-2.416 0-5.034.23-6.478.38h-.009a.026.026 0 01-.013-.011V12a.998.998 0 00-.394-.796z">
                        </path>
                    </svg>
                    <h2 class="mt-4 text-xl font-medium text-gray-700 tracking-wide">Image File</h2>
                    <p class="mt-2 text-gray-500 tracking-wide">Upload your file SVG, PNG, JPG or GIF.</p>
                    <input id="dropzone-file" @change="fileChange" type="file" class="hidden"
                        accept="image/gif,image/jpeg,image/png,image/jpg,image" />
                </label>
                <button @click="modifiedCategory" v-if="categoryId"
                    class="bg-orange-700 rounded-lg shadow text-center text-white text-base font-semibold w-full py-2 mt-4">Modified
                    category</button>
                <button @click="createCategory" v-else
                    class="bg-indigo-900 rounded-lg shadow text-center text-white text-base font-semibold w-full py-2 mt-4">Create
                    category</button>

            </div>
        </div>
    </Modal>
</template>

<script>
import Modal from '@/components/Elements/Modal.vue';
import useCategory from '@/composables/Category.vue/useCategory';
import CategoryInfo from '@/components/Categories/CategoryInfo.vue';

export default {
    name: 'CreateCategory',
    components: {
        Modal,
        CategoryInfo
    },
    setup() {
        const {
            img,
            url,
            urlEdit,
            categoryId,
            IMAGE_PATH,
            emptyImage,
            fileChange,
            ModalIsOpen,
            categoryName,
            categoryPhoto,
            createCategory,
            preparingToEdit,
            categoriesObject,
            modifiedCategory,
            categoryInformation,
        } = useCategory();

        return {
            img,
            url,
            urlEdit,
            categoryId,
            IMAGE_PATH,
            fileChange,
            emptyImage,
            ModalIsOpen,
            categoryName,
            categoryPhoto,
            createCategory,
            preparingToEdit,
            categoriesObject,
            modifiedCategory,
            categoryInformation,
        };
    },
}
</script>
