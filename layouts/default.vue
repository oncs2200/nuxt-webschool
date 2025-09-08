<template>
  <component :is="layoutComponent">
    <slot />
  </component>
</template>

<script lang="ts">
export default {
  computed: {
    layoutComponent() {
      const theme = this.$store.state.metaData?.theme?.name || 'template1';
      return () => import(`~/templates/${theme}/layouts/DefaultLayout.vue`);
    },
  },
};
</script>
