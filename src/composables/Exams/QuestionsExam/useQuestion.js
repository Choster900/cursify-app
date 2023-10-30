import { API_URL } from "@/config/config";
import axios from "axios";
import { onActivated, onDeactivated, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export const useQuestion = () => {
    const route = useRoute();
    const store = useStore()
    const user = store.state.user;

    const objQuestions = ref(null);
    const generalInformation = ref(null);
    const storeAnswer = ref([]); // Variable que almacenara las respuestas seleccionadas para enviarlas
    const saveSelectedQuestion = (object) => {
        const answerIndex = storeAnswer.value.findIndex(answer => answer.quesionId === object.quesionId);
        console.log(answerIndex);

        if (answerIndex !== -1) {
            // Si se encuentra un elemento con el mismo questionId, lo eliminamos
            storeAnswer.value.splice(answerIndex, 1);
        }

        // Agregamos el nuevo objeto
        storeAnswer.value.push(object);
    }

    const  endAttempt = async () => {
        console.log(storeAnswer.value);

        const totalCorrectAnswers = storeAnswer.value.reduce((sum, answer) => {
            return sum + (answer.optionIsCorrect === 1 ? 1 : 0);
        }, 0);

        const totalQuestions = storeAnswer.value.length;

        const averageGrade = (totalCorrectAnswers / totalQuestions) * 100; // Multiplicamos por 100 para obtener un porcentaje

        console.log("Preguntas buenas: " + totalCorrectAnswers);
        console.log("Nota total: " + averageGrade);

        const examId = route.params.examId;

        const resp = await axios.post(`${API_URL}/exam-result`, {
            "examId": examId,
            "resultGrade": averageGrade,
            "resultScore": totalCorrectAnswers,
            "userId": user.userId
        });


    }

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

    const getInformacionFromExam = async () => {
        try {
            const examId = route.params.examId;
            const resp = await axios.get(`${API_URL}/exams/getInformationExamByExamId/${examId}`);

            console.log(resp);
            generalInformation.value = resp.data;
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
            objQuestions.value[index].questionId = resp.data.questionId;
        } catch (error) {
            handleError(error);
        }
    };
    const addAnwserToQuestion = (index) => {
        objQuestions.value[index].answerOptionList.push({
            questionId: objQuestions.value[index].questionId,
            optionId: null,
            optionText: "PRUEBA",
            optionIsCorrect: 0,
        });
    };

    const sendOptiosns = async (index, questionId) => {
        objQuestions.value[index].answerOptionList.forEach((option) => {
            if (option.optionId) {
                updateOptionRequest(option, questionId);
            } else {
                createOptionRequest(option, questionId);
            }
        });
    };

    const createOptionRequest = async (objectOption, questionId) => {
        try {
            const resp = await axios.post(`${API_URL}/answersOptions/`, {
                optionIsCorrect: objectOption.optionIsCorrect,
                optionText: objectOption.optionText,
                questionId: questionId,
            });

            const question = objQuestions.value.find(q => q.questionId === questionId);
            if (question) {
                const optionIndex = question.answerOptionList.findIndex(option => option === objectOption);
                if (optionIndex !== -1) {
                    question.answerOptionList[optionIndex].optionId = resp.data.optionId;
                }
            }
        } catch (error) {
            handleError(error);
        }
    };

    const updateOptionRequest = async (objectOption, questionId) => {
        try {
            const resp = await axios.put(
                `${API_URL}/answersOptions/${objectOption.optionId}`,
                {
                    optionIsCorrect: objectOption.optionIsCorrect,
                    optionText: objectOption.optionText,
                    questionId: questionId,
                }
            );
            console.log(resp);
        } catch (error) {
            handleError(error);
        }
    };
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
            await getInformacionFromExam();
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

    const deleteAnswersById = async (questionIndex, optionIndex) => {
        const currentQuestion = objQuestions.value[questionIndex];
        const selectedOption = currentQuestion.answerOptionList[optionIndex];

        const optionIndexToDelete = currentQuestion.answerOptionList.findIndex(
            (option) => option === selectedOption
        );

        if (optionIndexToDelete !== -1) {
            currentQuestion.answerOptionList.splice(optionIndexToDelete, 1);

            if (selectedOption.optionId) {
                try {
                    const resp = await axios.delete(
                        `${API_URL}/answersOptions/${selectedOption.optionId}`
                    );
                    console.log(resp);
                } catch (error) {
                    handleError(error);
                }
            }
        }
    };

    const deleteQuestionById = async (questionIndex) => {
        const currentQuestion = objQuestions.value[questionIndex];

        const questionIndexToDelete = objQuestions.value.findIndex(
            (option) => option === currentQuestion
        );
        if (questionIndexToDelete !== -1) {
            if (currentQuestion.answerOptionList.length == 0) {
                try {
                    const resp = await axios.delete(`${API_URL}/questions/${currentQuestion.questionId}`);
                    console.log(resp);
                } catch (error) {
                    handleError(error);
                }
                objQuestions.value.splice(questionIndexToDelete, 1);
            } else {
                alert("tiene preguntas no puede eliminar");
            }
        }
    };

    const updateQuestionRequest = async (questionIndex) => {
        const currentQuestion = objQuestions.value[questionIndex];
        console.log(currentQuestion);

        try {
            const examId = route.params.examId;

            const resp = await axios.put(
                `${API_URL}/questions/${currentQuestion.questionId}`,
                {
                    examId: examId,
                    questionText: currentQuestion.questionText,
                }
            );
            console.log(resp);
        } catch (error) {
            handleError(error);
        }
    };

    return {
        getQuestionsByExam,
        generalInformation,
        sendOptiosns,
        objQuestions,
        addAnwserToQuestion,
        endAttempt,
        addQuestionToExam,
        addQuestionRequest,
        selectCorrectOption,
        createOptionRequest,
        updateOptionRequest,
        deleteAnswersById,
        updateQuestionRequest,
        deleteQuestionById,
        saveSelectedQuestion,
    };
};
