<template>
    <div class="categories-wrapper">
        <div class="categories py-section">
            <div class="container">
                <div class="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                    <CategoryStyleCourse v-for="(category, index) in categoriesObject" :key="index" :category="category" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CategoryStyleCourse from '@/components/Categories/CategoryStyleCourse.vue';
import useCategory from '@/composables/Category.vue/useCategory';

export default {
    components: {
        CategoryStyleCourse
    },
    setup() {
        const { categoriesObject } = useCategory();
        
        return {
            categoriesObject
        }
    }
}
</script>