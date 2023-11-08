import { API_URL } from "@/config/config";
import axios from "axios";
import { computed, onActivated, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export const useEnrollment = () => {

    const route = useRoute();
    const store = useStore()
    const user = computed(() => store.state.user)
    const authIsReady = computed(() => store.state.authIsReady)
    const isEnroll = ref(null)

    const verifyEnrollment = async () => {
        //console.log(user.value.userId);
        if (authIsReady) {
            try {
                const courseId = route.params.courseId;
                const resp = await axios.get(`${API_URL}/enrollments/isEnroll/${user.value.userId}/${courseId}`);
                isEnroll.value = resp.data;
            } catch (error) {
                handleError(error);
            }
        }
    };

    const enrollInTheCourse = async () => {
        try {
            const courseId = route.params.courseId;

            const resp = await axios.post(`${API_URL}/enrollments/`, {
                "courseId": courseId,
                "userId": user.value.userId
            });
            isEnroll.value = resp.data;
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

    onActivated(async () => {
        await verifyEnrollment();
    });

    return {
        verifyEnrollment,
        isEnroll,
        enrollInTheCourse,
    }

}