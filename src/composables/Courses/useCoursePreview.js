// En un archivo llamado useCourseSettings.js
import { ref, onMounted, onActivated, onDeactivated } from "vue";
import axios from "axios";
import { API_URL } from "@/config/config";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

export const useCoursePreview = (courseId) => {
    const activeMenu = ref("general");
    const courseDetails = ref(null);
    const store = useStore()
    const router = useRouter()
    const route = useRoute(); // Obtener la ruta actual


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
        try {
            await getCourseWithDetails();

        } catch (error) {
            handleError(error);
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
