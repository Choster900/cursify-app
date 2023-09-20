
<template>
    <router-link to="/"
        class="relative block after:absolute after:content-[''] after:inset-0 after:bg-black rounded-[10px] overflow-hidden after:opacity-50 hover:after:bg-primary hover:after:opacity-80 after:transition-all">
        <div :class="imgHeight">
            <img :src="category.category_photo" :alt="category.category_name" class="w-full">
        </div>
        <div class="w-full text-center absolute top-1/2 z-10 transform -translate-y-1/2">
            <h4 class="mb-0 text-white capitalize text-[18px]">{{ category.category_name }}</h4>
        </div>
    </router-link>
</template>
<script>
export default {
    props: {
        category: {
            type: Object,
            default: () => { },
        },
        imgHeight: {
            type: String,
            default: ''
        }
    },
}
</script>

<style></style>