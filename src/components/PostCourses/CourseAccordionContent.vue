<template>
    <div class="inner lg:border-l-1">
        <div v-for="(item, i) in sections" :key="i" class="item mb-4 last:mb-0 border-b-1 last:border-b-0 first:pt-5 ">
            <button class="text-heading-light text-xl font-semibold flex items-center text-left py-3 px-4 mb-2 rounded-lg"
                :class='{ "active": activeIndex === i }' @click='activeIndex = activeIndex === i ? null : i'>
                {{ item.section_title }}
            </button>

            <div v-if='i === activeIndex' class="content pt-2">
                <!--   <p v-html="item.secctions.contents"></p> -->
                <div class="cursor-pointer py-2 px-4 hover:bg-[#d1d7dc]" v-for="(content, j) in item.contents" :key="j">
                    <div class="flex gap-4">
                        <div>{{ j + 1 }}. {{ content.content_name }} </div>
                    </div>
                    <div class="flex justify-between">
                        <span class="flex gap-3 pt-2">
                            <svg class="w-5 h-5 stroke-[2]"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                                <path d="M9 6.886v10.228L16.5 12zm1 1.893L14.725 12 10 15.221zM1 3v18h22V3zm21 17H2V4h20z">
                                </path>
                                <path fill="none" d="M0 0h24v24H0z"></path>
                            </svg>
                            3 minutos
                        </span>
                        <DropdownMenu align="right" class="relative inline-flex shrink-0">
                            <div>
                                <router-link class="font-medium text-sm text-slate-600 hover:text-indigo-600 flex py-1 px-"
                                    to="#0">
                                    <div class="flex gap-7">
                                        <svg fill="#000000" class="h-5 w-5" viewBox="0 0 64 64"
                                            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                                            <path
                                                d="M36.026,20.058l-21.092,0c-1.65,0 -2.989,1.339 -2.989,2.989l0,25.964c0,1.65 1.339,2.989 2.989,2.989l26.024,0c1.65,0 2.989,-1.339 2.989,-2.989l0,-20.953l3.999,0l0,21.948c0,3.308 -2.686,5.994 -5.995,5.995l-28.01,0c-3.309,0 -5.995,-2.687 -5.995,-5.995l0,-27.954c0,-3.309 2.686,-5.995 5.995,-5.995l22.085,0l0,4.001Z">
                                            </path>
                                            <path
                                                d="M55.925,25.32l-4.005,0l0,-10.481l-27.894,27.893l-2.832,-2.832l27.895,-27.895l-10.484,0l0,-4.005l17.318,0l0.002,0.001l0,17.319Z">
                                            </path>
                                        </svg>
                                        <span>Nombre del recurso extra</span>
                                    </div>
                                </router-link>
                            </div>
                        </DropdownMenu>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import DropdownMenu from '../Elements/DropdownMenu.vue';

export default {
    components: { DropdownMenu },
    props: {
        sections: {
            type: Object,
            default: () => { },
        },
    },
    setup() {
        const activeIndex = ref(0);
        return {
            activeIndex,
        }
    }

};
</script>

<style lang="scss" scoped>
.active span {
    @apply bg-indigo-600 text-white;
}
</style>
