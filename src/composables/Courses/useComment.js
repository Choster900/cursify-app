import { ref } from "vue"

export const useComment = () => {
    const commentario = ref(null)

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
}