<template>
    <div class="widget mr-0 md:mr-4">
        <n-link to="/">
            <img src="../../static/image/logo/logo-white.png" alt="logo">

        </n-link>
        <p class="text-white mt-8 mb-7">Lorem ipsum is simply dummy text the printing and typesetting industry has been the
            industry's standard text ever since.</p>
        <div class="flex space-x-3">
            <SocialIcon icon="icofont-facebook" url="https://www.facebook.com/" style-class="bg-white" />
            <SocialIcon icon="icofont-twitter" url="https://twitter.com/" style-class="bg-white" />
            <SocialIcon icon="icofont-skype" url="https://www.skype.com/" style-class="bg-white" />
            <SocialIcon icon="icofont-linkedin" url="https://www.linkedin.com/" style-class="bg-white" />
        </div>
    </div>
</template>

<script>
import SocialIcon from '../Elements/SocialIcon.vue';
export default {
    components: {
        SocialIcon,
    },
};
</script>