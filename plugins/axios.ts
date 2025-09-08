import axios from 'axios';
import { useRuntimeConfig } from '#app';

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const instance = axios.create({
    baseURL: config.public?.apiBase || '',
  });
  return {
    provide: {
      axios: instance,
    },
  };
});

