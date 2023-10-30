<template>
    <div class="p-6 space-y-1">
        <h2 class="text-2xl text-slate-800 font-bold ">General Information</h2>
        <span>Designing an Earth-positive future, together 🌿</span>
        <section>
            <div class="flex items-center">
                <div class="mr-4">
                    <div class="text-sm text-slate-800 space-y-2 mb-5">
                        <div class="relative !my-4">
                            <div class="relative w-2/3 rounded-lg overflow-hidden">
                                <img class="block w-full" :src="`${IMAGE_PATH}/${cursoObject.coursePhoto}`" alt="Feed 01">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button v-if="!isEnroll && authIsReady" @click="$emit('enroll')">Enroll to this course</button>
        </section>
        <section>
            <h3 class="text-2xl leading-snug text-slate-800 font-bold mb-1">{{ cursoObject.courseName }}</h3>
            <div class="text-sm">
                {{ categories.find((cat, i) => cat.categoryId == categoryId) ? categories.find((cat, i) => cat.categoryId ==
                    categoryId).categoryName : '' }}
            </div>
        </section>
        <section>
            <h3 class="text-xl leading-snug text-slate-800 font-bold mb-1">Course Description</h3>
            <div class="text-sm">{{ courseDescription }}</div>
            <div class="flex flex-wrap mt-5">
                <div class="mr-2 w-2/3">
                    <label class="sr-only" for="email">Business email</label>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { IMAGE_PATH } from '@/config/config';
import { useCourse } from '@/composables/Courses/useCourse';
import { computed, onActivated, onDeactivated, onMounted, toRefs, watch } from 'vue';
import { useFileHandling } from '@/composables/Courses/useFileHandling';
import { useStore } from 'vuex';
export default {
    props: {
        curso: {
            type: Object,
            default: () => { },
        },
        categories: {
            type: Object,
            default: () => { },
        },
        isEnroll: {
            type: Object,
            default: () => { },
        },
    },
    setup(props) {
        const { curso } = toRefs(props);
        const store = useStore()

        const {
            courseName,
            categoryId,
            courseFile,
            coursePhoto,
            courseDescription,
            updateCourseRequest,
            courseId,
            updateQuestionCourse,
        } = useCourse();

        const handleFileChange_NOCOMPOSABLE = () => {
            handleFileChange();
            coursePhoto.value = fileNameHandlingCoursePhoto.value
            courseFile.value = fileHandlingCourseFile.value
        }

        const {
            fileInput,
            handleDrop,
            urlImageFile,
            openFileInput,
            handleDragOver,
            handleFileChange,
            courseFile: fileHandlingCourseFile,
            coursePhoto: fileNameHandlingCoursePhoto,
        } = useFileHandling();

        onDeactivated(() => {
            urlImageFile.value = null
            fileNameHandlingCoursePhoto.value = null
        })
        watch(curso, async () => {
            //alert("cambio")
            if (curso.value) {
                const { category, courseName: name, courseDescription: description, coursePhoto: photo, courseId: id } = curso.value;
                categoryId.value = category.categoryId;
                courseName.value = name;
                courseDescription.value = description;

                const partes = photo.split("/");
                coursePhoto.value = partes[partes.length - 1];

                courseId.value = id;
            }
        })
        onMounted(async () => {
            if (curso.value) {
                const { category, courseName: name, courseDescription: description, coursePhoto: photo, courseId: id } = curso.value;
                categoryId.value = category.categoryId;
                courseName.value = name;
                courseDescription.value = description;

                const partes = photo.split("/");
                coursePhoto.value = partes[partes.length - 1];

                courseId.value = id;
            }
        });
        onActivated(async () => {
            if (curso.value) {
                const { category, courseName: name, courseDescription: description, coursePhoto: photo, courseId: id } = curso.value;
                categoryId.value = category.categoryId;
                courseName.value = name;
                courseDescription.value = description;

                const partes = photo.split("/");
                coursePhoto.value = partes[partes.length - 1];

                courseId.value = id;
            }
        });

        return {
            cursoObject: curso,
            IMAGE_PATH,
            courseName,
            categoryId,
            courseFile,
            coursePhoto,
            courseDescription,
            courseId,
            updateQuestionCourse,

            fileInput,
            handleDrop,
            urlImageFile,
            openFileInput,
            handleDragOver,
            handleFileChange,
            fileHandlingCourseFile,
            fileNameHandlingCoursePhoto,

            updateCourseRequest,
            handleFileChange_NOCOMPOSABLE,

            authIsReady: computed(() => store.state.authIsReady),
        }
    }
}
</script>
<style scoped>
button {
    --color: #5138ee;
    font-family: inherit;
    display: inline-block;
    width: 10em;
    height: 2.6em;
    line-height: 2.5em;
    position: relative;
    overflow: hidden;
    border: 2px solid var(--color);
    transition: color .5s;
    z-index: 1;
    font-size: 17px;
    border-radius: 6px;
    font-weight: 500;
    color: var(--color);
}

button:before {
    content: "";
    position: absolute;
    z-index: -1;
    background: var(--color);
    height: 150px;
    width: 200px;
    border-radius: 50%;
}

button:hover {
    color: #fff;
}

button:before {
    top: 100%;
    left: 100%;
    transition: all .7s;
}

button:hover:before {
    top: -30px;
    left: -30px;
}

button:active:before {
    background: #3a0ca3;
    transition: background 0s;
}
</style>