import { API_URL } from "@/config/config";
import axios from "axios";
import { onMounted, ref } from "vue";

export const useContent = () => {
    const objectSeccionContent = ref(null);
    const objectRetunredWhenIsAdding = ref(null);

    const modifiedContentIntoCourseRequest = (rowSelected) => {
        const { contentFileName, contentId, contentName, contentType, fileVideoContent, sectionId } = objectSeccionContent.value[rowSelected]
        return new Promise(async (resolve, reject) => {
            try {
                const formData = new FormData();
                formData.append("contentFileName", contentFileName);
                formData.append("fileVideoContent", fileVideoContent);
                formData.append("contentName", contentName);
                formData.append("contentType", contentType);
                formData.append("sectionId", sectionId);
                formData.append("contentId", contentId);

                const resp = await axios.put(`${API_URL}/sectionContent/${contentId}`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });


                resolve(resp);
            } catch (error) {
                console.error(error);
                reject(error);
            }
        });
    };

    const createContentIntoCourseRequest = (rowSelected) => {
        const { contentFileName, contentName, contentType, fileVideoContent, sectionId } = objectSeccionContent.value[rowSelected]
        return new Promise(async (resolve, reject) => {
            try {
                const formData = new FormData();
                formData.append("contentFileName", contentFileName);
                formData.append("fileVideoContent", fileVideoContent);
                formData.append("contentName", contentName);
                formData.append("contentType", contentType);
                formData.append("sectionId", sectionId);

                const resp = await axios.post(`${API_URL}/sectionContent/`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });

                // Modificar la respuesta antes de resolverla
                const modifiedResponse = { response: resp.data, rowAffected: rowSelected };

                objectRetunredWhenIsAdding.value = modifiedResponse;
                resolve(resp);
            } catch (error) {
                console.error(error);
                reject(error);
            }
        });
    };



    return {
        objectSeccionContent,
        modifiedContentIntoCourseRequest,
        objectRetunredWhenIsAdding,
        createContentIntoCourseRequest,
    };
};
