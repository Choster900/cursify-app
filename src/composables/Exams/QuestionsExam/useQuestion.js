import { API_URL } from "@/config/config";
import axios from "axios";
import { onActivated, onDeactivated, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

export const useQuestion = () => {
    const route = useRoute();
    const objQuestions = ref(null);

    const getQuestionsByExam = async () => {
        try {
            const examId = route.params.examId;
            const resp = await axios.get(`${API_URL}/exams/byExam/${examId}`);

            console.log(resp);
            objQuestions.value = resp.data; // Guardar los detalles del curso
        } catch (error) {
            handleError(error);
        }
    };

    const addQuestionToExam = async () => {
        objQuestions.value.push({
            questionId: null,
            questionText: "PREGUNTA DE PRUEBA",
            examId: route.params.examId,
            answerOptionList:[],
            exam:{},
        });
    };
    const addAnwserToQuestion = (index) => {
        objQuestions.value[index].answerOptionList.push({
            questionId: objQuestions.value[index].questionId,
            optionId: null,
            optionsText: "PRUEBA",
            optionIsCorrect: 0,
        });
    };

    onDeactivated(() => { });

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
        try {
            await getQuestionsByExam();
        } catch (error) {
            handleError(error);
        }
    });

    return {
        getQuestionsByExam,
        objQuestions,
        addAnwserToQuestion,
        addQuestionToExam,
    };
};
