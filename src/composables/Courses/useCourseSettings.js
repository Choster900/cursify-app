// En un archivo llamado useCourseSettings.js
import { ref, onMounted, onActivated, onDeactivated } from "vue";
import axios from "axios";
import { API_URL } from "@/config/config";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

export const useCourseSettings = (courseId) => {
    const activeMenu = ref("general");
    const courseDetails = ref(null);
    const store = useStore()
    const router = useRouter()
    const route = useRoute(); // Obtener la ruta actual
    const user = store.state.user;
    const authIsReady = store.state.authIsReady;

    const getCourseWithDetails = async () => {
        try {
            const courseId = route.params.courseId; // Obtener el courseId de la ruta
            const resp = await axios.get(
                `${API_URL}/courses/findCourseByIdWithDetails/${courseId}`
            );
            courseDetails.value = resp.data; // Guardar los detalles del curso
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

    onDeactivated(() => {
        activeMenu.value = "general";
        courseDetails.value = null;
    });
    onActivated(async () => {
        if (authIsReady) {
            try {
                await getCourseWithDetails();
                if (user.userId != courseDetails.value.user.userId) {
                    console.log("NO ES TU CURSO BODY");
                    router.push(`/404`);
                }
            } catch (error) {
                handleError(error);
            }
        } else {
            console.log("NO ES TU CURSO BODY");
            router.push(`/404`);
        }
    });

    onMounted(async () => {
        try {
            await getCourseWithDetails();
        } catch (error) {
            handleError(error);
        }
    });
    return {
        activeMenu,
        getCourseWithDetails,
        courseDetails,
    };
};
