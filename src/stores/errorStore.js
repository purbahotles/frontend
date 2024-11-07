import { defineStore } from 'pinia';

export const useErrorStore = defineStore('errorStore', {
  state: () => ({
    errorMessage: '',
  }),
  actions: {
    // Set error dengan pesan
    setError(message) {
      this.errorMessage = message;
    },
    // Clear error
    clearError() {
      this.errorMessage = '';
    },
  },
});
