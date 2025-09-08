import type { MetaData } from '~/types';
import { useMetaStore } from '~/stores/meta';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(async (nuxtApp) => {
  const { $axios } = nuxtApp;
  const { data } = await $axios.get<MetaData>('/theme');
  const metaStore = useMetaStore();
  metaStore.setMetaData(data);
});

