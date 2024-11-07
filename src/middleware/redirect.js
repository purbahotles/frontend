export default defineNuxtRouteMiddleware((to, from) => {
  if (import.meta.client) {
    const token = localStorage.getItem('token');
    
    if (!token && to.path === '/dashboard') {
      console.warn('Token tidak ditemukan, mengarahkan ke /login.');
      return navigateTo('/login');
    }
  }
});
