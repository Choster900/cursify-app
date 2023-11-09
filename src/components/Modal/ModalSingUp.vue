<template>
    <NewModal id="sing-up-modal" :show="SingUpModalIsOpen" @close="$emit('cerrar-modal')"
        modal-title="Expedientes del usuario" maxWidth="4xl">
        <div class="flex bg-white  shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
            <div class="hidden lg:block lg:w-1/2 bg-cover"
                style="background-image:url('https://images.pexels.com/photos/7862494/pexels-photo-7862494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')">
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
                    <span class="text-xs text-center text-gray-500 uppercase">Welcome!</span>
                    <span class="border-b w-1/5 lg:w-1/4"></span>
                </div>
                <form @submit.prevent="handleSingupSubmit">
                    <div class="mt-4 flex gap-2">
                        <div>
                            <label class="block text-gray-700 text-sm font-bold mb-2">First Name</label>
                            <input v-model="FirtsName"
                                class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                                type="text">
                            <span class="text-sm text-red-500">{{ FirtsNameEmpty }}</span>
                        </div>
                        <div>
                            <label class="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
                            <input v-model="LastName"
                                class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                                type="text">
                            <span class="text-sm text-red-500">{{ LastNameIsEmpty }}</span>
                        </div>
                    </div>

                    <div class="mt-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                        <input v-model="Email"
                            class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                            type="email">
                        <span class="text-sm text-red-500">{{ EmailIsEmpty }}</span>

                    </div>
                    <div class="mt-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input v-model="Password"
                            class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                            type="password">
                        <span class="text-sm text-red-500">{{ PasswordIsEmpty }}</span>

                    </div>
                    <div class="mt-4">
                        <label for="message"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Description</label>
                        <textarea id="message" rows="4" v-model="Description"
                            class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"></textarea>

                        <span class="text-sm text-red-500">{{ DescriptionIsEmpty }}</span>

                    </div>


                    <!--  <span class="text-sm text-red-500">{{ errorResponse }}</span> -->
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
    props: ['SingUpModalIsOpen'],
    setup() {
        const store = useStore()

        const Email = ref('')
        const Password = ref('')
        const FirtsName = ref('')
        const LastName = ref('')
        const Description = ref('')

        const EmailIsEmpty = ref('')
        const PasswordIsEmpty = ref('')
        const FirtsNameEmpty = ref('')
        const LastNameIsEmpty = ref('')
        const DescriptionIsEmpty = ref('')

        const errorResponse = ref('')
        const handleSingupSubmit = async () => {
            // Reiniciamos los mensajes de error
            EmailIsEmpty.value = '';
            PasswordIsEmpty.value = '';

            // Validamos que el email y password no estén vacíos
            if (!Email.value.trim()) {
                EmailIsEmpty.value = 'El email es requerido';
            }

            if (!Password.value.trim()) {
                PasswordIsEmpty.value = 'El password es requerido';
            }

            setTimeout(() => {
                EmailIsEmpty.value = '';
                PasswordIsEmpty.value = '';

            }, 3000);
            // Si hay algún error en los campos, no continuamos con el login
            if (EmailIsEmpty.value || PasswordIsEmpty.value) {
                return;
            }

            try {
                await store.dispatch('signup', { email: Email, password: Password, userName: FirtsName, userLastName: LastName, userDescription: Description })
            } catch (error) {
                console.error(error.error.response.data);
                errorResponse.value = error.error.response.data
                setTimeout(() => {
                    errorResponse.value = '';

                }, 3000);
            }
        };

        return {
            Email,
            Password,
            FirtsName,
            LastName,
            Description,
            handleSingupSubmit,
            EmailIsEmpty,
            PasswordIsEmpty,
            FirtsNameEmpty,
            LastNameIsEmpty,
            DescriptionIsEmpty,

        }
    }

}
</script>

<style></style>