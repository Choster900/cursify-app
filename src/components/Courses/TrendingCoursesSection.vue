<template>
    <div class="trending py-section">
        <div class="container">
            <h2 class="text-2xl font-semibold  mb-12 leading-6">Trending Courses</h2>
            <div class="grid lg:grid-cols-2 gap-9">
                <article v-for="(course, i) in trendingCourses" :key="i" class="post md:flex items-center group">
                    <div class="post-image md:w-[250px] flex-shrink-0 flex-grow-0 rounded-[10px] overflow-hidden relative">
                        <router-link :to="`/blog/`">
                            <img :src="course.course_photo" alt="post.node.title"
                                class="object-cover h-full w-full group-hover:scale-125 transition-all duration-500">
                            <!--  <div v-if="post?.node?.video"
                                class="icon w-12 h-12 bg-primary border-2 border-white text-white text-xl absolute top-4 right-4 rounded-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20" fill="currentColor">
                                    <g>
                                        <path
                                            d="M42,21a4,4,0,0,0-2.34.75L35,25.06V24a5,5,0,0,0-5-5h-.23a8,8,0,1,0-10.54,0H14.46a6,6,0,1,0-8.75.19A5,5,0,0,0,2,24V38a5,5,0,0,0,5,5H30a5,5,0,0,0,5-5V36.94l4.63,3.31A4,4,0,0,0,46,37V25A4,4,0,0,0,42,21ZM18.5,13a6,6,0,1,1,6,6A6,6,0,0,1,18.5,13ZM10,11a4,4,0,1,1-4,4A4,4,0,0,1,10,11ZM33,38a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V24a3,3,0,0,1,3-3H30a3,3,0,0,1,3,3V38Zm11-1a2,2,0,0,1-3.21,1.65L35,34.49v-7l5.79-4.13A2,2,0,0,1,44,25Z" />
                                    </g>
                                </svg>
                            </div> -->
                        </router-link>
                    </div>
                    <div class="post-info md:pl-7 md:mt-0 mt-5">
                        <div class="flex items-center">
                            <router-link :to="`/categories/`"
                                class="category bg-[#edebf5] capitalize rounded-md px-4 py-1.5 mr-2 hover:bg-primary hover:text-white">
                                {{ course.category.category_name }}
                            </router-link>
                            <div class="date flex items-center ml-4 md:ml-6">
                                <i class="icofont-ui-calendar"></i>
                                <p class="pl-2">{{ $moment(course.created_at_course).format('DD MMM, YYYY') }}</p>
                            </div>
                        </div>
                        <h2 class="mb-0 text-lg !leading-relaxed pt-2 md:pt-5">
                            <router-link :to="`/blog/`" class="hover:text-primary">{{ course.course_name }}</router-link>
                        </h2>
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    setup() {
        const trendingCourses = [

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
            },
            {
                "course_id": 3,
                "user": {
                    "user_id": 3,
                    "user_name": "Alice",
                    "user_lastname": "Smith",
                    "user_email": "alice.smith@example.com",
                    "role_id": 2,
                    "created_at_user": "2023-09-17T10:30:00Z",
                    "modified_at_user": "2023-09-17T11:15:00Z"
                },
                "category": {
                    "category_id": 3,
                    "category_name": "Marketing",
                    "category_photo": "marketing.jpg",
                    "created_at_category": "2023-09-14T12:00:00Z",
                    "modified_at_category": "2023-09-14T12:30:00Z"
                },
                "course_name": "Marketing Digital Avanzado",
                "course_description": "Domina las estrategias de marketing digital para impulsar tu negocio.",
                "course_photo": "https://c8.alamy.com/compes/2f8g5k6/concepto-de-desarrollo-y-codificacion-web-sobre-fondo-morado-ilustracion-plana-de-un-espacio-de-trabajo-ocupado-por-programador-con-lenguajes-de-programacion-y-portatiles-2f8g5k6.jpg",
                "course_published": true,
                "created_at_course": "2023-09-16T11:45:00Z",
                "modified_at_course": "2023-09-16T12:20:00Z"
            },
            {
                "course_id": 4,
                "user": {
                    "user_id": 4,
                    "user_name": "Bob",
                    "user_lastname": "Johnson",
                    "user_email": "bob.johnson@example.com",
                    "role_id": 1,
                    "created_at_user": "2023-09-18T09:00:00Z",
                    "modified_at_user": "2023-09-18T09:30:00Z"
                },
                "category": {
                    "category_id": 4,
                    "category_name": "Idiomas",
                    "category_photo": "idiomas.jpg",
                    "created_at_category": "2023-09-15T12:00:00Z",
                    "modified_at_category": "2023-09-15T12:30:00Z"
                },
                "course_name": "Inglés para Negocios",
                "course_description": "Aprende inglés enfocado en el entorno de los negocios internacionales.",
                "course_photo": "https://img.freepik.com/fotos-premium/computadora-elementos-codigo-programa-pantalla-teclado-sobre-fondo-morado-3d_327483-661.jpg",
                "course_published": true,
                "created_at_course": "2023-09-17T15:45:00Z",
                "modified_at_course": "2023-09-17T16:20:00Z"
            }

        ]

        return {
            trendingCourses,
        }
    }


};
</script>
