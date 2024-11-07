<template>
  <div>  
    <div class="p-6">
      <h1 class="text-3xl mb-4">Hotles Purba Test</h1>
      <button @click="showCreateModal" class="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create Todo</button>

      <div v-if="todos.length === 0">No todos available.</div>
      <div v-else class="grid md:grid-cols-3 gap-4">
        <ErrorModal />
        <TodoCard
          v-for="todo in todos"
          :key="todo.id"
          :todo="todo"
          @edit="showEditModal(todo)"
          @delete="deleteTodo(todo.activities_no)"
          @open-status-modal="openStatusModal(todo)"
        />

        <UpdateStatusModal
          v-if="isModalOpen"
          :todo="currentTodo"
          @close="closeModal"
          @update="updateStatus"
        />
      </div>

      <CreateTodoModal v-if="isCreateModalVisible" @close="closeCreateModal" @create="handleCreateTodo" />
      <EditTodoModal v-if="isEditModalVisible" :todo="selectedTodo" @close="closeEditModal" @update="updateTodo" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useTodoStore } from '@/stores/todoStore';
import { useRouter } from 'vue-router';
import TodoCard from '@/components/TodoCard.vue';
import ErrorModal from '@/components/ErrorModal.vue';
import CreateTodoModal from '@/components/CreateTodoModal.vue';
import EditTodoModal from '@/components/EditTodoModal.vue';
import UpdateStatusModal from '@/components/UpdateStatusModal';

const router = useRouter();
const todoStore = useTodoStore();
const todos = ref([]);
const isCreateModalVisible = ref(false);
const isEditModalVisible = ref(false);

const selectedTodo = ref(null);
const isModalOpen = ref(false);
const currentTodo = ref(null);

onMounted(async () => {
  const token = localStorage.getItem('token');
   if (!token) {
    router.push('/login');
  } else {
    await todoStore.fetchTodos();
    todos.value = todoStore.todos;
  }
});

watch(() => todoStore.todos, (newTodos) => {
  todos.value = newTodos;
}, { immediate: true });

const openStatusModal = (todo) => {
    currentTodo.value = todo;
    isModalOpen.value = true;
};

const updateStatus = async (todo) => {
  await todoStore.updateTodoStatus(todo.activitiesNo, todo.newStatus);
  closeModal();
};

const closeModal = () => {
  isModalOpen.value = false;
  currentTodo.value = null;
};

const showCreateModal = () => {
  isCreateModalVisible.value = true;
};

const closeCreateModal = () => {
  isCreateModalVisible.value = false;
};

const handleCreateTodo = async (todo) => {
  await todoStore.createTodo(todo);
  closeCreateModal();
};

const showEditModal = (todo) => {
  selectedTodo.value = todo;
  isEditModalVisible.value = true;
};

const closeEditModal = () => {
  selectedTodo.value = null;
  isEditModalVisible.value = false;
};

const updateTodo = async (todo) => {
  await todoStore.updateTodo(todo);
  closeEditModal();
};

const deleteTodo = async (todoId) => {
  await todoStore.deleteTodo(todoId);
};

</script>
