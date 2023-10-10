<template>
    <div class="relative inline-flex">
        <button ref="trigger" class="w-8 h-8 flex items-center justify-center   transition duration-150 "
            :class="{ '': dropdownOpen }" aria-haspopup="true" @click.prevent="dropdownOpen = !dropdownOpen"
            :aria-expanded="dropdownOpen">
            <span class="sr-only">Info</span>
            <lord-icon src="https://cdn.lordicon.com/hwuyodym.json" trigger="hover" colors="primary:#ffffff" state="hover-2"
                style="width:250px;height:250px">
            </lord-icon>
        </button>
        <transition enter-active-class="transition ease-out duration-200 transform"
            enter-from-class="opacity-0 -translate-y-2" enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-out duration-200" leave-from-class="opacity-100" leave-to-class="opacity-0">
            <div v-show="dropdownOpen"
                class="origin-top-right z-10 absolute top-full min-w-44 bg-white 0 py-1.5 rounded shadow-lg overflow-hidden mt-1"
                :class="align === 'right' ? 'right-0' : 'left-0'">

                <ul ref="dropdown" @focusin="dropdownOpen = true" @focusout="dropdownOpen = false">
                    <li>
                        <router-link
                            class="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
                            to="#0" @click="dropdownOpen = false">
                            <svg class="w-3 h-3 fill-current text-indigo-300 shrink-0 mr-2" viewBox="0 0 12 12">
                                <rect y="3" width="12" height="9" rx="1" />
                                <path d="M2 0h8v2H2z" />
                            </svg>
                            <span>Documentation</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link
                            class="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
                            to="#0" @click="dropdownOpen = false">
                            <svg class="w-3 h-3 fill-current text-indigo-300 shrink-0 mr-2" viewBox="0 0 12 12">
                                <path
                                    d="M10.5 0h-9A1.5 1.5 0 000 1.5v9A1.5 1.5 0 001.5 12h9a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 0zM10 7L8.207 5.207l-3 3-1.414-1.414 3-3L5 2h5v5z" />
                            </svg>
                            <span>Support Site</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link
                            class="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
                            to="configuration/1" @click="dropdownOpen = false">
                            <svg class="w-3 h-3 fill-current text-indigo-300 shrink-0 mr-2" viewBox="0 0 12 12">
                                <path
                                    d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z" />
                            </svg>
                            <span>Configuration</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
    name: 'MenuConfiguration',
    props: ['align'],
    setup() {

        const dropdownOpen = ref(false)
        const trigger = ref(null)
        const dropdown = ref(null)

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
        }
    }
}
</script>