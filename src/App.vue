<template>
  <TemplateBody>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>

   <!--  <index /> -->
  </TemplateBody>
</template>

<script>

import index from '@/views/index.vue'
import TemplateBody from './views/Layout/Template.vue'

export default {
  components: { index, TemplateBody }
}
</script>

<style></style>