import { defineStore } from 'pinia';
import { useNuxtApp } from '#app'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [],
  }),
  actions: {
    getAuthToken() {
      return localStorage.getItem('token');
    },
    
    async fetchTodos() {
      try {
        const { $apiClient } = useNuxtApp();
        const response = await $apiClient.get('/todos/todos')
        this.todos = response.data;
      } catch (error) {
        console.log('Error fetching todos:', error);
      }
    },
    async createTodo(todo) {
      try {
        const { $apiClient } = useNuxtApp();
        const response = await $apiClient.post(`/todos/todos/`, todo);
        this.todos.push(response.data);
      } catch (error) {
        console.log('Error creating todo:', error);
      }
    },
    async updateTodo(todo) {
      try {
        const { $apiClient } = useNuxtApp();
        const response = await $apiClient.put(`/todos/update/${todo.activities_no}`, todo);
        const index = this.todos.findIndex(t => t.activities_no === todo.activities_no);
        if (index !== -1) {
          this.todos[index] = { ...this.todos[index], ...todo };
        }
        this.errorMessage = null;
      } catch (error) {
        console.log('Error Update todos:', error);
      }
    },

    async updateTodoStatus(activitiesNo, newStatus) {
      try {
        const { $apiClient } = useNuxtApp();
        const response = await $apiClient.put(`/todos/mark/${activitiesNo}`, { status: newStatus });
        const updatedTodo = response.data; 
        const todoIndex = this.todos.findIndex(todo => todo.activities_no === activitiesNo);
        if (todoIndex !== -1) {
          this.todos[todoIndex] = updatedTodo; 
        }
      } catch (error) {
        console.log('Error updating todo status:', error);
      }
    },
    

    async deleteTodo(todoId) {
      try {
        const { $apiClient } = useNuxtApp();
        await $apiClient.delete(`/todos/${todoId}`);
        this.todos = this.todos.filter(todo => todo.activities_no !== todoId);
      } catch (error) {
        console.log('Error deleting todo:', error);
      }
    },
  },
});
