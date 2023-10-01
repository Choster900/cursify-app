<template>
    <div>
        <button ref="trigger" class="bg-white text-slate-400 hover:text-slate-500 p-2  border-1 border-slate-500"
            :class="{ 'bg-slate-100 text-slate-500': dropdownOpen }" aria-haspopup="true"
            @click.prevent="dropdownOpen = !dropdownOpen" :aria-expanded="dropdownOpen">
            <span class="sr-only">Menu</span>
            <div class="flex gap-2">
                <svg fill="#000000" class="h-4 w-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="folder-alt">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path
                            d="M19,8H7A3,3,0,0,0,4.26,9.78L2,14.87V5A2,2,0,0,1,4,3H8a2.05,2.05,0,0,1,1.4.56L11.83,6H17A2,2,0,0,1,19,8Zm2.81,2.42A1,1,0,0,0,21,10H7a1,1,0,0,0-.91.59l-4,9A1,1,0,0,0,3,21H18a1,1,0,0,0,.95-.68l3-9A1,1,0,0,0,21.81,10.42Z">
                        </path>
                    </g>
                </svg>
                <span class="text-[9pt] text-slate-600">Recursos</span>
                <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                    transform="matrix(1, 0, 0, 1, 0, 0)rotate(270)">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path
                            d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z"
                            fill="#000000"></path>
                    </g>
                </svg>
            </div>
        </button>
        <transition enter-active-class="transition ease-out duration-200 transform"
            enter-from-class="opacity-0 -translate-y-2" enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-out duration-200" leave-from-class="opacity-100" leave-to-class="opacity-0">
            <div v-show="dropdownOpen"
                class="origin-top-right z-10 absolute top-full bg-white border w-80 border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1"
                :class="align === 'right' ? 'right-0' : 'left-0'">
                <button class="m-0 px-4" ref="dropdown" @focusin="dropdownOpen = true" @focusout="dropdownOpen = false">
                    <slot />
                </button>
            </div>
        </transition>
    </div>
</template>
  
<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
    name: 'DropdownEditMenu',
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