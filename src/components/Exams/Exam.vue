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
                    </div><!-- Content -->
                    <div class="relative">
                        <h1 class="text-2xl md:text-3xl text-slate-800 font-bold mb-1">Examen numero 1. 👋</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt assumenda ipsum omnis impedit:
                        </p>
                    </div>
                </div>
                <main>

                    <div class="flex-1 md:ml-8 xl:mx-4 2xl:mx-8">
                        <button class="btn bg-indigo-500 hover:bg-indigo-600 text-white" @click="addQuestionToExam">
                            <svg class="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                                <path
                                    d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z">
                                </path>
                            </svg>
                            <span class="ml-2">Add Event</span>
                        </button>
                        <div class="md:py-8" v-for="(question, i) in objQuestions" :key="i">
                            <div class="space-y-4">
                                <div class="bg-white shadow-md rounded border border-slate-200 p-5">
                                    <div class="flex items-center space-x-3 mb-5">
                                        <h1 class="text-lg">1.</h1>
                                        <div class="grow flex gap-2">
                                            <label for="status-input" class="sr-only">What's the question?</label>
                                            <input id="status-input" v-model="question.questionText"
                                                class="form-input w-full bg-slate-100 border-transparent focus:bg-white focus:border-slate-300 placeholder-slate-500"
                                                type="text" placeholder="What's the question?">

                                            <svg class="w-6 h-6 text-black cursor-pointer font-bold" viewBox="0 0 24 24"
                                                fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"
                                                stroke-width="0.00024000000000000003">
                                                <path
                                                    d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44771 13 8V11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H13V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V13H8C7.44772 13 7 12.5523 7 12C7 11.4477 7.44771 11 8 11H11V8Z"
                                                    fill="#0F0F0F"></path>
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M23 4C23 2.34315 21.6569 1 20 1H4C2.34315 1 1 2.34315 1 4V20C1 21.6569 2.34315 23 4 23H20C21.6569 23 23 21.6569 23 20V4ZM21 4C21 3.44772 20.5523 3 20 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4Z"
                                                    fill="#0F0F0F"></path>

                                            </svg>

                                            <svg class="w-6 h-6 text-black cursor-pointer font-bold" viewBox="0 0 24 24"
                                                @click="addAnwserToQuestion(i)" fill="none"
                                                xmlns="http://www.w3.org/2000/svg" transform="rotate(180)">
                                                <path d="M7 3V21M7 3L11 7M7 3L3 7M14 3H21M14 9H19M14 15H17M14 21H15"
                                                    stroke="#000000" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round"></path>

                                            </svg>

                                            <svg class="w-6 h-6 text-black cursor-pointer font-bold"
                                                viewBox="0 0 24.00 24.00" fill="none">
                                                <path
                                                    d="M12 3.99997H6C4.89543 3.99997 4 4.8954 4 5.99997V18C4 19.1045 4.89543 20 6 20H18C19.1046 20 20 19.1045 20 18V12M18.4142 8.41417L19.5 7.32842C20.281 6.54737 20.281 5.28104 19.5 4.5C18.7189 3.71895 17.4526 3.71895 16.6715 4.50001L15.5858 5.58575M18.4142 8.41417L12.3779 14.4505C12.0987 14.7297 11.7431 14.9201 11.356 14.9975L8.41422 15.5858L9.00257 12.6441C9.08001 12.2569 9.27032 11.9013 9.54951 11.6221L15.5858 5.58575M18.4142 8.41417L15.5858 5.58575"
                                                    stroke="#000000" stroke-width="1.128" stroke-linecap="round"
                                                    stroke-linejoin="round"></path>
                                            </svg>

                                            <svg class="w-6 h-6 text-black cursor-pointer font-bold" viewBox="0 0 24 24"
                                                fill="none">
                                                <path
                                                    d="M8 6H19C19.5523 6 20 6.44772 20 7V17C20 17.5523 19.5523 18 19 18H8L2 12L5 9M16 9L13.0001 11.9999M13.0001 11.9999L10 15M13.0001 11.9999L10.0002 9M13.0001 11.9999L16.0002 15"
                                                    stroke="#000000" stroke-width="1.152" stroke-linecap="round"
                                                    stroke-linejoin="round"></path>

                                            </svg>
                                        </div>
                                    </div>
                                    <div class="flex justify-between items-center gap-2 ml-10 py-1"
                                        v-for="(answe, index )  in question.answerOptionList" :key="index">
                                        <div class="grow flex space-x-5">
                                            <button
                                                class="inline-flex items-center text-sm font-medium text-slate-600 hover:text-slate-700">
                                                <span> <span>{{ getLetter(index + 1) }}</span>
                                                </span>
                                            </button>
                                            <div class="grow">
                                                <label for="status-input" class="sr-only">What's the posible
                                                    response?</label>
                                                <input id="status-input"
                                                    class="form-input w-full bg-slate-100 border-transparent focus:bg-white focus:border-slate-300 placeholder-slate-500"
                                                    type="text" placeholder="What's the posible response?">
                                            </div>
                                            <svg class="w-7 h-7 fill-green-600 stroke-slate-600" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="#2c3e50" fill="none">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path
                                                    d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" />
                                            </svg>
                                            <svg class="w-7 h-7" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50"
                                                fill="none">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path
                                                    d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3" />
                                            </svg>

                                        </div>
                                    </div>
                                    <div class="flex justify-end pt-5">
                                        <button type="submit"
                                            class="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white whitespace-nowrap">Send
                                            -&gt;
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </main>
            </div>
        </div>
    </div>
</template>

<script>
import { onActivated, onMounted, ref } from 'vue';
import { useQuestion } from '../../composables/Exams/QuestionsExam/useQuestion'
export default {
    setup() {
        // Crear una referencia reactiva para el índice
        const index = ref(1);
        const { getQuestionsByExam, objQuestions, addAnwserToQuestion, addQuestionToExam } = useQuestion()
        // Función reactiva para obtener la letra
        const getLetter = (index) => {
            return String.fromCharCode(65 + index - 1);
        };

        return {
            index,
            getLetter,
            getQuestionsByExam,
            objQuestions,
            addAnwserToQuestion,
            addQuestionToExam,
        };
    },
}
</script>

<style></style>