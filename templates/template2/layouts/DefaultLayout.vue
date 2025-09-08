<template>
  <div style="display:flex;">
    <aside style="width:200px;">
      <ul>
        <li v-for="item in menu" :key="item.path">
          <a :href="item.path">{{ item.label }}</a>
        </li>
      </ul>
    </aside>
    <section style="flex:1;">
      <slot />
    </section>
  </div>
</template>

<script lang="ts">
import { mainMenu } from '~/common/menu';

export default {
  data() {
    return { menu: mainMenu };
  },
};
</script>
