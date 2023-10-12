import { ref } from "vue";

export const useSection = () => {
    const objectCourse = ref([])

    return {
        objectCourse,
    }
};
