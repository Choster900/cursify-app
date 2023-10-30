<template>
    <div class="space-y-2 pb-52">
        <div class="shadow-lg rounded-sm border px-5 py-4 bg-white border-slate-200" v-for="(ex, i) in objectExam" :key="i">
            <div class="md:flex justify-between items-center space-y-4 md:space-y-0 space-x-2">
                <div class="flex items-start space-x-3 md:space-x-4">
                    <div class="w-9 h-9 shrink-0 mt-1">
                        <img class="w-6 h-6 rounded-full" src="../../static/image/svg/icon-03.svg" width="36" height="36"
                            alt="Company 01">
                    </div>
                    <div>
                        <button  v-if="ex.examResultInDTOS.find(result => result.user.userId ===
                                    user.userId) ? ex.examResultInDTOS.find(result => result.user.userId ===
                                        user.userId).resultScore : null"
                            class="inline-flex font-semibold text-slate-800 cursor-not-allowed">{{ ex.examTitle }}</button>

                        <router-link :to="`/courses/makeExam/${ex.examId}`" v-else
                            class="inline-flex font-semibold text-slate-800">{{ ex.examTitle }}</router-link>

               

                        <div class="text-sm"> Nota: {{ ex.examResultInDTOS.find(result => result.user.userId ===
                            user.userId) ? ex.examResultInDTOS.find(result => result.user.userId ===
                                user.userId).resultGrade : '-' }}

                            / Puntos: {{ ex.examResultInDTOS.find(result => result.user.userId ===
                                user.userId) ? ex.examResultInDTOS.find(result => result.user.userId ===
                                    user.userId).resultScore : '-' }}

                            / Tiempo estimado: 60 minutos</div>
                    </div>
                </div>
                <div class="flex items-center space-x-4 pl-10 md:pl-0">
                    <div class="text-sm text-slate-500 italic whitespace-nowrap">
                        {{
                            ex.examResultInDTOS.find(result => result.user.userId === user.userId)
                            ? moment(ex.examResultInDTOS.find(result => result.user.userId ===
                                user.userId).createdAtResult).format('ll')
                            : '-'
                        }}
                    </div>


                    <div class="text-xs inline-flex font-medium rounded-full text-center px-2.5 py-1 bg-emerald-100 text-emerald-600"
                        v-if="ex.examResultInDTOS.find(result => result.user.userId ===
                                    user.userId) ? ex.examResultInDTOS.find(result => result.user.userId ===
                                        user.userId).resultScore : null">Done</div>

                    <div class="text-xs inline-flex font-medium rounded-full text-center px-2.5 py-1 bg-rose-100 text-rose-600"
                        v-else>No hecho</div>
                    <button class="text-slate-300 hover:text-slate-400">
                        <span class="sr-only">Bookmark</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, onActivated, onMounted, toRefs, watch } from 'vue';
import { useExam } from "../../composables/Exams/UseExam.js";
import Exam from '@/components/Exams/ExamList.vue';
import { useStore } from 'vuex';
import moment from 'moment';
export default {
    props: {
        exams: {
            type: Object,
            default: () => { },
        },
        isEnroll: {
            type: Object,
            default: () => { },
        },
    },
    setup(props) {
        const { exams } = toRefs(props);
        const store = useStore()

        const { objectExam, addNewObjectExam, updateExamRequest, createExamRequest, responseWhenIsCreated } = useExam()

        const currentUserExamResult = computed(() => {
            const currentUser = store.state.user; // Asume que la información del usuario está en Vuex

            if (currentUser) {
                return exams.value.map(examenes => examenes.examResultInDTOS.find(result => result.user.userId === currentUser.userId));
            }

            return null;
        });

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
            user: computed(() => store.state.user),
            currentUserExamResult,
            moment

        }
    }
}
</script>

<style></style>