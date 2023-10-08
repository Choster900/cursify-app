<template>
    <div class="header-main">
        <HeaderTopBar class="hidden lg:block" />
        <div class="header-middle py-4 border-b-[1px] border-[#f3f3f3]">
            <div class="container mx-auto">
                <div class="grid grid-cols-4 items-center justify-between">
                    <div class="col-span-2 logo">
                        <router-link to="/">
                            <img src="../../static/image/logo/LogoOficial.png" alt="logo">
                        </router-link>
                    </div>
                    <div class="col-span-2 text-right hidden lg:block rounded-lg overflow-hidden">
                        <n-link to="/">
                            <img src="../../static/image/banners/Add-banner.jpg" alt="banner"
                                class="hover:scale-110 transition-all duration-500">
                        </n-link>
                    </div>
                    <div class="col-span-2 text-right block lg:hidden">
                        <button
                            class="text-xl w-11 h-11 leading-10 rounded-md border-[1px] border-[#ddd] hover:bg-primary hover:text-white hover:border-primary transition-all mr-2"
                            @click="searchOpen = !searchOpen">
                            <i class="icofont-search"></i>
                        </button>
                        <button
                            class="text-xl w-11 h-11 leading-10 rounded-md border-[1px] border-[#ddd] hover:bg-primary hover:text-white hover:border-primary transition-all"
                            @click="navOpen = !navOpen">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                                class="inline-block" height="1.5em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="header-bottom py-3 lg:py-0 hidden lg:block"
            :class="{ 'fixed top-0 left-0 w-full bg-white z-50 transition-all shadow-md animate-fadeInDown': isSticky }">
            <div class="container">
                <div class="grid grid-cols-12 items-center">
                    <div class="col-span-6 md:col-span-9">
                        <Navigation color-variant="text-heading-light" />
                    </div>


                    <div class="col-span-6 md:col-span-3">
                        <div class="search-box relative">
                            <DropdownProfile align="right" v-if="authIsReady" />
                            <RegisterLogin v-else />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import HeaderTopBar from './HeaderTopBar.vue';
import Navigation from './Navigation.vue';
import DropdownProfile from '../Elements/DropdownProfile.vue';
import RegisterLogin from '../Elements/RegisterLogin.vue';
import { useStore } from 'vuex';
export default {
    components: { HeaderTopBar, Navigation, DropdownProfile, RegisterLogin },
    setup() {
        const isSticky = ref(false)
        const store = useStore()
        onMounted(() => {
            window.addEventListener('scroll', () => {
                const scroll = window.scrollY;
                if (scroll >= 200) {
                    isSticky.value = true;
                } else {
                    isSticky.value = false;
                }
            });
        });
        return {
            isSticky,
            store,
            authIsReady: computed(() => store.state.authIsReady)
        }
    }
};
</script>
