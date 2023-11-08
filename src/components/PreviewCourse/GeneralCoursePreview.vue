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
            <button class="buttonEnroll" v-if="!isEnroll && authIsReady" @click="$emit('enroll')">Enroll to this
                course</button>
        </section>
        <section>
            <h3 class="text-2xl leading-snug text-slate-800 font-bold mb-1">{{ cursoObject.courseName }}</h3>
            <div class="text-sm">
                {{ categories.find((cat, i) => cat.categoryId == categoryId) ? categories.find((cat, i) => cat.categoryId ==
                    categoryId).categoryName : '' }}
            </div>
        </section>
        <section class="">
            <h3 class="text-xl leading-snug text-slate-800 font-bold mb-1">Course Description</h3>
            <div class="text-sm">{{ courseDescription }}</div>
            <div class="flex flex-wrap mt-5">
                <div class="mr-2 w-2/3">
                    <label class="sr-only" for="email">Business email</label>
                </div>
            </div>
        </section>
        <div class="border-t border-slate-300">
            <h2 class="text-xl leading-snug text-slate-800 font-bold my-2">Comments ({{ curso.comments.length }})</h2>
            <ul class="space-y-5 my-6" v-for="(comment, i) in curso.comments" :key="i">
                <li class="flex items-start">
                    <a class="block mr-3 shrink-0" href="#0">
                        <img class="rounded-full"
                            :src="`https://ui-avatars.com/api/?name=${comment.user.userName}&background=001b47&color=fff&size=100`"
                            width="32" height="32" alt="User 07">
                    </a>
                    <div class="grow">
                        <div class="text-sm font-semibold text-slate-800 mb-2">{{ comment.user.userName }}</div>

                        <div class="italic">{{ comment.commentText }}</div>

                    </div>
                </li>

            </ul>
            <div v-if="isEnroll && authIsReady">
                <textarea id="comment" rows="4" v-model="commentText"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Course Description"></textarea>

                <button @click="pushInComments"
                    class="btn mt-1 border-slate-200 hover:border-slate-300 shadow-sm text-indigo-500">Comment</button>

            </div>
        </div>
    </div>
</template>

<script>
import { API_URL, IMAGE_PATH } from '@/config/config';
import { useCourse } from '@/composables/Courses/useCourse';
import { computed, onActivated, onDeactivated, onMounted, ref, toRefs, watch } from 'vue';
import { useFileHandling } from '@/composables/Courses/useFileHandling';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import axios from 'axios';
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
        const route = useRoute();

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
        const commentText = ref(null)
        const pushInComments = async () => {
            const courseId = route.params.courseId;
            const user = computed(() => store.state.user)

            curso.value.comments.push({
                "commentId": 1,
                "course": {},
                "commentText": commentText.value,
                "createdAtComment": null,
                user: {
                    "userId": user.value.userId,
                    "userName": user.value.userName,
                    "userLastName": user.value.userLastName,
                    "userEmail": user.value.userEmail,
                }
            })
            try {
                const resp = await axios.post(`${API_URL}/comments/`, {
                    "commentText": commentText.value,
                    "courseId": courseId,
                    "userId": user.value.userId
                });
                //isEnroll.value = resp.data;
                console.log(resp);
                commentText.value = null

            } catch (error) {
                //handleError(error);
                console.log(error);
            }




        }

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

            pushInComments,
            commentText,

            authIsReady: computed(() => store.state.authIsReady),
        }
    }
}
</script>
<style scoped>
.buttonEnroll {
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
    font-size: 15px;
    border-radius: 6px;
    font-weight: 500;
    color: var(--color);
}

.buttonEnroll:before {
    content: "";
    position: absolute;
    z-index: -1;
    background: var(--color);
    height: 150px;
    width: 200px;
    border-radius: 50%;
}

.buttonEnroll:hover {
    color: #fff;
}

.buttonEnroll:before {
    top: 100%;
    left: 100%;
    transition: all .7s;
}

.buttonEnroll:hover:before {
    top: -30px;
    left: -30px;
}

.buttonEnroll:active:before {
    background: #3a0ca3;
    transition: background 0s;
}
</style>