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
    <div
      class="underline"
      :style="underlineStyle"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import {
  defineProps,
  ref,
  watch,
  nextTick,
  onMounted,
  onBeforeUnmount,
} from 'vue';
import { ITabBarType } from './TabBarTypes';

const props = defineProps<ITabBarType>();
const router = useRouter();
const route = useRoute();

const goToTab = (path: string) => {
  router.push(path);
};

const underlineStyle = ref({
  width: '0px',
  left: '0px',
});

const updateUnderlineStyle = () => {
  nextTick(() => {
    const activeTab = document.querySelector('.tab-bar button.active');
    if (activeTab) {
      const { offsetWidth, offsetLeft } = activeTab as HTMLElement;
      underlineStyle.value = {
        width: `${offsetWidth}px`,
        left: `${offsetLeft}px`,
      };
    }
  });
};

watch(
  () => route.name,
  () => {
    updateUnderlineStyle();
  },
  { immediate: true }
);

onMounted(() => {
  window.addEventListener('resize', updateUnderlineStyle);
  updateUnderlineStyle();
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateUnderlineStyle);
});
</script>

<style scoped>
.tab-bar {
  display: flex;
  height: 48px;
  position: relative;
}

button {
  flex: 1;
  cursor: pointer;
  border: none;
  background-color: var(--color-background);
  transition: color 0.3s;
  color: var(--color-neutral-300);
  font-family: var(--font-bold);
  font-size: 1.6rem;
  position: relative;
}

button.active {
  color: var(--color-neutral-100);
}

.underline {
  position: absolute;
  bottom: 0;
  height: 2px;
  background-color: var(--color-neutral-100);
  transition: left 0.3s, width 0.3s;
}
</style>
