<template>
  <div class="header">
    <div class="header-icon">
      <slot
        name="left"
        v-if="$slots.left"
      ></slot>
      <BigArrowIcon
        v-else
        @click="goBack"
      />
    </div>
    <div class="subheading-bold header-title">
      <slot name="center"></slot>
    </div>
    <div class="header-icon">
      <slot
        name="right"
        v-if="$slots.right"
      ></slot>
      <BigDeleteIcon
        v-else
        @click="goHome"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { BigArrowIcon, BigDeleteIcon } from '@/components';
import { useRouter } from 'vue-router';

const router = useRouter();
const goBack = () => {
  router.back();
};

const goHome = (homeRoute = '/login') => {
  router.push({ path: homeRoute });
};
</script>

<style scoped>
.header {
  width: 100%;
  background-color: var(--color-background);
  z-index: 1000;
  height: 48px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 280px;
  max-width: 768px;
}

.header-icon {
  height: 48px;
  width: 48px;
  text-align: center;
  align-content: center;
}

.header-title {
  color: var(--color-neutral-white);
}
</style>
