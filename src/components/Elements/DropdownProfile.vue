<template>
    <div class="relative inline-flex">
        <button ref="trigger" class="inline-flex justify-center items-center group" aria-haspopup="true"
            @click.prevent="dropdownOpen = !dropdownOpen" :aria-expanded="dropdownOpen">
            <img class="w-8 h-8 rounded-full" :src="userPhoto" width="32" height="32" alt="User" />
            <div class="flex items-center truncate">
                <span
                    style="display: inline-block; max-width: 250px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"
                    class="truncate ml-2 font-semibold group-hover:text-primary py-7 text-heading-light group-hover:text-slate-800">
                    {{ userInformations.userName }} {{ userInformations.userLastName }}</span>
                <svg class="w-3 h-3 shrink-0 ml-2 mb-1 fill-current text-slate-400" viewBox="0 0 12 12">
                    <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                </svg>
            </div>
        </button>
        <transition enter-active-class="transition ease-out duration-200 transform"
            enter-from-class="opacity-0 -translate-y-2" enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-out duration-200" leave-from-class="opacity-100" leave-to-class="opacity-0">
            <div v-show="dropdownOpen"
                class="origin-top-right z-10 absolute top-full min-w-44 w-full bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1"
                :class="align === 'right' ? 'right-0' : 'left-0'">
                <div class="pt-0.5 pb-2 px-3 mb-1 border-b border-slate-200">
                    <div class="font-medium text-slate-800">Cursify v1.0.0</div>
                </div>
                <ul ref="dropdown" @focusin="dropdownOpen = true" @focusout="dropdownOpen = false">
                    <li>
                        <router-link
                            class="font-medium text-sm text-slate-700 hover:text-indigo-600 flex items-center py-1 px-3"
                            to="/courses/my-courses" @click="dropdownOpen = false">Teaching Dashboard</router-link>
                    </li>
                    <li>
                        <router-link
                            class="font-medium text-sm text-slate-700 hover:text-indigo-600 flex items-center py-1 px-3"
                            to="/courses/my-enrollment" @click="dropdownOpen = false">Learning Dashboard</router-link>
                    </li>
                    <li>
                        <button
                            class="font-medium text-sm text-slate-700 hover:text-indigo-600 flex items-center py-1 px-3"
                            to="/signin" @click="dropdownOpen = false; logOut()">Log Out</button>
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>
  
<script>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useStore } from 'vuex'
import '@/assets/css/utility-patterns.css'
import { useRouter } from 'vue-router'
export default {
    name: 'DropdownProfile',
    props: ['align'],
    data() {
        return {
            UserAvatar: "https://avatars.githubusercontent.com/u/67946056?v=4",
        }
    },
    setup() {

        const dropdownOpen = ref(false)
        const trigger = ref(null)
        const dropdown = ref(null)
        const userPhoto = ref(null)
        const store = useStore()
        const router = useRouter();

        const createUserPhoto = () => {
            let name = store.state.user.userName + store.state.user.userLastName;
            userPhoto.value = "https://ui-avatars.com/api/?name=" + name + "&background=001b47&color=fff&size=100";
        };
        const logOut = () => {
            store.dispatch('logout')
            router.push("/")
        }
        // close on click outside
        const clickHandler = ({ target }) => {
            if (!dropdownOpen.value || dropdown.value.contains(target) || trigger.value.contains(target)) return
            dropdownOpen.value = false
        }

        // close if the esc key is pressed
        const keyHandler = ({ keyCode }) => {
            if (!dropdownOpen.value || keyCode !== 27) return
            dropdownOpen.value = false
        }

        onMounted(() => {
            createUserPhoto();
            document.addEventListener('click', clickHandler)
            document.addEventListener('keydown', keyHandler)
        })

        onUnmounted(() => {
            document.removeEventListener('click', clickHandler)
            document.removeEventListener('keydown', keyHandler)
        })


        return {
            dropdownOpen,
            trigger,
            dropdown,
            logOut,
            userPhoto,
            userInformations: computed(() => store.state.user),
            createUserPhoto,
        }
    }
}
</script>