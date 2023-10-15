import { API_URL } from "@/config/config"
import axios from "axios"
import { ref } from "vue"
import { useRoute } from "vue-router"

export const useExam = () => {
    const objectExam = ref([])
    const route = useRoute()
    const courseId = route.params.courseId
    const responseWhenIsCreated = ref(null);
    const addNewObjectExam = () => {

        objectExam.value.push({
            courseId: courseId,
            examDuration: 60, // Dejamos por default
            examTitle: "string",
            examStatus: 'PRIVADO',
            examId: '',
            isEditing: true,
            isNew: true,
        })
    }

    const updateExamRequest = (i) => {
        const dataExamen = objectExam.value[i];
        console.log(dataExamen);
        return new Promise(async (resolve, reject) => {
            try {
                const resp = await axios.put(`${API_URL}/exams/${dataExamen.examId}`, {
                    "courseId": dataExamen.courseId,
                    "examDuration": 60, // Dejamos por default
                    "examTitle": dataExamen.examTitle
                });

                console.log(resp);
                resolve(resp);
            } catch (error) {
                console.error(error);
                reject(error);
            }
        });
    };

    const createExamRequest = (i) => {
        const dataExamen = objectExam.value[i];
        console.log(dataExamen);
        return new Promise(async (resolve, reject) => {
            try {
                const resp = await axios.post(`${API_URL}/exams/`, {
                    "courseId": dataExamen.courseId,
                    "examDuration": 60, // Dejamos por default
                    "examTitle": dataExamen.examTitle
                });

                //console.log(resp);

                responseWhenIsCreated.value = { data: resp.data, rowAffected: i }
                resolve(resp);
            } catch (error) {
                console.error(error);
                reject(error);
            }
        });
    };



    return {
        objectExam,
        addNewObjectExam,
        updateExamRequest,
        createExamRequest,
        responseWhenIsCreated,
    }
}