<template>
  <transition name="fade">
    <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-4 rounded shadow-lg">
        <h3 class="text-lg mb-2">Update Status</h3>
        <select v-model="selectedStatus" required class="border p-2 w-full mb-2">
          <option disabled>Select Status</option>
          <option value="Done">Done</option>
          <option value="Canceled">Canceled</option>
          <option value="Unmarked">Unmarked</option>
        </select>
        <div class="flex justify-end">
          <button @click="updateStatus" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2">Update</button>
          <button @click="closeModal" class="bg-gray-300 hover:bg-gray-400 text-black font-bold py-1 px-2 rounded">Cancel</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const emit = defineEmits(['close', 'update']);
const props = defineProps(['todo']);

const selectedStatus = ref(props);

const closeModal = () => {
  emit('close');
};

const updateStatus = () => {
  emit('update', { activitiesNo: props.todo.activities_no, newStatus: selectedStatus.value });
  closeModal();
};
</script>
