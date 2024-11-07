<template>
  <div class="flex justify-center items-center h-screen">
    <ErrorModal />
    <form @submit.prevent="login" class="bg-white p-8 rounded shadow-md">
      <h1 class="text-2xl font-bold mb-4">Login</h1>
      <div class="mb-4">
        <label for="id" class="block text-sm font-medium text-gray-700">ID</label>
        <input
          v-model="id"
          type="text"
          id="id"
          required
          class="mt-1 p-2 block w-full border border-gray-300 rounded-md"
        />
      </div>
      <div class="mb-4">
        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
        <input
          v-model="password"
          type="password"
          id="password"
          required
          class="mt-1 p-2 block w-full border border-gray-300 rounded-md"
        />
      </div>
      <button
        type="submit"
        class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Login
      </button>
      <p class="mt-4">
        Don't have an account? <nuxt-link to="/register" class="text-blue-500">Register</nuxt-link>
      </p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/authStore';
import { useRouter } from 'vue-router';
import ErrorModal from '@/components/ErrorModal.vue';


definePageMeta({
  middleware: 'redirect',
  layout: 'auth',
});

const router = useRouter();
const authStore = useAuthStore();

const id = ref(''); // Ganti userId menjadi id
const password = ref('');

const login = async () => {
  try {
    await authStore.login({ id: id.value, password: password.value });
    router.push('/dashboard'); // Arahkan ke halaman dashboard setelah sukses login
  } catch (error) {
    alert(error.message);
  }
};
</script>

<style scoped>
/* Tambahkan styling sesuai kebutuhan */
</style>
