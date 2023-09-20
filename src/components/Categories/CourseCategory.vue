<template>
    <div class="categories grid lg:grid-cols-1 sm:grid-cols-2 grid-cols-1 gap-5">
        <CategoryStyleCourse v-for="(category, index) in CategoryCourses" :key="index" :category="category"
            img-height="h-[125px]"/>
    </div>
</template>

<script>
import CategoryStyleCourse from './CategoryStyleCourse.vue'
export default {
    components: { CategoryStyleCourse },

    setup() {
        const CategoryCourses = [

            {
                "category_id": 1,
                "category_name": "Programming",
                "category_photo": "https://vue.thethemedemo.com/bunzo/wp-content/uploads/2022/04/4-2.jpg",
                "created_at_category": "2023-09-17T12:00:00Z",
                "modified_at_category": "2023-09-17T12:30:00Z"
            },
            {
                "category_id": 2,
                "category_name": "Design",
                "category_photo": "https://vue.thethemedemo.com/bunzo/wp-content/uploads/2022/04/5.jpg",
                "created_at_category": "2023-09-16T14:00:00Z",
                "modified_at_category": "2023-09-16T14:45:00Z"
            },
            {
                "category_id": 3,
                "category_name": "Marketing",
                "category_photo": "https://vue.thethemedemo.com/bunzo/wp-content/uploads/2022/04/3.jpg",
                "created_at_category": "2023-09-15T10:00:00Z",
                "modified_at_category": "2023-09-15T10:20:00Z"
            },
            {
                "category_id": 3,
                "category_name": "Marketing",
                "category_photo": "https://vue.thethemedemo.com/bunzo/wp-content/uploads/2022/04/6.jpg",
                "created_at_category": "2023-09-15T10:00:00Z",
                "modified_at_category": "2023-09-15T10:20:00Z"
            },


        ]
        return {
            CategoryCourses,
        }
    }
}
</script>

<style></style>