// En un archivo llamado useCourseSettings.js
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { API_URL } from '@/config/config';
import { useRoute } from 'vue-router';

export const useCourseSettings = (courseId) => {
  const activeMenu = ref("general");
  const courseDetails = ref(null);
  
  const getCourseWithDetails = async () => {
    try {
      const resp = await axios.get(`${API_URL}/courses/findCourseByIdWithDetails/${courseId}`);
      courseDetails.value = resp.data; // Guardamos los detalles del curso
    } catch (error) {
      handleError(error);
    }
  };

  const handleError = (error) => {
    console.error(error);
    if (error.response && (error.response.status === 404 || error.response.status == 400)) {
      console.log(error.response.status);
      // Puedes mostrar un mensaje al usuario o redirigirlo a una página específica
    }
  };

  onMounted(async () => {
    try {
      await getCourseWithDetails();
    } catch (error) {
      handleError(error);
    }
  });

  return {
    activeMenu,
    courseDetails
  };
};
