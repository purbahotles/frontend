import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  plugins: ['~/plugins/axios.js'],
  runtimeConfig: {
    public: {
      appUrl: process.env.APP_URL || "http://localhost:3000/",
      apiUrl: process.env.API_URL || "http://localhost:5000/api"
    }
  },
  pages: true,
  srcDir: 'src/',
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],
  nitro: {
    preset: 'node-server', // Change as needed, e.g., 'vercel' or 'netlify' for deployment
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["~/assets/tailwind.css"],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: false, // Ensure SSR is enabled if needed; `true` is for enabling
  build: {
    transpile: ['defu'], // Transpile packages as needed
  },
})
