import { MetaData } from '~/types';

export default async ({ $axios, store }) => {
  const { data } = await $axios.get<MetaData>('/theme');
  store.commit('setMetaData', data);
};
