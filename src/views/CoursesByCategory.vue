<template>
    <div class="category-page-wrapper">
        <div class="py-section">
            <div class="container">
                <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-x-[30px] gap-y-9" v-if="courseByCategoryIdArray != ''">
                    <PostCourseTwo v-for="(post, index) in courseByCategoryIdArray" :key="index" :course="post" excerpt text-variant="lg:text-2xl" />
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
import { onActivated, onDeactivated } from 'vue';
import LoadingBar from '@/utilities/LoadingBar.vue';
export default {
    components: {
        PostCourseTwo,
        LoadingBar,
    },
    setup() {
        const { courseByCategoryIdArray, getCourseByCategory,isLoading } = useCourse()
        onActivated(async () => {
            getCourseByCategory()
        })
        onDeactivated(() => {
            courseByCategoryIdArray.value = null
        })
        return {
            courseByCategoryIdArray,
            isLoading,
        }
    }

}
</script>