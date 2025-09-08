<template>
  <div>
    <nav>
      <ul>
        <li v-for="item in menu" :key="item.path">
          <a :href="item.path">{{ item.label }}</a>
        </li>
      </ul>
    </nav>
    <main>
      <slot />
    </main>
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
