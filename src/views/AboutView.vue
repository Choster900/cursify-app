<template>
  <div class="about">
    <h1>{{ fileName }}</h1>

    <input v-model="categoryName" type="text"
      class="w-full outline-none focus:outline-none p-2 rounded appearance-none border-none"
      placeholder="En que estas pensando" />


    <input @change="fileChange" type="file" name="image" id="image"
      accept="image/gif,image/jpeg,image/png,image/jpg,image" />



    <div class="my-5">
      <img class="rounded-lg" v-if="url" :src="url" style="
                                max-width: 100%;
                                max-height: 400px;
                                margin: 0 auto;
                            " />
    </div>
  </div>

  <button @click="setImgToBack"
    class="w-full mt-5 text-center bg-blue-500 rounded text-white py-2 outline-none focus:outline-none hover:bg-blue-600">
    Publicar
  </button>


  <br><br><br><br><br><br><br><br><br><br>
</template>
<script>
import { ref } from 'vue'
import axios from 'axios'

export default {
  setup() {
    const categoryName = ref(null)
    const img = ref(null)
    const url = ref(null)
    const fileName = ref(null)

    const fileChange = (e) => {
      let file = e.target.files[0];
      img.value = file; // Update the ref value using .value
      url.value = URL.createObjectURL(file); // Update the ref value using .value
      fileName.value = file.name;
    }


    const setImgToBack = async (e) => {
      const formData = new FormData();
      formData.append("file", img.value);
      formData.append("categoryName", categoryName.value);
      formData.append("categoryPhoto", fileName.value);

      await axios
        .post("http://localhost:8080/v1/categories", formData, {
          headers: {
            "Content-Type": "multipart/form-data", //sin esto no se puede envari la iamgen
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((Error) => {
          console.log(Error);
        });
    }

    return {
      categoryName,
      fileName,
      img,
      url,
      fileChange,
      setImgToBack,
    }
  }
}
</script>
