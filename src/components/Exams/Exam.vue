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
                        <button class="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                            <svg class="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                                <path
                                    d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z">
                                </path>
                            </svg>
                            <span class="ml-2">Add Event</span>
                        </button>
                        <div class="md:py-8">
                            <div class="space-y-4">
                                <div class="bg-white shadow-md rounded border border-slate-200 p-5">
                                    <div class="flex items-center space-x-3 mb-5">
                                        <h1 class="text-lg">1.</h1>
                                        <div class="grow">
                                            <label for="status-input" class="sr-only">What's the question?</label>
                                            <input id="status-input"
                                                class="form-input w-full bg-slate-100 border-transparent focus:bg-white focus:border-slate-300 placeholder-slate-500"
                                                type="text" placeholder="What's the question?">
                                        </div>
                                    </div>
                                    <div class="flex justify-between items-center gap-2 ml-10 py-1" v-for="index in 4"
                                        :key="index">
                                        <div class="grow flex space-x-5">
                                            <button
                                                class="inline-flex items-center text-sm font-medium text-slate-600 hover:text-slate-700">
                                                <span> <span>{{ getLetter(index) }}</span>
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
import { ref } from 'vue';
export default {
    setup() {
        // Crear una referencia reactiva para el índice
        const index = ref(1);

        // Función reactiva para obtener la letra
        const getLetter = (index) => {
            return String.fromCharCode(65 + index - 1);
        };

        return {
            index,
            getLetter,
        };
    },
}
</script>

<style></style>