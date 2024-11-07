<template>
  <div class="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
    <div class="bg-white p-6 rounded shadow-md w-96">
      <h2 class="text-2xl mb-4">Edit Todo</h2>
      <input v-model="subject" type="text" placeholder="Subject" class="border p-2 w-full mb-2" required />
      <textarea v-model="description" placeholder="Description" class="border p-2 w-full mb-2" rows="3" required></textarea>
      <div class="flex justify-between mt-4">
        <button @click="update" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update</button>
        <button @click="emitClose" class="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

// Define props and emits
const props = defineProps(['todo']);
const emit = defineEmits(['close', 'update']); // Declare the events you will emit

const subject = ref(props.todo.subject);
const description = ref(props.todo.description);

// Watch for changes in props.todo and update local state
watch(
  () => props.todo,
  (newTodo) => {
    subject.value = newTodo.subject;
    description.value = newTodo.description;
  }
);

// Update function to emit updated todo
const update = () => {
  const updatedTodo = {
    activities_no: props.todo.activities_no, // Include activities_no
    subject: subject.value,
    description: description.value,
  };
  emit('update', updatedTodo); // Emit the update event with the updated todo
};

// Emit close event
const emitClose = () => {
  emit('close');
};
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>
