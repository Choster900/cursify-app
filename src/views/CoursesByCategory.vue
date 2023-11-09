<template>
    <div class="category-page-wrapper">
        <div class="py-section">
            <div class="container">
                <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-x-[30px] gap-y-9" v-if="courseByCategoryIdArray != ''">
                    <PostCourseTwo v-for="(post, index) in courseByCategoryIdArray" :key="index" :course="post" excerpt
                        text-variant="lg:text-2xl" />
                </div>
                <div v-else class="text-center">
                    <h5>OOPS! There are no courses.</h5>
                </div>
            </div>
            <loading-bar v-if="isLoading"></loading-bar>
        </div>
    </div>
</template>
<script>
import PostCourseTwo from '@/components/PostCourses/PostCourseTwo.vue';
import { useCourse } from '@/composables/Courses/useCourse';
import { onActivated, onDeactivated, watch } from 'vue';
import LoadingBar from '@/utilities/LoadingBar.vue';
import { useRoute } from 'vue-router';
export default {
    components: {
        PostCourseTwo,
        LoadingBar,
    },
    setup() {
        const { courseByCategoryIdArray, getCourseByCategory, isLoading } = useCourse()
        const route = useRoute(); // Obtener la ruta actual
        let categoryId = route.params.categoryId; // Obtener el categoryId de la ruta
        onActivated(async () => {
            getCourseByCategory()
        })
        onDeactivated(() => {
            courseByCategoryIdArray.value = null
        })
        // Aqui da error por que al sair de la ruta actual hace una nueva peticion, pero aun funciona
        watch(() => route.params.categoryId, (newCategoryId, oldCategoryId) => {
            if (newCategoryId !== oldCategoryId) {
                getCourseByCategory();
            }
        });
        return {
            courseByCategoryIdArray,
            isLoading,
        }
    }

}
</script>