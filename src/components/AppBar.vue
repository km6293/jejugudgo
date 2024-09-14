<template>
  <div class="app-bar">
    <div class="app-bar-icon">
      <BigArrowIcon
        v-if="appBarBackButton"
        @click="goBack"
      />
      <div
        v-else
        class="placeholder"
      ></div>
    </div>
    <span class="app-bar-title">
      {{ title }}
    </span>
    <BigDeleteIcon
      v-if="appBarCloseButton"
      @click="goHome"
    />
    <div
      v-else
      class="placeholder"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { BigArrowIcon, BigDeleteIcon } from '@/components';
import { computed } from 'vue';

const router = useRouter();
const route = useRoute();

const title = computed(() => route.meta.title);
const appBarBackButton = computed(() => route.meta.appBarBackButton !== false);
const appBarCloseButton = computed(
  () => route.meta.appBarCloseButton !== false
);

const goBack = () => {
  router.back();
};

const goHome = () => {
  const homeRoute = route.meta.homeRoute as string;
  const path = homeRoute === 'login' ? '/login' : homeRoute || '/login';
  router.push({ path });
};
</script>

<style lang="scss">
.app-bar {
  position: fixed;
  top: 0;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-width: 280px;
  max-width: 768px;
  z-index: 1000;
  background-color: var(--color-background);
}

.app-bar-title {
  font-family: var(--font-bold);
  color: var(--color-neutral-white);
  font-size: 18px;
}

.app-bar-icon,
.placeholder {
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
