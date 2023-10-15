<template>
    <div class="space-y-2 pb-52">
        <button class="btn bg-indigo-500 hover:bg-indigo-600 text-white" @click="addNewObjectExam">
            <svg class="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                <path
                    d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z">
                </path>
            </svg>
            <span class="ml-2">Add Exam / Test</span>
        </button>
        <article class="bg-white shadow-md rounded border border-slate-200 p-3 cursor-pointer" v-for="(ex, i) in objectExam"
            :key="i">
            <div class="flex flex-start space-x-4">
                <!-- Avatar -->
                <div class="shrink-0 mt-1.5">
                    <svg fill="#000000" class="w-10" viewBox="0 0 512 512">
                        <path
                            d="M243.174,0H140.56c-9.136,0-16.568,7.432-16.568,16.568v102.614c0,9.136,7.432,16.568,16.568,16.568h102.614 c9.136,0,16.568-7.432,16.568-16.568V16.568C259.741,7.432,252.309,0,243.174,0z M243.708,119.182 c0,0.295-0.239,0.534-0.534,0.534H140.56c-0.295,0-0.534-0.239-0.534-0.534V16.568c0-0.295,0.239-0.534,0.534-0.534h102.614 c0.295,0,0.534,0.239,0.534,0.534V119.182z">
                        </path>

                        <path
                            d="M243.174,376.251H140.56c-9.136,0-16.568,7.432-16.568,16.568v102.614c0,9.136,7.432,16.568,16.568,16.568h102.614 c9.136,0,16.568-7.432,16.568-16.568V392.818C259.741,383.683,252.309,376.251,243.174,376.251z M243.708,495.432 c0,0.295-0.239,0.534-0.534,0.534H140.56c-0.295,0-0.534-0.239-0.534-0.534V392.818c0-0.295,0.239-0.534,0.534-0.534h102.614 c0.295,0,0.534,0.239,0.534,0.534V495.432z">
                        </path>

                        <path
                            d="M385.66,293.087l-145.37-145.37c-2.293-2.294-5.742-2.977-8.736-1.738c-2.996,1.241-4.949,4.164-4.949,7.406v34.739 H140.56c-9.136,0-16.568,7.432-16.568,16.568v102.614c0,9.136,7.432,16.568,16.568,16.568h86.046v34.739 c0,2.945,1.615,5.653,4.206,7.054s5.742,1.267,8.205-0.348l36.923-24.2l45.381,109.56c1.278,3.087,4.264,4.951,7.41,4.951 c1.023,0,2.062-0.197,3.065-0.612l47.401-19.635c1.965-0.813,3.525-2.374,4.339-4.339c0.813-1.965,0.813-4.171,0-6.135 l-45.361-109.51l43.408-8.786c2.895-0.586,5.233-2.716,6.085-5.543C388.519,298.243,387.749,295.175,385.66,293.087z M226.606,307.841H140.56c-0.295,0-0.534-0.239-0.534-0.534V204.693c0-0.295,0.239-0.534,0.534-0.534h86.046V307.841z M325.453,301.616c-2.348,0.476-4.361,1.976-5.486,4.091c-1.126,2.115-1.247,4.622-0.33,6.836l46.018,111.098l-32.588,13.498 L287.048,326.04c-0.914-2.206-2.763-3.89-5.045-4.593c-0.774-0.238-1.569-0.356-2.36-0.356c-1.545,0-3.074,0.446-4.395,1.312 l-32.609,21.372V172.74l121.122,121.122L325.453,301.616z">
                        </path>

                        <path
                            d="M231.74,45.104c-3.131-3.131-8.207-3.131-11.337,0l-37.087,37.087L163.33,62.206c-3.131-3.131-8.207-3.131-11.337,0 c-3.131,3.131-3.131,8.207,0,11.337l25.653,25.653c1.565,1.566,3.617,2.348,5.668,2.348s4.103-0.782,5.668-2.348l42.756-42.756 C234.87,53.31,234.87,48.234,231.74,45.104z">
                        </path>
                    </svg>
                </div>
                <div class="grow">
                    <div class="flex justify-between gap-2">
                        <h1 class="pt-3" v-if="!ex.isEditing">{{ ex.examTitle }}</h1>
                        <input id="status-input" v-else v-model="ex.examTitle" @input="updateExamRequest(i)"
                            class="form-input w-full bg-slate-100 border-transparent focus:bg-white focus:border-slate-300 placeholder-slate-500"
                            type="text" placeholder="What's the question?">

                        <div class="flex justify-end">

                            <svg xmlns="http://www.w3.org/2000/svg" @click="updateExamRequest(i), ex.isEditing = false"
                                v-if="!ex.isNew && ex.isEditing" class="icon icon-tabler icon-tabler-square-rounded-check"
                                width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 12l2 2l4 -4" />
                                <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-plus"
                                v-if="ex.isNew && ex.isEditing" @click="createExamRequest(i), ex.isEditing = false"
                                width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                                <path d="M12 11l0 6" />
                                <path d="M9 14l6 0" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" @click="ex.isEditing = true
                                " class="icon icon-tabler icon-tabler-pencil-minus" v-if="!ex.isNew && !ex.isEditing"
                                width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                                <path d="M13.5 6.5l4 4" />
                                <path d="M16 19h6" />
                            </svg>


                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="44"
                                v-if="ex.examStatus == 'PRIVADO' && !ex.isNew" height="44" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />

                                <path
                                    d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                            </svg>


                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye-off" width="44"
                                v-if="ex.examStatus == 'PUBLICADO' && !ex.isNew" height="44" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
                                <path
                                    d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" />
                                <path d="M3 3l18 18" />
                            </svg>

                            <router-link :to="`/courses/config-exam/${ex.examId}`" v-if="!ex.isNew">

                                <svg xmlns="http://www.w3.org/2000/svg"
                                    class="icon icon-tabler icon-tabler-arrow-big-right-lines" width="44" height="44"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M12 9v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-3v-6h3z" />
                                    <path d="M3 9v6" />
                                    <path d="M6 9v6" />
                                </svg>
                            </router-link>
                        </div>


                    </div>
                </div>
            </div>
        </article>

    </div>
</template>

<script>
import { onActivated, onMounted, toRefs, watch } from 'vue';
import { useExam } from "../../composables/Exams/UseExam.js";
import Exam from '@/components/Exams/ExamList.vue';
export default {
    props: {
        exams: {
            type: Object,
            default: () => { },
        },
    },
    setup(props) {
        const { exams } = toRefs(props);

        const { objectExam, addNewObjectExam, updateExamRequest, createExamRequest, responseWhenIsCreated } = useExam()

        onMounted(() => {
            if (exams.value) {
                objectExam.value = exams.value
                for (const exam of objectExam.value) {
                    exam.isEditing = false
                    exam.isNew = false
                }
            }
        })
        watch(responseWhenIsCreated, () => {
            objectExam.value[responseWhenIsCreated.value.rowAffected].examId = responseWhenIsCreated.value.data.examId
            objectExam.value[responseWhenIsCreated.value.rowAffected].isEditing = false
            objectExam.value[responseWhenIsCreated.value.rowAffected].isNew = false
        });
        return {
            objectExam,
            addNewObjectExam,
            createExamRequest,
            updateExamRequest,
        }
    }
}
</script>

<style></style>