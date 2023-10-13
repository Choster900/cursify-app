import axios from "axios";
import { ref } from "vue";

export const useContent = () => {
  const objectSeccionContent = ref([]);

  const contentFileName = ref(null);
  const fileVideoContent = ref(null);
  const contentName = ref(null);
  const contentType = ref(null);
  const sectionId = ref(null);
  const contentId = ref(null);

  const modifiedContentIntoCourseRequest = () => {
    console.log({
      contentName: contentName.value,
      contentFileName: contentFileName.value,
      fileVideoContent: fileVideoContent.value,
      contentType: contentType.value,
      sectionId: sectionId.value,
      contentId: contentId.value,
    });

    /* return new Promise(async (resolve, reject) => {
            try {
                const formData = new FormData();
                formData.append("contentFileName", contentFileName.value);
                formData.append("file", fileVideoContent.value);
                formData.append("contentName", contentName.value);
                formData.append("contentType", contentType.value);
                formData.append("sectionId", sectionId.value);

                const resp = await axios.put(`${API_URL}/sectionContent/${contentId.value}`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });

                console.log(resp);
                resolve(resp);
            } catch (error) {
                console.error(error);
                reject(error);
            }
        }); */
  };

  return {
    modifiedContentIntoCourseRequest,
    objectSeccionContent,
    contentFileName,
    fileVideoContent,
    contentName,
    contentType,
    sectionId,
    contentId,
  };
};
