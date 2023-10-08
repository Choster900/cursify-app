<template>
    <div class="categories grid lg:grid-cols-1 sm:grid-cols-2 grid-cols-1 gap-5">
        <CategoryStyleCourse v-for="(category, index) in categoriesObject.slice(0, 4)" :key="index" :category="category"
            img-height="h-[125px]"/>
    </div>
</template>

<script>
import CategoryStyleCourse from './CategoryStyleCourse.vue'
import useCategory from '@/composables/Category.vue/useCategory';

export default {
    components: { CategoryStyleCourse },

    setup() {
        const {categoriesObject} = useCategory()
        return {
            categoriesObject,
        }
    }
}
</script>

<style></style>