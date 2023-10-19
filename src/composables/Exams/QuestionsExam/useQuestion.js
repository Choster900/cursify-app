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
            objQuestions.value = resp.data; 
        } catch (error) {
            handleError(error);
        }
    };

    const addQuestionToExam = async () => {
        objQuestions.value.push({
            questionId: null,
            questionText: "PREGUNTA DE PRUEBA",
            examId: route.params.examId,
            answerOptionList: [],
            exam: {},
        });
    };

    const addQuestionRequest = async (index) => {
        try {
            const examId = route.params.examId;
            const questionText = objQuestions.value[index].questionText;
            const resp = await axios.post(`${API_URL}/questions`, {
                examId: examId,
                questionText: questionText,
            });

            console.log(resp);
        } catch (error) {
            handleError(error);
        }
    };
    const addAnwserToQuestion = (index) => {
        objQuestions.value[index].answerOptionList.push({
            questionId: objQuestions.value[index].questionId,
            optionId: null,
            optionsText: "PRUEBA",
            optionIsCorrect: 0,
        });
    };

    const sendOptiosns = async (index, questionId) => {

        objQuestions.value[index].answerOptionList.forEach((option) => {
            if (option.optionId) {
                updateOptionRequest(option, questionId)
            } else {
                createOptionRequest(option, questionId)
            }
        });


    };

    const createOptionRequest = async (objectOption, questionId) => {
        try {

            const resp = await axios.post(`${API_URL}/answersOptions/`, {
                optionIsCorrect: objectOption.optionIsCorrect,
                optionText: objectOption.optionText,
                questionId: questionId
            });

            console.log(resp);
        } catch (error) {
            handleError(error);
        }
    }
    const updateOptionRequest = async (objectOption, questionId) => {
        try {
            const resp = await axios.put(`${API_URL}/answersOptions/${objectOption.optionId}`, {
                optionIsCorrect: objectOption.optionIsCorrect,
                optionText: objectOption.optionText,
                questionId: questionId
            });
            console.log(resp);
        } catch (error) {
            handleError(error);
        }

    }
    onDeactivated(() => { });

    const handleError = (error) => {
        console.error(error);
        if (
            error.response &&
            (error.response.status === 404 || error.response.status == 400)
        ) {
            console.log(error.response.status);
        }
    };
    onActivated(async () => {
        try {
            await getQuestionsByExam();
        } catch (error) {
            handleError(error);
        }
    });

    const selectCorrectOption = (questionIndex, optionIndex) => {
        const currentQuestion = objQuestions.value[questionIndex];
        const selectedOption = currentQuestion.answerOptionList[optionIndex];
        currentQuestion.answerOptionList.forEach((option) => {
            option.optionIsCorrect = 0;
        });
        selectedOption.optionIsCorrect = 1;
    };

    return {
        getQuestionsByExam,
        sendOptiosns,
        objQuestions,
        addAnwserToQuestion,
        addQuestionToExam,
        addQuestionRequest,
        selectCorrectOption,
        createOptionRequest,
        updateOptionRequest,
    };
};
