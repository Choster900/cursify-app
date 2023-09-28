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

    <!-- Singup action -->
    <div class="m-1.5">
        <ModalBlank id="feedback-modal" :modalOpen="singUpModalOpen" @close-modal="singUpModalOpen = false"
            title="Send Feedback">
            <div class="px-5 py-3 border-b border-slate-200">
                <div class="flex justify-between items-center">
                    <div class="font-semibold text-slate-800">Create account</div><button
                        class="text-slate-400 hover:text-slate-500">
                        <div class="sr-only">Close</div>
                        <svg class="w-4 h-4 fill-current" @click.stop="singUpModalOpen = false">
                            <path
                                d="M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
            <!-- Modal content -->
            <div class="px-5 py-4">
                <div class="space-y-3">
                    <div>
                        <label class="block text-sm font-medium mb-1" for="name">Email <span
                                class="text-rose-500">*</span></label>
                        <input v-model="email" id="email" class="form-input w-full px-2 py-1" type="text" required />
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-1" for="email">Password <span
                                class="text-rose-500">*</span></label>
                        <input v-model="password" id="password" class="form-input w-full px-2 py-1" type="password"
                            required />
                    </div>
                </div>
            </div>
            <!-- Modal footer -->
            <div class="px-5 py-4 border-t border-slate-200">
                <div class="flex flex-wrap justify-end space-x-2">
                    <button class="btn border-slate-200 hover:border-slate-300 text-slate-600"
                        @click.stop="singUpModalOpen = false">Cancel</button>
                    <button @click="handleSingupSubmit" class="btn bg-indigo-500 hover:bg-indigo-600 text-white">Sing
                        in</button>
                </div>
            </div>
        </ModalBlank>
        <!-- End -->
    </div>

    <!-- Login action -->
    <div class="m-1.5">
        <ModalBlank id="feedback-modal" :modalOpen="LoginModalOpen" @close-modal="LoginModalOpen = false"
            title="Send Feedback">
            <div class="px-5 py-3 border-b border-slate-200">
                <div class="flex justify-between items-center">
                    <div class="font-semibold text-slate-800">Login</div><button
                        class="text-slate-400 hover:text-slate-500">
                        <div class="sr-only">Close</div>
                        <svg class="w-4 h-4 fill-current" @click.stop="LoginModalOpen = false">
                            <path
                                d="M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
            <!-- Modal content -->
            <div class="px-5 py-4">
                <div class="space-y-3">
                    <div>
                        <label class="block text-sm font-medium mb-1" for="name">Email <span
                                class="text-rose-500">*</span></label>
                        <input v-model="email" id="email" class="form-input w-full px-2 py-1" type="text" required />
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-1" for="email">Password <span
                                class="text-rose-500">*</span></label>
                        <input v-model="password" id="password" class="form-input w-full px-2 py-1" type="password"
                            required />
                    </div>
                </div>
            </div>
            <!-- Modal footer -->
            <div class="px-5 py-4 border-t border-slate-200">
                <div class="flex flex-wrap justify-end space-x-2">
                    <button class="btn border-slate-200 hover:border-slate-300 text-slate-600"
                        @click.stop="LoginModalOpen = false">Cancel</button>
                    <button @click="handleLoginSubmit"
                        class="btn bg-indigo-500 hover:bg-indigo-600 text-white">Login</button>
                </div>
            </div>
        </ModalBlank>
        <!-- End -->
    </div>
</template>
<script>
import { ref } from 'vue'
import ModalBlank from './ModalBlank.vue'
import '@/assets/css/utility-patterns.css'
import { useStore } from 'vuex'

export default {
    components: { ModalBlank },
    setup() {
        const singUpModalOpen = ref(false)
        const LoginModalOpen = ref(false)
        const store = useStore()
        const email = ref('')
        const password = ref('')
        const handleSingupSubmit = async () => {
            try {
                await store.dispatch('signup', { email: email, password: password })
            } catch (error) {
                throw new Error("Could not complete singup action");
            }
        }
        const handleLoginSubmit = async () => {
            try {
                await store.dispatch('login', { email: email, password: password })
            } catch (error) {
                throw new Error("Could not complete singup action");
            }
        }
        return {
            singUpModalOpen,
            LoginModalOpen,
            email,
            password,
            handleSingupSubmit,
            handleLoginSubmit,
        }
    }
}
</script>

<style></style>