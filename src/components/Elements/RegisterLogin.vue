<template>
    <div class="flex flex-wrap items-center -m-1.5">
        <div class="m-1.5">
            <button @click.stop="LoginModalOpen = true"
                class="py-2 px-6  border border-slate-700 text-slate-800 font-medium hover:bg-slate-100">
                Login
            </button>
        </div>
        <div class="m-1.5">
            <button @click.stop="singUpModalOpen = true"
                class="py-2 px-6 border rounded-sm border-slate-200 bg-[#3e4143] font-medium hover:bg-[#3e4143]/90 text-white">
                Sing up
            </button>
        </div>
    </div>

    <ModalSingUp :SingUpModalIsOpen="singUpModalOpen" @cerrar-modal="singUpModalOpen = false" />

    <ModalLogin :LoginModalIsOpen="LoginModalOpen" @cerrar-modal="LoginModalOpen = false" />
</template>
<script>
import { ref } from 'vue'
import '@/assets/css/utility-patterns.css'
import ModalLogin from '../Modal/ModalLogin.vue'
import ModalSingUp from '../Modal/ModalSingUp.vue'
export default {
    components: { ModalLogin, ModalSingUp },
    setup() {
        const singUpModalOpen = ref(false)
        const LoginModalOpen = ref(false)


        return {
            singUpModalOpen,
            LoginModalOpen,
        }
    }
}
</script>

<style></style>