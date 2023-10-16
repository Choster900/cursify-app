import axios from "axios";
import { computed, ref } from "vue";
import { API_URL } from "@/config/config";
import { useStore } from "vuex";
import { useRouter } from 'vue-router';
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
    const courseByUserCreatorIdArray = ref([]);
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
        courseByUserCreatorIdArray//Variable que devuelve los creador por usuarioId
    };
};
