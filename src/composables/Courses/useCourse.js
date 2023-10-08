import axios from "axios";
import { computed, ref } from "vue";
import { API_URL } from "@/config/config";
import { useStore } from "vuex";
import { useRouter } from 'vue-router';

export const useCourse = () => {
    const store = useStore()
    const courseName = ref(null);
    const categoryId = ref(null);
    const courseFile = ref(null);
    const coursePhoto = ref(null);
    const courseDescription = ref(null);
    const user = store.state.user;
    const router = useRouter()

    const createCategoryRequest = () => {
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
                router.push('/');
            } catch (error) {
                console.error(error);
                reject(error);
            }
        });
    };

    return {
        courseName,
        categoryId,
        courseFile,
        coursePhoto,
        courseDescription,
        createCategoryRequest,
    };
};
