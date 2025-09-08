import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  modules: [],
  plugins: [
    '~/plugins/pinia',
    '~/plugins/axios',
    '~/plugins/fetchTheme',
  ],
  typescript: {
    strict: true,
  },
});

