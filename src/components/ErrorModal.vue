<template>
  <div v-if="isVisible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
      <h2 class="text-xl font-semibold text-red-500 mb-4">Error</h2>
      <p class="text-gray-700">{{ errorMessage }}</p>
      <div class="mt-4 flex justify-end">
        <button @click="closeModal" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { useErrorStore } from '~/stores/errorStore'; // Menggunakan store error

const errorStore = useErrorStore();

// Status visibilitas modal
const isVisible = ref(false);
const errorMessage = ref(errorStore.errorMessage);

// Menampilkan modal jika ada pesan error
watchEffect(() => {
  errorMessage.value = errorStore.errorMessage;
  isVisible.value = !!errorMessage.value; // Menampilkan modal jika ada pesan error
});

// Menutup modal
const closeModal = () => {
  errorStore.clearError(); // Clear error message di store
  isVisible.value = false; // Menutup modal
};
</script>

<style scoped>
/* Styling modal */
</style>
