import { API_URL } from "@/config/config";
import { data } from "autoprefixer";
import axios from "axios";
import { ref } from "vue";

export const useSection = () => {
    const objectSeccions = ref([]);
    const courseId = ref(null);
    const sectionTitle = ref(null);
    const sectionId = ref(null);
    const addSection = () => {
        objectSeccions.value.push({
            sectionTitle: "Intermediate HTML",
            sectionState: "PRIVADO",
        });
    };
    const updateContentName = () => {
        const indexSection = objectSeccions.value.findIndex(
            (index) => index.sectionId == sectionId.value
        );
        const dateSectionToUpdate = objectSeccions.value[indexSection];

        return new Promise(async (resolve, reject) => {
            try {
                const resp = await axios.put(`${API_URL}/section/${sectionId.value}`, {
                    courseId: dateSectionToUpdate.courseId,
                    sectionTitle: dateSectionToUpdate.sectionTitle,
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
        objectSeccions,
        sectionTitle,
        sectionId,
        addSection,
        updateContentName,
    };
};
