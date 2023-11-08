import axios from "axios";
import { computed, ref } from "vue";
import { API_URL } from "@/config/config";
import { useStore } from "vuex";
import { useRoute, useRouter } from 'vue-router';
import Swal from "sweetalert2";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
export const useCourse = () => {
    const store = useStore()
    const courseName = ref(null);
    const categoryId = ref(null);
    const courseFile = ref(null);
    const coursePhoto = ref(null);
    const courseId = ref(null);
    const courseDescription = ref(null);
    const user = store.state.user;
    const router = useRouter()
    const route = useRoute(); // Obtener la ruta actual
    const courseByUserCreatorIdArray = ref([]);
    const courseEnrolledIndArray = ref([]);
    const courseByCategoryIdArray = ref([]);
    const RandomCoursesArray = ref([]);
    const MainCoursesArray = ref([]);
    const allCourses = ref(null);
    const isLoading = ref(false);
    const createCourseRequest = () => {
        return new Promise(async (resolve, reject) => {
            try {
                console.log(user);
                const formData = new FormData();
                formData.append("categoryId", categoryId.value);
                formData.append("file", courseFile.value);
                formData.append("courseDescription", courseDescription.value);
                formData.append("courseName", courseName.value);
                formData.append("coursePhoto", coursePhoto.value);
                formData.append("userId", user.userId);

                const resp = await axios.post(`${API_URL}/courses`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });

                console.log(resp);
                resolve(resp);
                router.push(`/courses/configuration/${resp.data.courseId}`);
            } catch (error) {
                console.error(error);
                reject(error);
            }
        });
    };
    const updateCourseRequest = () => {
        return new Promise(async (resolve, reject) => {
            try {
                const formData = new FormData();
                formData.append("categoryId", categoryId.value);
                formData.append("file", courseFile.value);
                formData.append("courseDescription", courseDescription.value);
                formData.append("courseName", courseName.value);
                formData.append("coursePhoto", coursePhoto.value);
                formData.append("userId", user.userId);

                const resp = await axios.put(`${API_URL}/courses/${courseId.value}`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });

                console.log(resp);
                resolve(resp);
            } catch (error) {
                console.error(error);
                reject(error);
            }
        });
    };

    const updateQuestionCourse = async () => {
        const confirm = await Swal.fire({
            title:
                '<p class="text-[20pt] text-center">¿Esta seguro de actualizar los datos?</p>',
            icon: 'question',
            iconHtml: `❓`,
            confirmButtonText: "Si, Actualizar",
            confirmButtonColor: "#4b0082",
            cancelButtonText: "Cancelar",
            reverseButtons: true,
            showCancelButton: true,
            showCloseButton: true,
            hideClass: {
                popup: "animate__animated animate__fadeOutUp",
            },
        });

        if (confirm.isConfirmed) {
            toast.promise(updateCourseRequest(), {
                pending: "Por favor espere un momento, Su peticion esta siendo procesada",
                success: "El cursoo fue modificado correctamente ",
                error:
                    "La solicitud es incorrecta. Por favor, verifica los datos enviados.",
            });
        }
    };

    const getCourseByUserCreatorId = async () => {
        try {
            const resp = await axios.get(`${API_URL}/courses/findCourseByUserCreatorWithDetails/${user.userId}`);
            courseByUserCreatorIdArray.value = resp.data;
        } catch (error) {
            handleError(error);
        }
    };

    const getCoursesEnrolled = async () => {
        try {
            const resp = await axios.get(`${API_URL}/courses/findEnrolledCoursesWithDetails/${user.userId}`);
            courseEnrolledIndArray.value = resp.data;
        } catch (error) {
            handleError(error);
        }
    };
    const getCourseByCategory = async () => {
        try {
            isLoading.value = true;
            const categoryId = route.params.categoryId; // Obtener el courseId de la ruta
            const resp = await axios.get(`${API_URL}/courses/finByCategory/${categoryId}`);
            console.log(resp);
            courseByCategoryIdArray.value = resp.data;
            isLoading.value = false;
        } catch (error) {
            handleError(error);
        }
    };
    const getRandomCourses = async () => {
        try {
            const resp = await axios.get(`${API_URL}/courses/randomCourses`);
            console.log(resp);
            RandomCoursesArray.value = resp.data;
        } catch (error) {
            handleError(error);
        }
    };
    const getTwoMainCourses = async () => {
        try {
            const resp = await axios.get(`${API_URL}/courses/trendingTwoCourses`);
            console.log(resp);
            MainCoursesArray.value = resp.data;
        } catch (error) {
            handleError(error);
        }
    };
    const getAllCourses = async () => {
        try {
            const resp = await axios.get(`${API_URL}/courses`);
            allCourses.value = resp.data;
        } catch (error) {
            handleError(error);
        }
    };
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

    return {
        courseName,
        categoryId,
        courseId,
        courseFile,
        coursePhoto,
        courseDescription,
        createCourseRequest,
        updateCourseRequest,
        updateQuestionCourse,
        getCourseByUserCreatorId,
        getAllCourses,
        allCourses,
        courseByUserCreatorIdArray,//Variable que devuelve los creador por usuarioId
        getCourseByCategory,
        courseByCategoryIdArray,
        isLoading,
        getRandomCourses,
        RandomCoursesArray,
        getTwoMainCourses,
        MainCoursesArray,
        getCoursesEnrolled,
        courseEnrolledIndArray,
    };
};
