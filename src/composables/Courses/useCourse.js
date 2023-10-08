import axios from "axios";
import { ref } from "vue";
import { API_URL } from "@/config/config";

export const useCourse = () => {
    const courseName = ref(null);
    const categoryId = ref(null);
    const courseFile = ref(null);
    const courseDescription = ref(null);
    const coursePhoto = ref(null);

    const createCategoryRequest = () => {
        return new Promise(async (resolve, reject) => {
            try {
                const formData = new FormData();
                formData.append("categoryId", categoryId.value);
                formData.append("file", courseFile.value);
                formData.append("courseDescription", courseDescription.value);
                formData.append("courseName", courseName.value);
                formData.append("coursePhoto", coursePhoto.value);
                formData.append("userId", 3); //TODO: configurar id usuario

                const resp = await axios.post(`${API_URL}/courses`, formData, {
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

    return {
        courseName,
        categoryId,
        courseFile,
        coursePhoto,
        courseDescription,
        createCategoryRequest,
    };
};
