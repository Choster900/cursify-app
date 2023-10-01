<template>
    <div class="blog-details-wrapper">
        <Breadcrumb link="My courses" url="my-courses" :slug="course.course_name" />

        <div v-if="!loading" class="details pt-section">
            <div class="container">
                <div class="grid grid-cols-1">
                    <CourseDetailsVue :course="course" />
                </div>
            </div>
        </div>
        <div v-else>
            <LoadingBar />
        </div>

        <Comment />
    </div>
</template>

<script>
import Breadcrumb from '@/components/Elements/Breadcrumb.vue';

import { ref } from 'vue';
import CourseDetailsVue from '@/components/PostCourses/CourseDetails.vue';

export default {
    components: {
        Breadcrumb,
        CourseDetailsVue
    },

    setup() {
        const course = ref({
            "course_id": 1,
            "user": {
                "user_id": 101,
                "user_name": "John",
                "user_lastname": "Doe",
                "user_email": "john.doe@example.com",
                "user_description": "Desarrollador web apasionado por JavaScript.",
                "user_password": "********",
                "user_photo": "john_doe.jpg",
                "role_id": 301,
                "created_at_user": "2023-09-29T15:30:00Z",
                "modified_at_user": "2023-09-30T11:45:00Z"
            },
            "category": {
                "category_id": 201,
                "category_name": "Desarrollo Web",
                "category_photo": "web_development.jpg",
                "created_at_category": "2023-09-28T12:00:00Z",
                "modified_at_category": "2023-09-29T09:30:00Z"
            },
            "sections": [
                {
                    "section_id": 1,
                    "section_title": "Seccion 1: Introducción a JavaScript",
                    "course_id": 1,
                    "created_at_section": "2023-10-01T10:00:00Z",
                    "modified_at_section": "2023-10-01T11:30:00Z",
                    "contents": [
                        {
                            "content_id": 101,
                            "content_name": "Introducción al Curso",
                            "content_type": "video",
                            "content_file_name": "intro_js.mp4",
                            "section_id": 1,
                            "created_at_content": "2023-10-01T10:15:00Z",
                            "modified_at_content": "2023-10-01T10:20:00Z"
                        },
                        {
                            "content_id": 102,
                            "content_name": "Notas de la Lección",
                            "content_type": "documento",
                            "content_file_name": "notas_leccion.pdf",
                            "section_id": 1,
                            "created_at_content": "2023-10-01T10:30:00Z",
                            "modified_at_content": "2023-10-01T10:35:00Z"
                        }
                    ]
                },
                {
                    "section_id": 2,
                    "section_title": "Seccion 2: Variables y Tipos de Datos",
                    "course_id": 1,
                    "created_at_section": "2023-10-02T09:00:00Z",
                    "modified_at_section": "2023-10-02T10:45:00Z",
                    "contents": [
                        {
                            "content_id": 103,
                            "content_name": "Variables y Constantes",
                            "content_type": "video",
                            "content_file_name": "variables_js.mp4",
                            "section_id": 2,
                            "created_at_content": "2023-10-02T09:15:00Z",
                            "modified_at_content": "2023-10-02T09:20:00Z"
                        },
                        {
                            "content_id": 104,
                            "content_name": "Ejercicios Prácticos",
                            "content_type": "documento",
                            "content_file_name": "ejercicios_practicos.pdf",
                            "section_id": 2,
                            "created_at_content": "2023-10-02T09:30:00Z",
                            "modified_at_content": "2023-10-02T09:35:00Z"
                        }
                    ]
                },
                {
                    "section_id": 3,
                    "section_title": "Seccion 3: Estructuras de Control",
                    "course_id": 1,
                    "created_at_section": "2023-10-03T11:00:00Z",
                    "modified_at_section": "2023-10-03T12:30:00Z",
                    "contents": [
                        {
                            "content_id": 105,
                            "content_name": "If-Else y Switch",
                            "content_type": "video",
                            "content_file_name": "ifelse_switch_js.mp4",
                            "section_id": 3,
                            "created_at_content": "2023-10-03T11:15:00Z",
                            "modified_at_content": "2023-10-03T11:20:00Z"
                        },
                        {
                            "content_id": 106,
                            "content_name": "Ejercicios de Control",
                            "content_type": "documento",
                            "content_file_name": "ejercicios_control.pdf",
                            "section_id": 3,
                            "created_at_content": "2023-10-03T11:30:00Z",
                            "modified_at_content": "2023-10-03T11:35:00Z"
                        }
                    ]
                },
                {
                    "section_id": 4,
                    "section_title": "Seccion 4: Funciones en JavaScript",
                    "course_id": 1,
                    "created_at_section": "2023-10-04T09:00:00Z",
                    "modified_at_section": "2023-10-04T10:45:00Z",
                    "contents": [
                        {
                            "content_id": 107,
                            "content_name": "Introducción a Funciones",
                            "content_type": "video",
                            "content_file_name": "intro_funciones_js.mp4",
                            "section_id": 4,
                            "created_at_content": "2023-10-04T09:15:00Z",
                            "modified_at_content": "2023-10-04T09:20:00Z"
                        },
                        {
                            "content_id": 108,
                            "content_name": "Ejercicios de Funciones",
                            "content_type": "documento",
                            "content_file_name": "ejercicios_funciones.pdf",
                            "section_id": 4,
                            "created_at_content": "2023-10-04T09:30:00Z",
                            "modified_at_content": "2023-10-04T09:35:00Z"
                        }
                    ]
                },
                {
                    "section_id": 5,
                    "section_title": "Seccion 5: Eventos en JavaScript",
                    "course_id": 1,
                    "created_at_section": "2023-10-05T08:00:00Z",
                    "modified_at_section": "2023-10-05T09:45:00Z",
                    "contents": [
                        {
                            "content_id": 109,
                            "content_name": "Eventos de Usuario",
                            "content_type": "video",
                            "content_file_name": "eventos_usuario_js.mp4",
                            "section_id": 5,
                            "created_at_content": "2023-10-05T08:15:00Z",
                            "modified_at_content": "2023-10-05T08:20:00Z"
                        },
                        {
                            "content_id": 110,
                            "content_name": "Ejercicios de Eventos",
                            "content_type": "documento",
                            "content_file_name": "ejercicios_eventos.pdf",
                            "section_id": 5,
                            "created_at_content": "2023-10-05T08:30:00Z",
                            "modified_at_content": "2023-10-05T08:35:00Z"
                        }
                    ]
                }
            ],
            "course_name": "Curso Avanzado de Programación en JavaScript",
            "course_description": "Aprende a programar en JavaScript desde los conceptos básicos hasta las técnicas avanzadas. Este curso te llevará desde cero hasta convertirte en un experto en JavaScript. Con proyectos prácticos y ejercicios desafiantes, estarás preparado para construir aplicaciones web completas.",
            "course_photo": "https://vue.thethemedemo.com/bunzo/wp-content/uploads/2022/04/9.jpg",
            "course_published": true,
            "created_at_course": "2023-09-30T08:00:00Z",
            "modified_at_course": "2023-09-30T10:30:00Z"
        })
        return {
            course
        }
    }
}
</script>