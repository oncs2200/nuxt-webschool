import type { MetaData } from '~/types';

export const state = () => ({
  metaData: null as MetaData | null,
});

export const mutations = {
  setMetaData(state: { metaData: MetaData | null }, payload: MetaData) {
    state.metaData = payload;
  },
};
