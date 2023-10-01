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
                    <template v-if="!categoryId">
                        <img src="../../static/image/svg/Shrug-bro.svg" alt="Imagen" class="h-48 object-cover rounded" />
                        <h1 class="text-sm">
                            Parece que aún no hay una imagen seleccionada
                        </h1>
                    </template>
                    <template v-else>
                        <img :src="url || `${IMAGE_PATH}${urlEdit}`" alt="Imagen" class="w-full object-cover rounded" />
                    </template>
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
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <h2 class="mt-4 text-xl font-medium text-gray-700 tracking-wide">Payment File</h2>
                    <p class="mt-2 text-gray-500 tracking-wide">Upload or darg & drop your file SVG, PNG, JPG or GIF.</p>
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
import { onMounted, ref, watch } from 'vue'
import Modal from '../Elements/Modal.vue'
import ModalBlankVue from '../Elements/ModalBlank.vue'
import { API_URL, IMAGE_PATH } from '@/config/config'
import axios from 'axios'
import Swal from 'sweetalert2';
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import requestHelper from '@/composables/Helpers/requestHelpers'
import CategoryInfo from './CategoryInfo.vue'
export default {
    name: 'Create Category',
    components: {
        Modal,
        ModalBlankVue,
        CategoryInfo
    },
    setup() {
        const ModalIsOpen = ref(false)
        const categoryId = ref(null)
        const categoryName = ref(null)
        const categoryPhoto = ref(null)
        const img = ref(null)
        const url = ref(null)
        const urlEdit = ref(null)
        const categoriesObject = ref([])
        const categoryInformation = ref(null)
        const fileChange = (e) => {

            const file = e.target.files[0]; // Obtener el primer archivo seleccionado

            if (file) {
                // Actualizar los ref values
                img.value = file;
                url.value = URL.createObjectURL(file);
                categoryPhoto.value = file.name;
            } else {
                // Manejar el caso en el que no se selecciona ningún archivo
                console.error("No se seleccionó ningún archivo.");
            }

        }

        const createCategoryRequest = () => {
            return new Promise(async (resolve, reject) => {
                try {
                    const formData = new FormData();
                    formData.append("file", img.value);
                    formData.append("categoryName", categoryName.value);
                    formData.append("categoryPhoto", categoryPhoto.value);


                    const resp = await axios.post(`${API_URL}/categories`, formData, {
                        headers: {
                            "Content-Type": "multipart/form-data", //sin esto no se puede envari la iamgen
                        }
                    })
                    setTimeout(() => {
                        ModalIsOpen.value = false
                        categoryName.value = ''
                        categoryPhoto.value = ''
                        img.value = ''
                        url.value = ''
                        resolve(resp); // Resolvemos la promesa con la respuesta exitosa después de 3 segundos
                        getCategories()
                    }, 1000);
                } catch (error) {
                    if (error.response && error.response.status === 404 || error.response.status == 400) {
                        // Aquí manejas el error 404
                        console.log(error.response.status);
                        // Puedes mostrar un mensaje al usuario o redirigirlo a una página específica
                    } else {
                        console.error(error);
                    }

                    setTimeout(() => {
                        reject(error);
                    }, 1000);

                }
            });
        }

        const modifiedCategoryRequest = () => {
            return new Promise(async (resolve, reject) => {
                try {
                    const formData = new FormData();
                    //formData.append("id", categoryId.value);
                    formData.append("file", img.value);
                    formData.append("categoryName", categoryName.value);
                    formData.append("categoryPhoto", categoryPhoto.value);


                    const resp = await axios.put(`${API_URL}/categories/${categoryId.value}`, formData, {
                        headers: {
                            "Content-Type": "multipart/form-data", //sin esto no se puede envari la iamgen
                        }
                    })
                    setTimeout(() => {
                        ModalIsOpen.value = false
                        categoryName.value = ''
                        categoryPhoto.value = ''
                        img.value = ''
                        url.value = ''
                        resolve(resp); // Resolvemos la promesa con la respuesta exitosa después de 3 segundos
                        getCategories()
                    }, 1000);
                } catch (error) {
                    console.log(error);
                    if (error.response && error.response.status === 404 || error.response.status == 400) {
                        // Aquí manejas el error 404
                        console.log(error.response.status);
                        // Puedes mostrar un mensaje al usuario o redirigirlo a una página específica
                    } else {
                        console.error(error);
                    }

                    setTimeout(() => {
                        reject(error);
                    }, 1000);

                }
            });
        }


        const getCategories = async () => {
            try {
                const resp = await axios.get(`${API_URL}/categories/findAllCategories/`);
                categoriesObject.value = resp.data;
            } catch (error) {
                console.error(error);
            }
        };
        const createCategory = async () => {

            Swal.fire({
                title: '<p class="text-[20pt] text-center">¿Esta seguro de agregar los datos?</p>',
                icon: 'question',
                confirmButtonText: 'Si, Enviar',
                confirmButtonColor: '#001b47',
                cancelButtonText: 'Cancelar',
                reverseButtons: true,
                showCancelButton: true,
                showCloseButton: true,
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const resolveAfter3Sec = createCategoryRequest()
                    toast.promise(
                        resolveAfter3Sec,
                        {
                            pending: 'Cargando petición',
                            success: 'La categoria fue guardado correctamente ',
                            error: 'La solicitud es incorrecta. Por favor, verifica los datos enviados.',
                        },
                    );
                }
            })
        }
        const modifiedCategory = async () => {

            Swal.fire({
                title: '<p class="text-[20pt] text-center">¿Esta seguro de editar los datos?</p>',
                icon: 'question',
                confirmButtonText: 'Si, Enviar',
                confirmButtonColor: '#001b47',
                cancelButtonText: 'Cancelar',
                reverseButtons: true,
                showCancelButton: true,
                showCloseButton: true,
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const resolveAfter3Sec = modifiedCategoryRequest()
                    toast.promise(
                        resolveAfter3Sec,
                        {
                            pending: 'Cargando petición',
                            success: 'La categoria fue guardado correctamente ',
                            error: 'La solicitud es incorrecta. Por favor, verifica los datos enviados.',
                        },
                    );
                    categoryInformation.value = categoriesObject.value[0];
                }
            })
        }
        const clearDataInForm = () => {

            categoryId.value = null;
            categoryName.value = null;
            categoryPhoto.value = null;
            img.value = ''
            url.value = ''
            urlEdit.value = ''
        }
        const preparingToEdit = (e) => {
            console.log(e);
            categoryId.value = e.categoryId
            categoryName.value = e.categoryName

            const partes = e.categoryPhoto.split('/');
            urlEdit.value = e.categoryPhoto

            categoryPhoto.value = partes[partes.length - 1];


            ModalIsOpen.value = true
        }

        onMounted(async () => {
            try {
                await getCategories(); // Suponiendo que getCategories() es una función asincrónica que obtiene las categorías
                categoryInformation.value = categoriesObject.value[0];
            } catch (error) {
            }
        });
        watch(ModalIsOpen, (newValue, oldValue) => {
            // Esta función se ejecutará cada vez que someData cambie
            if (!newValue) {
                setTimeout(() => {
                    clearDataInForm()
                }, 700);
            }
        });
        return {
            ModalIsOpen,
            categoryName,
            categoryPhoto,
            categoryId,
            img,
            IMAGE_PATH,
            url,
            urlEdit,
            fileChange,
            categoryInformation,
            createCategory,
            createCategoryRequest,
            categoriesObject,
            preparingToEdit,
            modifiedCategory,
        }
    },
}
</script>