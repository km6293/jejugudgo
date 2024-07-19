<template>
  <div class="tab-bar">
    <button
      v-for="tab in props.tabs"
      :key="tab.name"
      @click="goToTab(tab.path)"
      :class="{ active: $route.name === tab.name }"
    >
      {{ tab.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { defineProps } from 'vue';
import { ITabBarType } from './TabBarTypes';

const props = defineProps<ITabBarType>();
const router = useRouter();

const goToTab = (path: string) => {
  router.push(path);
};
</script>

<style scoped>
.tab-bar {
  display: flex;
  height: 48px;
}

button {
  flex: 1;
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  background-color: var(--color-background);
  transition: background-color 0.3s;
  border-bottom: 1px solid #ffffff33;
  color: var(--color-neutral-300);
  font-family: var(--font-bold);
  font-size: 1.6rem;
}

button.active {
  background-color: var(--color-background);
  color: var(--color-neutral-100);
  border-bottom-color: var(--color-neutral-100);
}

button:hover {
  color: var(--color-neutral-100);
}
</style>
