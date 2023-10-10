<template>
    <div class="blog-posts">
        <div class="py-section">
            <div class="container">
                <main>
                    <div class="px-4 sm:px-6 lg:px-8 py-8 md:py-0 w-full max-w-9xl mx-auto">
                        <div class="xl:flex">
                            <div class="md:flex flex-1">
                                <div
                                    class="flex flex-nowrap overflow-x-scroll no-scrollbar md:block md:overflow-auto px-3 py-6 border-b md:border-b-0 md:border-r border-slate-200 min-w-60 md:space-y-3">
                                    <div>
                                        <div class="text-xs font-semibold text-slate-400 uppercase mb-3">Course settings
                                        </div>
                                        <ul class="flex flex-nowrap md:block mr-3 md:mr-0">
                                            <li class="mr-0.5 md:mr-0 md:mb-0.5">
                                                <a class="flex items-center px-2.5 py-2 rounded whitespace-nowrap bg-indigo-50"  @click="activeMenu = 'general'"
                                                    href="#general">
                                                    <svg class="w-4 h-4 shrink-0 fill-current mr-2 text-indigo-400"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M12.311 9.527c-1.161-.393-1.85-.825-2.143-1.175A3.991 3.991 0 0012 5V4c0-2.206-1.794-4-4-4S4 1.794 4 4v1c0 1.406.732 2.639 1.832 3.352-.292.35-.981.782-2.142 1.175A3.942 3.942 0 001 13.26V16h14v-2.74c0-1.69-1.081-3.19-2.689-3.733zM6 4c0-1.103.897-2 2-2s2 .897 2 2v1c0 1.103-.897 2-2 2s-2-.897-2-2V4zm7 10H3v-.74c0-.831.534-1.569 1.33-1.838 1.845-.624 3-1.436 3.452-2.422h.436c.452.986 1.607 1.798 3.453 2.422A1.943 1.943 0 0113 13.26V14z">
                                                        </path>
                                                    </svg>
                                                    <span class="text-sm font-medium  text-indigo-500">General</span>
                                                </a>
                                            </li>
                                            <li class="mr-0.5 md:mr-0 md:mb-0.5">
                                                <a class="flex items-center px-2.5 py-2 rounded whitespace-nowrap" @click="activeMenu = 'content'"
                                                    href="#content">
                                                    <svg class="w-4 h-4 shrink-0 fill-current text-slate-400 mr-2"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M14.3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-8 8c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l8-8zM15 7c.6 0 1 .4 1 1 0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8c.6 0 1 .4 1 1s-.4 1-1 1C4.7 2 2 4.7 2 8s2.7 6 6 6 6-2.7 6-6c0-.6.4-1 1-1z">
                                                        </path>
                                                    </svg>
                                                    <span
                                                        class="text-sm font-medium text-slate-600 hover:text-slate-700">Content</span>
                                                </a>
                                            </li>

                                        </ul>
                                    </div>
                                    <div>
                                        <div class="text-xs font-semibold text-slate-400 uppercase mb-3">Experience</div>
                                        <ul class="flex flex-nowrap md:block mr-3 md:mr-0">
                                            <li class="mr-0.5 md:mr-0 md:mb-0.5">
                                                <a class="flex items-center px-2.5 py-2 rounded whitespace-nowrap"
                                                    href="/settings/feedback">
                                                    <svg class="w-4 h-4 shrink-0 fill-current text-slate-400 mr-2"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="M7.001 3h2v4h-2V3zm1 7a1 1 0 110-2 1 1 0 010 2zM15 16a1 1 0 01-.6-.2L10.667 13H1a1 1 0 01-1-1V1a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1zM2 11h9a1 1 0 01.6.2L14 13V2H2v9z">
                                                        </path>
                                                    </svg>
                                                    <span
                                                        class="text-sm font-medium text-slate-600 hover:text-slate-700">Give
                                                        Feedback</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="flex-1 md:ml-8 xl:mx-4 2xl:mx-8">
                                    <div class="md:py-8">
                                        <!-- Content course setting -->
                                        <ContentCourseSettings v-show="activeMenu === 'content'"/>
                                        <GeneralCourseSettings v-show="activeMenu === 'general'"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

            </div>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '@/components/Elements/Breadcrumb.vue';
import ContentCourseSettings from '@/components/Courses/SecctionsCourseSetting.vue';
import { ref } from 'vue';
import GeneralCourseSettings from '@/components/Courses/GeneralCourseSettings.vue';

export default {
    components: { Breadcrumb, ContentCourseSettings, GeneralCourseSettings },
    setup() {
        const activeIndex = ref(0);
        const activeMenu = ref("general");

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
            course,
            activeIndex,
            activeMenu
        }
    }
};
</script>

<style></style>
