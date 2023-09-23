<template>
    <div class="home-container">
        <Header />
        <slot></slot>

        <Footer />

    </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer/Footer.vue'

export default {
    components: { Header, Footer }

}
</script>

<style></style>