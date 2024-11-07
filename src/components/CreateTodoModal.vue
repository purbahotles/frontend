<template>
  <div class="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
    <div class="bg-white p-6 rounded shadow-md w-96">
      <h2 class="text-2xl mb-4">Create Todo</h2>
      <form @submit.prevent="submitTodo">
        <input v-model="todo.subject" type="text" placeholder="Subject" class="border p-2 w-full mb-2" required/>
        <textarea v-model="todo.description" placeholder="Description" class="border p-2 w-full mb-2" rows="3" required></textarea>
        <div class="flex justify-between mt-4">
          <button @click="create" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create</button>
          <button @click="$emit('close')" class="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded">Cancel</button>
        </div>

      </form>
      
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps();
const emit = defineEmits(['close', 'create']);

const todo = ref({
  subject: '',
  description: ''
});

const submitTodo = () => {
  emit('create', todo.value);
};
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>
