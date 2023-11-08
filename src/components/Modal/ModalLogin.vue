<template>
    <NewModal id="login-modal" :show="LoginModalIsOpen" @close="$emit('cerrar-modal')" modal-title="Expedientes del usuario"
        maxWidth="4xl">
        <div class="flex bg-white  shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
            <div class="hidden lg:block lg:w-1/2 bg-cover"
                style="background-image:url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')">
            </div>
            <div class="w-full p-8 lg:w-1/2">
                <div class="-mt-4 -mr-3 border-slate-200">
                    <div class="flex justify-end items-center">
                        <button @click.stop="$emit('cerrar-modal')" class="text-slate-400 hover:text-slate-500">
                            <div class="sr-only">Close</div>
                            <svg class="w-4 h-4 fill-current">
                                <path
                                    d="M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
                <h2 class="text-2xl font-semibold text-gray-700 text-center">Cursify</h2>
                <div class="mt-4 flex items-center justify-between">
                    <span class="border-b w-1/5 lg:w-1/4"></span>
                    <span class="text-xs text-center text-gray-500 uppercase">Welcome back!</span>
                    <span class="border-b w-1/5 lg:w-1/4"></span>
                </div>
                <form @submit.prevent="handleLoginSubmit">
                    <div class="mt-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                        <input v-model="email"
                            class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                            type="email">
                        <span class="text-sm text-red-500">{{ emailIsEmpty }}</span>

                    </div>
                    <div class="mt-4">
                        <div class="flex justify-between">
                            <label class="block text-gray-700 text-sm font-bold mb-2">Password</label>
                            <a href="#" class="text-xs text-gray-500">Forget Password?</a>
                        </div>
                        <input v-model="password"
                            class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                            type="password">
                        <span class="text-sm text-red-500">{{ passwordIsEmpty }}</span>

                    </div>

                    <span class="text-sm text-red-500">{{ errorResponse }}</span>
                    <div class="mt-8">
                        <!--                      <button type="reset"
                            class="btn border-slate-200 hover:border-slate-300 text-slate-600">Cancel</button> -->
                        <button type="submit"
                            class="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Login</button>
                    </div>
                </form>

                <div class="mt-4 flex items-center justify-between">
                    <span class="border-b w-1/5 md:w-1/4"></span>
                    <a href="#" class="text-xs text-gray-500 uppercase">or sign up</a>
                    <span class="border-b w-1/5 md:w-1/4"></span>
                </div>
            </div>
        </div>
    </NewModal>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import ModalBlank from '../Elements/ModalBlank.vue';
import NewModal from '../Elements/NewModal.vue';
export default {
    components: { ModalBlank, ModalBlank, NewModal },
    props: ['LoginModalIsOpen'],
    setup() {
        const store = useStore()
        const email = ref('')
        const password = ref('')
        const emailIsEmpty = ref('')
        const passwordIsEmpty = ref('')
        const errorResponse = ref('')
        const handleLoginSubmit = async () => {
            // Reiniciamos los mensajes de error
            emailIsEmpty.value = '';
            passwordIsEmpty.value = '';

            // Validamos que el email y password no estén vacíos
            if (!email.value.trim()) {
                emailIsEmpty.value = 'El email es requerido';
            }

            if (!password.value.trim()) {
                passwordIsEmpty.value = 'El password es requerido';
            }

            setTimeout(() => {
                emailIsEmpty.value = '';
                passwordIsEmpty.value = '';

            }, 3000);
            // Si hay algún error en los campos, no continuamos con el login
            if (emailIsEmpty.value || passwordIsEmpty.value) {
                return;
            }

            try {
                await store.dispatch('login', { email: email, password: password });
            } catch (error) {
                console.error(error.error.response.data);
                errorResponse.value = error.error.response.data
                setTimeout(() => {
                    errorResponse.value = '';

                }, 3000);
            }
        };

        return {
            email,
            password,
            handleLoginSubmit,
            emailIsEmpty,
            passwordIsEmpty,
            errorResponse,
        }
    }

}
</script>

<style></style>