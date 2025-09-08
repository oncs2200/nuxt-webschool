import { defineStore } from 'pinia';
import type { MetaData } from '~/types';

export const useMetaStore = defineStore('meta', {
  state: () => ({
    metaData: null as MetaData | null,
  }),
  actions: {
    setMetaData(payload: MetaData) {
      this.metaData = payload;
    },
  },
});

