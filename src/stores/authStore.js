import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    users: [],
    currentUser: null,
  }),
  actions: {
    async register(user) {
      const { $apiClient } = useNuxtApp();
      try {
        const response = await $apiClient.post(`${useRuntimeConfig().public.apiUrl}/users/register`, user);
        this.users.push(response.data);
        this.currentUser = response.data;
      } catch (error) {
        console.log('Error during registration:', error.response);
      }
    },
    async login(user) {
      const { $apiClient } = useNuxtApp();
      try {
        const response = await $apiClient.post(`${useRuntimeConfig().public.apiUrl}/users/login`, user);
        localStorage.setItem('token', response.data.token);
        this.currentUser = response.data;
      } catch (error) {
        console.log('Error during Login:', error.response);
      }
    },
    logout() {
      const { $apiClient } = useNuxtApp();
      localStorage.removeItem('token');
      delete $apiClient.defaults.headers.common['token'];
      this.currentUser = null;
    },
    isAuthenticated() {
      return !!localStorage.getItem('token');
    }
  },
});
