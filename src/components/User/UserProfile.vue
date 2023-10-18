<template>
    <div class="author-profile text-center border border-[#ededed] rounded-[10px] py-7 px-3.5 relative">
        <div class="gravatar w-32 h-32 m-auto border border-[#ededed] p-2 rounded-full overflow-hidden">
            <img class="rounded-full w-full" :src="userPhoto" :alt="user.userName">
        </div>
        <h3 class="mb-0 text-xl font-semibold pt-6 pb-5">
            <router-link :to="`/author/`" class="hover:text-primary">{{ user.userName }}</router-link>
        </h3>
        <p>{{ user.user_description }}</p>
        <n-link :to="`/author/`"
            class=" bg-[#f4f4f4] py-3.5 px-8 rounded-lg inline-block hover:bg-primary hover:text-white mb-5">View Profile <i
                class="icofont-long-arrow-right text-xl align-middle"></i> </n-link>
        <div class="flex justify-center space-x-2">
            <SocialIcon icon="icofont-facebook" url="https://www.facebook.com/" />
            <SocialIcon icon="icofont-twitter" url="https://twitter.com/" />
            <SocialIcon icon="icofont-skype" url="https://www.skype.com/" />
            <SocialIcon icon="icofont-linkedin" url="https://www.linkedin.com/" />
        </div>
    </div>
</template>

<script>
import { onMounted, ref, toRefs } from 'vue';
import SocialIcon from '../Elements/SocialIcon.vue'

export default {
    components: { SocialIcon },
    props: {
        user: {
            type: Object,
            default: () => { },
        },
    },
    setup(props) {
        const userPhoto = ref(null)
        const { user } = toRefs(props)
        const createUserPhoto = () => {
           // let name = store.state.user.userName + store.state.user.userLastName;
            userPhoto.value = "https://ui-avatars.com/api/?name=" + user.value.userName + "&background=001b47&color=fff&size=100";
        };
        onMounted(() => {
            createUserPhoto();
        })
        return {createUserPhoto,userPhoto}
    }
};
</script>

