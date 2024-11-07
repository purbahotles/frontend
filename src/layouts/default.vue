<!-- layouts/default.vue -->
<template>
  <div>
    <Header />
    <main class="min-h-screen p-6 bg-gray-100">
      
      <slot />
    </main>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
</script>

<style scoped>
/* Add any additional styles here */
</style>
