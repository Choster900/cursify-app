<template>
  <div>
    <TemplateBody v-if="!isCreateCourseRoute">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </TemplateBody>

    <router-view v-else v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
import TemplateBody from './views/Layout/Template.vue'
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  components: { TemplateBody },
  setup() {
    const route = useRoute();

    const isCreateCourseRoute = computed(() => route.path.startsWith("/courses/create"));

    return {
      isCreateCourseRoute,
    }
  }
}
</script>

<style></style>
