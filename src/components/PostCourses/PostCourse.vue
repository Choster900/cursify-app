<template>
    <div class="bg-gray-light py-section">
        <div class="container">
            <div class="grid grid-cols-12 gap-7">
                <div class="lg:col-span-3 col-span-12">
                    <CourseCategory />
                </div>
                <div class="lg:col-span-9 col-span-12 space-y-[30px]">
                    <CourseOne v-for="(curso, index) in cursos" :key="index" :cursos="curso" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CourseCategory from '../Categories/CourseCategory.vue'
import CourseOne from '../Courses/Course.vue'
export default {
    components: { CourseCategory, CourseOne },
    setup() {
        const cursos = [

            {
                "course_id": 1,
                "user": {
                    "user_id": 1,
                    "user_name": "John",
                    "user_lastname": "Doe",
                    "user_email": "john.doe@example.com",
                    "role_id": 1,
                    "created_at_user": "2023-09-18T08:00:00Z",
                    "modified_at_user": "2023-09-18T08:30:00Z"
                },
                "category": {
                    "category_id": 1,
                    "category_name": "Programación",
                    "category_photo": "programacion.jpg",
                    "created_at_category": "2023-09-15T11:00:00Z",
                    "modified_at_category": "2023-09-15T11:30:00Z"
                },
                "course_name": "Introducción a la Programación",
                "course_description": "Un curso introductorio para aprender a programar.",
                "course_photo": "https://vue.thethemedemo.com/bunzo/wp-content/uploads/2022/04/6-1.jpg",
                "course_published": true,
                "created_at_course": "2023-09-17T14:30:00Z",
                "modified_at_course": "2023-09-17T15:15:00Z"
            },
            {
                "course_id": 2,
                "user": {
                    "user_id": 2,
                    "user_name": "Jane",
                    "user_lastname": "Smith",
                    "user_email": "jane.smith@example.com",
                    "role_id": 2,
                    "created_at_user": "2023-09-17T10:00:00Z",
                    "modified_at_user": "2023-09-17T10:45:00Z"
                },
                "category": {
                    "category_id": 2,
                    "category_name": "Diseño",
                    "category_photo": "diseno.jpg",
                    "created_at_category": "2023-09-14T09:30:00Z",
                    "modified_at_category": "2023-09-14T10:00:00Z"
                },
                "course_name": "Diseño de Interfaces de Usuario",
                "course_description": "Aprende a diseñar interfaces de usuario atractivas y funcionales.",
                "course_photo": "https://vue.thethemedemo.com/bunzo/wp-content/uploads/2022/04/1-2.jpg",
                "course_published": true,
                "created_at_course": "2023-09-16T10:45:00Z",
                "modified_at_course": "2023-09-16T11:20:00Z"
            }
        ]

        return {
            cursos,
        }
    }
}
</script>

<style></style>