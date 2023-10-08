import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { ref, onMounted, watch } from "vue";
import { API_URL, IMAGE_PATH } from "@/config/config";
import emptyImage from "../../static/image/svg/Shrug-bro.svg";

export default function useCategory() {
    const img = ref(null);
    const url = ref(null);
    const urlEdit = ref(null);
    const categoryId = ref(null);
    const ModalIsOpen = ref(false);
    const categoryName = ref(null);
    const categoryPhoto = ref(null);
    const categoriesObject = ref([]);
    const categoryInformation = ref(null);
    /**
     *
     * @param {Object} e Get the picture information
     */
    const fileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            img.value = file;
            url.value = URL.createObjectURL(file);
            categoryPhoto.value = file.name;
        } else {
            console.error("No se seleccionó ningún archivo.");
        }
    };
    /**
     * Send the information to add a new category
     */
    const createCategoryRequest = async () => {
        try {
            const formData = new FormData();
            formData.append("file", img.value);
            formData.append("categoryName", categoryName.value);
            formData.append("categoryPhoto", categoryPhoto.value);

            const resp = await axios.post(`${API_URL}/categories`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            await getCategories();
            clearDataInForm();
            return resp;
        } catch (error) {
            handleError(error);
            throw error;
        }
    };
    /**
     * Send a request to the server to update a category
     */
    const modifiedCategoryRequest = async () => {
        try {
            const formData = new FormData();
            formData.append("file", img.value);
            formData.append("categoryName", categoryName.value);
            formData.append("categoryPhoto", categoryPhoto.value);

            const resp = await axios.put(
                `${API_URL}/categories/${categoryId.value}`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            await getCategories();
            clearDataInForm();
            return resp;
        } catch (error) {
            handleError(error);
            throw error;
        }
    };
    /**
     * Get a list of categories
     */
    const getCategories = async () => {
        try {
            const resp = await axios.get(`${API_URL}/categories/findAllCategories/`);
            categoriesObject.value = resp.data;
        } catch (error) {
            handleError(error);
        }
    };
    /**
     * Create a new category
     */
    const createCategory = async () => {
        const confirm = await Swal.fire({
            title:
                '<p class="text-[20pt] text-center">¿Esta seguro de agregar los datos?</p>',
            icon: "question",
            confirmButtonText: "Si, Enviar",
            confirmButtonColor: "#001b47",
            cancelButtonText: "Cancelar",
            reverseButtons: true,
            showCancelButton: true,
            showCloseButton: true,
            hideClass: {
                popup: "animate__animated animate__fadeOutUp",
            },
        });

        if (confirm.isConfirmed) {
            toast.promise(createCategoryRequest(), {
                pending: "Cargando petición",
                success: "La categoria fue guardado correctamente ",
                error:
                    "La solicitud es incorrecta. Por favor, verifica los datos enviados.",
            });
        }
    };
    /**
     * Update the category
     */
    const modifiedCategory = async () => {
        const confirm = await Swal.fire({
            title:
                '<p class="text-[20pt] text-center">¿Esta seguro de editar los datos?</p>',
            icon: "question",
            confirmButtonText: "Si, Enviar",
            confirmButtonColor: "#001b47",
            cancelButtonText: "Cancelar",
            reverseButtons: true,
            showCancelButton: true,
            showCloseButton: true,
            hideClass: {
                popup: "animate__animated animate__fadeOutUp",
            },
        });

        if (confirm.isConfirmed) {
            toast.promise(modifiedCategoryRequest(), {
                pending: "Cargando petición",
                success: "La categoria fue guardado correctamente ",
                error:
                    "La solicitud es incorrecta. Por favor, verifica los datos enviados.",
            });
            categoryInformation.value = categoriesObject.value[0];
        }
    };
    /**
     * Cler data
     */
    const clearDataInForm = () => {
        categoryId.value = null;
        categoryName.value = null;
        categoryPhoto.value = null;
        img.value = "";
        url.value = "";
        urlEdit.value = "";
    };
    /**
     *
     * @param {Object} e Get the whole information of the category
     */
    const preparingToEdit = (e) => {
        categoryId.value = e.categoryId;
        categoryName.value = e.categoryName;

        const partes = e.categoryPhoto.split("/");
        urlEdit.value = e.categoryPhoto;

        categoryPhoto.value = partes[partes.length - 1];

        url.value = `${IMAGE_PATH}${urlEdit.value}`;
        ModalIsOpen.value = true;
    };
    /**
     *
     * @param {Object} error Get the error message from the error object
     */
    const handleError = (error) => {
        console.error(error);
        if (
            error.response &&
            (error.response.status === 404 || error.response.status == 400)
        ) {
            console.log(error.response.status);
            // Puedes mostrar un mensaje al usuario o redirigirlo a una página específica
        }
    };

    onMounted(async () => {
        try {
            await getCategories();
            categoryInformation.value = categoriesObject.value[0];
        } catch (error) {
            handleError(error);
        }
    });

    watch(ModalIsOpen, (newValue, oldValue) => {
        if (!newValue) {
            setTimeout(() => {
                clearDataInForm();
            }, 700);
        }
    });

    onMounted(async () => {
        try {
            await getCategories();
            categoryInformation.value = categoriesObject.value[0];
        } catch (error) {
            handleError(error);
        }
    });

    watch(ModalIsOpen, (newValue, oldValue) => {
        if (!newValue) {
            setTimeout(() => {
                clearDataInForm();
            }, 700);
        }
    });

    return {
        img,
        url,
        urlEdit,
        emptyImage,
        categoryId,
        IMAGE_PATH,
        fileChange,
        ModalIsOpen,
        categoryName,
        categoryPhoto,
        createCategory,
        preparingToEdit,
        categoriesObject,
        modifiedCategory,
        categoryInformation,
    };
}
