<template>
  <div class="flex items-center justify-center h-screen bg-gray-100">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-red-700 mb-4">Error 404</h1>
      <p class="text-lg text-gray-800 mb-8">Page not found</p>
      <router-link to="/" class="text-indigo-500 hover:text-indigo-700">Go to Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFoundView'
}
</script>

<style scoped>
/* Add any custom styles you want */
</style>
