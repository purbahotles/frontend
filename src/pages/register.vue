<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <ErrorModal />
    <div class="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
      <h2 class="text-2xl font-semibold text-center text-gray-800">Register</h2>
      <form @submit.prevent="registerUser">
        <div class="mb-4">
          <label for="id" class="block text-sm font-medium text-gray-600">User ID</label>
          <input v-model="user.id" id="id" type="text" class="w-full p-2 mt-1 border rounded focus:outline-none" required />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-600">Password</label>
          <input v-model="user.password" id="password" type="password" class="w-full p-2 mt-1 border rounded focus:outline-none" required />
        </div>
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-600">Name</label>
          <input v-model="user.name" id="name" type="text" class="w-full p-2 mt-1 border rounded focus:outline-none" required />
        </div>
        <button type="submit" class="w-full py-2 text-white bg-blue-600 rounded hover:bg-blue-700">Register</button>
      </form>
      <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
      <p class="text-center mt-4">
        Already have an account?
        <NuxtLink to="/login" class="text-blue-500 hover:underline">Login</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '~/stores/authStore';
import { useRouter } from 'vue-router';
import ErrorModal from '@/components/ErrorModal.vue';


const authStore = useAuthStore();
const router = useRouter();

definePageMeta({
  middleware: 'redirect',
  layout: 'auth',
});

const user = ref({
  id: '',
  password: '',
  name: '',
});

const errorMessage = ref();

const registerUser = async () => {
  try {
    await authStore.register(user.value);
    alert('Registration successful!');
    router.push('/');
  } catch (error) {
    errorMessage.value = error.message;
  }
};
</script>

<style scoped>
/* Tambahkan gaya CSS jika diperlukan */
</style>
