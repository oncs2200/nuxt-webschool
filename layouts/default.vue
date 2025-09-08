<template>
  <component :is="layoutComponent">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useMetaStore } from '~/stores/meta';

const metaStore = useMetaStore();

const layoutComponent = computed(() => {
  const theme = metaStore.metaData?.theme?.name || 'template1';
  return () => import(`~/templates/${theme}/layouts/DefaultLayout.vue`);
});
</script>

