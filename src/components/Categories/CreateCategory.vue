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
                    <label class="relative block cursor-pointer text-left w-full" v-for="category in categoriesObject"
                        :key="category.categoryId">
                        <input type="radio" name="radio-buttons" class="peer sr-only" checked />
                        <div
                            class="p-4 rounded border border-slate-200 hover:border-slate-300 shadow-sm duration-150 ease-in-out">
                            <div class="grid grid-cols-12 items-center ">
                                <!-- Card -->
                                <div
                                    class="col-span-6 order-1 sm:order-none sm:col-span-3 flex items-center space-x-4 lg:sidebar-expanded:col-span-6 xl:sidebar-expanded:col-span-3">

                                    <div>
                                        <div class="text-sm font-medium text-slate-800">{{ category.categoryName }}</div>
                                        <div class="text-xs">**7328</div>
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
            <div>
                <div
                    class="lg:sticky lg:top-16 bg-slate-50 lg:overflow-x-hidden lg:overflow-y-auto no-scrollbar lg:shrink-0 border-t lg:border-t-0 lg:border-l border-slate-200 lg:w-[390px] lg:h-[calc(100vh-64px)]">
                    <div class="py-8 px-4 lg:px-8">
                        <div class="max-w-sm mx-auto lg:max-w-none">

                            <div class="text-slate-800 font-semibold text-center mb-6">Caterogy summary</div>

                            <!-- Credit Card -->
                            <div
                                class="relative aspect-[7/4] bg-gradient-to-tr from-slate-600 to-slate-800 p-5 rounded-xl shadow-lg overflow-hidden">
                                <!-- Illustration on card -->
                                <img src="" alt="">
                            </div>

                            <!-- Details -->
                            <div class="mt-6">
                                <div class="text-sm font-semibold text-slate-800 mb-1">Details</div>
                                <ul>
                                    <li class="flex items-center justify-between py-3 border-b border-slate-200">
                                        <div class="text-sm">Category Name</div>
                                        <div class="text-sm font-medium text-slate-800 ml-2">Introduccion a la programacion
                                        </div>
                                    </li>
                                    <li class="flex items-center justify-between py-3 border-b border-slate-200">
                                        <div class="text-sm">Status</div>
                                        <div class="flex items-center whitespace-nowrap">
                                            <div class="w-2 h-2 rounded-full bg-emerald-500 mr-2"></div>
                                            <div class="text-sm font-medium text-slate-800">Active</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <!-- Payment Limits -->
                            <div class="mt-6">
                                <div class="text-sm font-semibold text-slate-800 mb-4">Payment Limits</div>
                                <div class="pb-4 border-b border-slate-200">
                                    <div class="flex justify-between text-sm mb-2">
                                        <div>Spent This Month</div>
                                        <div class="italic">$750,00 <span class="text-slate-400">/</span>
                                            $1,500.00
                                        </div>
                                    </div>
                                    <div class="relative w-full h-2 bg-slate-300">
                                        <div class="absolute inset-0 bg-emerald-500" aria-hidden="true" style="width: 50%;">
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <!-- Edit / Delete -->
                            <div class="flex items-center space-x-3 mt-6">
                                <div class="w-1/2">
                                    <button class="btn w-full border-slate-200 hover:border-slate-300 text-slate-600">
                                        <svg class="w-4 h-4 fill-current text-slate-500 shrink-0" viewBox="0 0 16 16">
                                            <path
                                                d="M11.7.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM4.6 14H2v-2.6l6-6L10.6 8l-6 6zM12 6.6L9.4 4 11 2.4 13.6 5 12 6.6z" />
                                        </svg>
                                        <span class="ml-2">Edit Card</span>
                                    </button>
                                </div>
                                <div class="w-1/2">
                                    <button class="btn w-full border-slate-200 hover:border-slate-300 text-rose-500">
                                        <svg class="w-4 h-4 fill-current shrink-0" viewBox="0 0 16 16">
                                            <path
                                                d="M14.574 5.67a13.292 13.292 0 0 1 1.298 1.842 1 1 0 0 1 0 .98C15.743 8.716 12.706 14 8 14a6.391 6.391 0 0 1-1.557-.2l1.815-1.815C10.97 11.82 13.06 9.13 13.82 8c-.163-.243-.39-.56-.669-.907l1.424-1.424ZM.294 15.706a.999.999 0 0 1-.002-1.413l2.53-2.529C1.171 10.291.197 8.615.127 8.49a.998.998 0 0 1-.002-.975C.251 7.29 3.246 2 8 2c1.331 0 2.515.431 3.548 1.038L14.293.293a.999.999 0 1 1 1.414 1.414l-14 14a.997.997 0 0 1-1.414 0ZM2.18 8a12.603 12.603 0 0 0 2.06 2.347l1.833-1.834A1.925 1.925 0 0 1 6 8a2 2 0 0 1 2-2c.178 0 .348.03.512.074l1.566-1.566C9.438 4.201 8.742 4 8 4 5.146 4 2.958 6.835 2.181 8Z" />
                                        </svg>
                                        <span class="ml-2">Block Card</span>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
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
            <div class="flex-shrink-0 pr-2 w-full lg:w-1/2  flex justify-center items-center">
                <div class="text-center">
                    <img v-if="url" :src="url" alt="Imagen" class="w-full object-cover rounded">
                    <img v-else src="../../static/image/svg/Shrug-bro.svg" alt="Imagen" class="h-48 object-cover rounded">
                    <h1 v-if="!url" class="text-sm">Parece que aún no hay una imagen seleccionada</h1>

                </div>
            </div>



            <!-- Lado Derecho (Inputs) -->
            <div class="flex-grow p-3 w-full lg:w-1/2">
                <!-- Aquí colocas tus inputs -->
                <div class="pb-4">
                    <label class="block text-sm font-medium mb-1" for="name">Categorie's name <span
                            class="text-rose-500">*</span></label>
                    <input v-model="categoryName"
                        class="border w-full h-5 px-3 py-3 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
                        type="text" required />
                </div> <!-- component -->

                <label for="dropzone-file"
                    class="mx-auto cursor-pointer flex w-full max-w-lg flex-col items-center rounded-xl border-2 border-dashed border-blue-400 bg-white p-6 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>

                    <h2 class="mt-4 text-xl font-medium text-gray-700 tracking-wide">Payment File</h2>

                    <p class="mt-2 text-gray-500 tracking-wide">Upload or darg & drop your file SVG, PNG, JPG or GIF.
                    </p>

                    <input id="dropzone-file" @change="fileChange" type="file" class="hidden"
                        accept="image/gif,image/jpeg,image/png,image/jpg,image" />
                </label>
                <button @click="setImgToBack"
                    class="bg-indigo-900 rounded-lg shadow text-center text-white text-base font-semibold w-full py-2 mt-4">Create
                    category</button>
            </div>
        </div>
    </Modal>
</template>
  
<script>
import { onMounted, ref } from 'vue'
import Modal from '../Elements/Modal.vue'
import ModalBlankVue from '../Elements/ModalBlank.vue'
import { API_URL } from '@/config/config'
import axios from 'axios'
import Swal from 'sweetalert2';
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import requestHelper from '@/composables/Helpers/requestHelpers'
export default {
    name: 'CreditCards',
    components: {
        Modal,
        ModalBlankVue,
    },
    setup() {
        const sidebarOpen = ref(false)
        const ModalIsOpen = ref(false)
        const categoryName = ref(null)
        const img = ref(null)
        const url = ref(null)
        const fileName = ref(null)
        const categoriesObject = ref([])
        const fileChange = (e) => {

            const file = e.target.files[0]; // Obtener el primer archivo seleccionado

            if (file) {
                // Actualizar los ref values
                img.value = file;
                url.value = URL.createObjectURL(file);
                fileName.value = file.name;
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
                    formData.append("categoryPhoto", fileName.value);


                    const resp = await axios.post(`${API_URL}/categories`, formData, {
                        headers: {
                            "Content-Type": "multipart/form-data", //sin esto no se puede envari la iamgen
                        }
                    })
                    setTimeout(() => {
                        ModalIsOpen = false
                        categoryName.value = ''
                        fileName.value = ''
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
        const getCategories = async () => {
            const resp = await axios.get(`${API_URL}/categories/findAllCategories/`)
            categoriesObject.value = resp.data; // Asigna resp.data a categoriesObject
            console.log(resp.data);
        }
        const setImgToBack = async () => {

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


        onMounted(() => {
            getCategories()
        })
        return {
            sidebarOpen,
            ModalIsOpen,
            categoryName,
            fileName,
            img,
            url,
            fileChange,
            setImgToBack,
            createCategoryRequest,
            categoriesObject,
        }
    },
}
</script>