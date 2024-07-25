<template>
  <div class="app-bar">
    <div class="app-bar-icon">
      <BigArrowIcon
        v-if="appBarBackButton"
        @click="goBack"
      />
    </div>
    <span class="app-bar-title">
      {{ title }}
    </span>
    <BigDeleteIcon @click="goHome" />
  </div>
</template>

<script lang="ts" setup>
import { RouteRecordName, useRoute, useRouter } from 'vue-router';
import { BigArrowIcon, BigDeleteIcon } from '@/components';
import { computed } from 'vue';

const router = useRouter();
const route = useRoute();

const title = computed(() => route.meta.title);
const appBarBackButton = computed(() => route.meta.appBarBackButton !== false);

const goBack = () => {
  router.back();
};

const goHome = () => {
  const homeRoute = route.meta.homeRoute as RouteRecordName;
  if (homeRoute) {
    router.push({ name: homeRoute });
  } else {
    router.push({ name: '/' });
  }
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

.app-bar-icon {
  width: 48px;
  height: 48px;
}
</style>
