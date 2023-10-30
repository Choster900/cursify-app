<template>
    <div class="blog-posts">
        <div class="">
            <div class="container">
                <div class="relative bg-indigo-200 p-4 sm:p-6 rounded-sm overflow-hidden mb-8">
                    <!-- Background illustration -->
                    <div class="absolute right-0 top-0 -mt-4 mr-16 pointer-events-none hidden xl:block" aria-hidden="true">
                        <svg width="319" height="198" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <defs>
                                <path id="welcome-a" d="M64 0l64 128-64-20-64 20z"></path>
                                <path id="welcome-e" d="M40 0l40 80-40-12.5L0 80z"></path>
                                <path id="welcome-g" d="M40 0l40 80-40-12.5L0 80z"></path>
                                <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="welcome-b">
                                    <stop stop-color="#A5B4FC" offset="0%"></stop>
                                    <stop stop-color="#818CF8" offset="100%"></stop>
                                </linearGradient>
                                <linearGradient x1="50%" y1="24.537%" x2="50%" y2="100%" id="welcome-c">
                                    <stop stop-color="#4338CA" offset="0%"></stop>
                                    <stop stop-color="#6366F1" stop-opacity="0" offset="100%"></stop>
                                </linearGradient>
                            </defs>
                            <g fill="none" fill-rule="evenodd">
                                <g transform="rotate(64 36.592 105.604)">
                                    <mask id="welcome-d" fill="#fff">
                                        <use xlink:href="#welcome-a"></use>
                                    </mask>
                                    <use fill="url(#welcome-b)" xlink:href="#welcome-a"></use>
                                    <path fill="url(#welcome-c)" mask="url(#welcome-d)" d="M64-24h80v152H64z"></path>
                                </g>
                                <g transform="rotate(-51 91.324 -105.372)">
                                    <mask id="welcome-f" fill="#fff">
                                        <use xlink:href="#welcome-e"></use>
                                    </mask>
                                    <use fill="url(#welcome-b)" xlink:href="#welcome-e"></use>
                                    <path fill="url(#welcome-c)" mask="url(#welcome-f)" d="M40.333-15.147h50v95h-50z">
                                    </path>
                                </g>
                                <g transform="rotate(44 61.546 392.623)">
                                    <mask id="welcome-h" fill="#fff">
                                        <use xlink:href="#welcome-g"></use>
                                    </mask>
                                    <use fill="url(#welcome-b)" xlink:href="#welcome-g"></use>
                                    <path fill="url(#welcome-c)" mask="url(#welcome-h)" d="M40.333-15.147h50v95h-50z">
                                    </path>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <!-- Content -->
                    <div class="relative">
                        <h1 class="text-2xl md:text-3xl text-slate-800 font-bold mb-1 uppercase">
                            {{ generalInformation ? generalInformation["examTitle"] : '' }} 👋
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
                            assumenda ipsum omnis impedit:
                        </p>
                    </div>
                </div>
                <main>
                    <div class="flex-1 md:ml-8 xl:mx-4 2xl:mx-8">
                        <div class="md:py-4" v-for="(question, i) in objQuestions" :key="i">
                            <div class="space-y-4">
                                <div class="bg-white shadow-md rounded border border-slate-200 p-5">
                                    <div class="flex items-center space-x-3 mb-5">
                                        <h1 class="text-lg">1.</h1>
                                        <div class="grow flex gap-2">
                                            <label for="status-input" class="sr-only">What's the question?</label>
                                            <h1>{{ question.questionText }}</h1>
                                        </div>
                                    </div>
                                    <div class="flex justify-between items-center gap-2 ml-10 py-1"
                                        v-for="(answer, index) in question.answerOptionList" :key="index">
                                        <div class="grow flex space-x-5">

                                            <div class="m-3">
                                                <label class="flex items-center">
                                                    <input type="radio" @change="saveSelectedQuestion({
                                                        quesionId: question.questionId,
                                                        optionIsCorrect: answer.optionIsCorrect,
                                                    })" :name="question.questionText" class="form-radio">
                                                    <span class="text-sm ml-2">{{ getLetter(index + 1) }}.</span>
                                                    <span class="text-sm ml-2">{{ answer.optionText }}</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button class="my-4 " @click="endAttempt">
                            <span>Terminar intento</span>
                        </button>
                    </div>
                </main>
            </div>
        </div>
    </div>
</template>

<script>
import { onActivated, onMounted, ref } from "vue";
import { useQuestion } from "../../composables/Exams/QuestionsExam/useQuestion";
export default {
    setup() {
        // Crear una referencia reactiva para el índice
        const index = ref(1);
        const {
            generalInformation,
            objQuestions,
            saveSelectedQuestion,
            endAttempt,
        } = useQuestion();
        // Función reactiva para obtener la letra
        const getLetter = (index) => {
            return String.fromCharCode(65 + index - 1);
        };

        return {
            index,
            getLetter,
            generalInformation,
            objQuestions,
            saveSelectedQuestion,
            endAttempt,

        };
    },
};
</script>

<style scoped>
button {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background: #183153;
    font-family: "Montserrat", sans-serif;
    box-shadow: 0px 6px 24px 0px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    border: none;
}

button:after {
    content: " ";
    width: 0%;
    height: 100%;
    background: #FFD401;
    position: absolute;
    transition: all 0.4s ease-in-out;
    right: 0;
}

button:hover::after {
    right: auto;
    left: 0;
    width: 100%;
}

button span {
    text-align: center;
    text-decoration: none;
    width: 100%;
    padding: 10px 25px;
    color: #fff;
    font-size: 1.125em;
    font-weight: 700;
    letter-spacing: 0.3em;
    z-index: 20;
    transition: all 0.3s ease-in-out;
}

button:hover span {
    color: #183153;
    animation: scaleUp 0.3s ease-in-out;
}

@keyframes scaleUp {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(0.95);
    }

    100% {
        transform: scale(1);
    }
}
</style>
