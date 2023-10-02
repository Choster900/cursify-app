<template>
    <div class="blog-posts">
        <Breadcrumb slug="All Post" />
        <div class="py-section">
            <div class="container">
                <div class="sm:flex sm:justify-between sm:items-center mb-8"><!-- Left: Title -->
                    <div class="mb-4 sm:mb-0">
                        <h1 class="text-lg md:text-3xl text-slate-800 font-bold">My Created Courses</h1>
                    </div><!-- Right: Actions  -->
                    <div class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2"><!-- Search form -->
                        <form class="relative">
                            <label for="action-search" class="sr-only">Search</label>
                            <input id="action-search" class="form-input pl-9 focus:border-slate-300" type="search"
                                placeholder="Search…">
                            <button class="absolute inset-0 right-auto group" type="submit" aria-label="Search">
                                <svg class="w-4 h-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-3 mr-2"
                                    viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z">
                                    </path>
                                    <path
                                        d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z">
                                    </path>
                                </svg>
                            </button>
                        </form>
                        <!-- Add member button -->
                        <router-link to="/courses/create/1" class="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                            <svg class="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                                <path
                                    d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z">
                                </path>
                            </svg>
                            <span class="hidden xs:block ml-2">Create course</span>
                        </router-link>
                    </div>
                </div>
                <h1 class=" sr-only">All Posts XD</h1>
                <div>
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[40px]">
                        <PostCourseTwo v-for="curso in cursos" :key="curso.course_id" :course="curso" excerpt
                            text-variant="lg:text-2xl" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import Breadcrumb from '@/components/Elements/Breadcrumb.vue';
import PostCourseTwo from '@/components/PostCourses/PostCourseTwo.vue';

export default {
    name: 'MyCourses',
    components: {
        Breadcrumb, PostCourseTwo
    },
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