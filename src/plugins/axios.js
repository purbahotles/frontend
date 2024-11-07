import axios from 'axios';
import { useErrorStore } from '~/stores/errorStore';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  // Membuat instance Axios dengan base URL
  const apiClient = axios.create({
    baseURL: config.public.apiUrl, // Mengambil base URL dari konfigurasi runtime
  });

  // Interceptor request untuk menambahkan Authorization header
  apiClient.interceptors.request.use(
    (request) => {
      const token = localStorage.getItem('token');
      if (token) {
        request.headers.Authorization = `Bearer ${token}`; // Menambahkan token ke header
      }
      return request;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Interceptor response untuk menangani error secara global
  apiClient.interceptors.response.use(
    response => response,
    error => {
      const errorStore = useErrorStore(); // Mengakses error store
      let errorMessage = 'Terjadi kesalahan pada server';

      if (error.response) {
        // Jika ada respons error dari server
        errorMessage = error.response.data.error || 'Terjadi kesalahan saat memuat data';
      } else if (error.request) {
        errorMessage = 'Tidak ada respons dari server';
      }

      // Menyimpan error message di error store
      errorStore.setError(errorMessage);

      // Mengembalikan error ke tempat lain yang mungkin membutuhkan
      return Promise.reject(error);
    }
  );

  // Membuat apiClient tersedia secara global
  nuxtApp.provide('apiClient', apiClient);
});
