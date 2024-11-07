<!-- src/components/Header.vue -->
<template>
  <header class="flex justify-between items-center py-4 px-6 bg-gray-800 text-white">
    <h1 class="text-3xl">Dashboard</h1>
    <button @click="logout" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
      Logout
    </button>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/authStore'; // Adjust the path based on your project structure

const router = useRouter();
const authStore = useAuthStore();

const logout = async () => {
  await authStore.logout(); // Call your logout method from the auth store
  router.push('/'); // Redirect to the login page after logout
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
