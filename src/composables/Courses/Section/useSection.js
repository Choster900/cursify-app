import { API_URL } from "@/config/config";
import { data } from "autoprefixer";
import axios from "axios";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { v4 as uuid, v4 } from "uuid";

export const useSection = () => {
    const objectSeccions = ref([]);
    const sectionTitle = ref(null);
    const sectionId = ref(null);
    const route = useRoute()
    const courseId = route.params.courseId

    const addSection = () => {
        objectSeccions.value.push({
            courseId: courseId,
            sectionTitle: "TITULO DE PRUEBA",
            sectionState: "PRIVADO",
            sectionContents: [],
            id: v4(),
            isEditing: true,
            isNew: true,
            sectionId: "",
        });
    };

    const createCourseRequest = () => {
        const dateSectionToUpdate = objectSeccions.value[sectionId.value];
        return new Promise(async (resolve, reject) => {
            try {
                const resp = await axios.post(`${API_URL}/section/`, {
                    courseId: dateSectionToUpdate.courseId,
                    sectionTitle: dateSectionToUpdate.sectionTitle,
                });
                console.log(resp.data);
                objectSeccions.value[sectionId.value].sectionId = resp.data.sectionId;
                resolve(resp);
            } catch (error) {
                console.error(error);
                reject(error);
            }
        });
    };


    const updateSectiontName = () => {
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
        updateSectiontName,
        createCourseRequest,
    };
};
