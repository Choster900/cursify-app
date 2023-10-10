<!-- <template>
    <div class="flex gap-2 mb-2">
        <div class="h-56 border-[3px] border-dashed flex items-center justify-center w-1/2 cursor-pointer"
            @dragover.prevent="handleDragOver" @drop="handleDrop" @click="openFileInputs(j)">
            <div class="flex flex-col items-center justify-center text-center ">
                <svg class="w-16" viewBox="0 0 1024 1024" fill="#000000">
                    <path
                        d="M768 810.7c-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7c94.1 0 170.7-76.6 170.7-170.7 0-89.6-70.1-164.3-159.5-170.1L754 383l-10.7-22.7c-42.2-89.3-133-147-231.3-147s-189.1 57.7-231.3 147L270 383l-25.1 1.6c-89.5 5.8-159.5 80.5-159.5 170.1 0 94.1 76.6 170.7 170.7 170.7 23.6 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.7 42.7c-141.2 0-256-114.8-256-256 0-126.1 92.5-232.5 214.7-252.4C274.8 195.7 388.9 128 512 128s237.2 67.7 297.3 174.2C931.5 322.1 1024 428.6 1024 554.7c0 141.1-114.8 256-256 256z"
                        fill="#3688FF"></path>
                    <path
                        d="M640 789.3c-10.9 0-21.8-4.2-30.2-12.5L512 679l-97.8 97.8c-16.6 16.7-43.7 16.7-60.3 0-16.7-16.7-16.7-43.7 0-60.3l128-128c16.6-16.7 43.7-16.7 60.3 0l128 128c16.7 16.7 16.7 43.7 0 60.3-8.4 8.4-19.3 12.5-30.2 12.5z"
                        fill="#5F6379"></path>
                    <path
                        d="M512 960c-23.6 0-42.7-19.1-42.7-42.7V618.7c0-23.6 19.1-42.7 42.7-42.7s42.7 19.1 42.7 42.7v298.7c0 23.5-19.1 42.6-42.7 42.6z"
                        fill="#5F6379"></path>
                </svg>
                <p class="font-semibold w-32">Drag a file here or browse a file to upload</p>
                <input type="file" :ref="fileInputs[j]" accept="image/gif,image/jpeg,image/png,image/jpg,image"
                    style="display: none;" @change="handleFileChange(j)">
            </div>
        </div>
        {{ coursePhoto }}
        <div class="w-1/2">
            <div>
                <div>
                    <label class="block text-sm font-medium mb-1" for="supporting-text">Nombre del
                        contenido</label>
                    <input id="supporting-text" class="form-input w-full" type="text">
                </div>
                <div class="text-xs mt-1">Con este nombre tus estudiantes veran el contenido !</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style></style> -->
<template>
    <div>
        <input type="file" ref="fileInput" style="display: none;" @change="handleFileChange" accept="video/*" />
        <div class="w-1/2 h-52 border-[3px] border-dashed flex items-center justify-center  cursor-pointer"
            v-if="!urlVideoFile" @dragover.prevent="handleDragOver" @drop="handleDrop" @click="openFileInput">
            <!-- Contenido del dropzone -->
            <div class="flex flex-col items-center justify-center text-center ">
                <svg class="w-16" viewBox="0 0 1024 1024" fill="#000000">
                    <path
                        d="M768 810.7c-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7c94.1 0 170.7-76.6 170.7-170.7 0-89.6-70.1-164.3-159.5-170.1L754 383l-10.7-22.7c-42.2-89.3-133-147-231.3-147s-189.1 57.7-231.3 147L270 383l-25.1 1.6c-89.5 5.8-159.5 80.5-159.5 170.1 0 94.1 76.6 170.7 170.7 170.7 23.6 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.7 42.7c-141.2 0-256-114.8-256-256 0-126.1 92.5-232.5 214.7-252.4C274.8 195.7 388.9 128 512 128s237.2 67.7 297.3 174.2C931.5 322.1 1024 428.6 1024 554.7c0 141.1-114.8 256-256 256z"
                        fill="#3688FF"></path>
                    <path
                        d="M640 789.3c-10.9 0-21.8-4.2-30.2-12.5L512 679l-97.8 97.8c-16.6 16.7-43.7 16.7-60.3 0-16.7-16.7-16.7-43.7 0-60.3l128-128c16.6-16.7 43.7-16.7 60.3 0l128 128c16.7 16.7 16.7 43.7 0 60.3-8.4 8.4-19.3 12.5-30.2 12.5z"
                        fill="#5F6379"></path>
                    <path
                        d="M512 960c-23.6 0-42.7-19.1-42.7-42.7V618.7c0-23.6 19.1-42.7 42.7-42.7s42.7 19.1 42.7 42.7v298.7c0 23.5-19.1 42.6-42.7 42.6z"
                        fill="#5F6379"></path>
                </svg>
                <p class="font-semibold w-32">Drag a file here or browse a file to upload</p>

            </div>
        </div>
        <div class=" flex justify-between" v-else>
            <video width="490" height="232" :src="urlVideoFile" controls class="rounded-md object-cover"></video>
            <button class=" border-slate-200 justify-start hover:border-slate-300" @click="urlVideoFile = ''; contentFile = '';">
                <svg
                    class="w-4 h-4 fill-current text-rose-500 shrink-0" viewBox="0 0 16 16">
                    <path
                        d="M5 7h2v6H5V7zm4 0h2v6H9V7zm3-6v2h4v2h-1v10c0 .6-.4 1-1 1H2c-.6 0-1-.4-1-1V5H0V3h4V1c0-.6.4-1 1-1h6c.6 0 1 .4 1 1zM6 2v1h4V2H6zm7 3H3v9h10V5z">
                    </path>
                </svg>
            </button>
        </div>
        <div class="w-1/2 pt-4">
            <div>
                <div>
                    <label class="block text-sm font-medium mb-1" for="supporting-text">Nombre del
                        contenido</label>
                    <input id="supporting-text" class="form-input w-full" type="text">
                </div>
                <!-- <div class="text-xs mt-1">Con este nombre tus estudiantes veran el contenido !</div> -->
            </div>
        </div>

    </div>
</template>
  
<script>
import { ref } from 'vue';

export default {
    setup() {
        const fileInput = ref(null);
        const contentFile = ref(null);
        const contentVideo = ref(null);
        const urlVideoFile = ref(null);

        const openFileInput = () => {
            fileInput.value.click();
        };

        const handleFileChange = () => {
            const selectedFile = fileInput.value.files[0];
            if (selectedFile) {
                setImageData(selectedFile);
                // Lógica para manejar el archivo seleccionado
            }
        };

        const handleDragOver = (event) => {
            event.preventDefault();
        };

        const handleDrop = (event) => {
            event.preventDefault();
            const selectedFile = event.dataTransfer.files[0];
            if (selectedFile) {
                setImageData(selectedFile);
                // Lógica para manejar el archivo seleccionado
            }
            fileInput.value = null;

        };
        const setImageData = (selectedFile) => {
            contentFile.value = selectedFile;
            urlVideoFile.value = URL.createObjectURL(selectedFile);
            contentVideo.value = selectedFile.name
            console.log('Archivo seleccionado:', selectedFile.name);
        };

        return {
            fileInput,
            openFileInput,
            handleFileChange,
            handleDragOver,
            handleDrop,
            contentFile,
            urlVideoFile,
            contentVideo
        };
    }
};
</script>
  
<style scoped>/* Estilos específicos si es necesario */</style>
  