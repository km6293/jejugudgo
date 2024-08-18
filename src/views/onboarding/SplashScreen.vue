<template>
  <div
    v-show="showSplash"
    class="splash-container"
  >
    <LogoIcon />
    <div class="slogan body2-bold">걸음으로 만들어나가는 당신만의 이야기</div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useRootStore } from '@/stores/rootStore';
import { LogoIcon } from '@/components';
import { saveToSessionStorage } from '@/utils';

const rootStore = useRootStore();
const { showSplash } = storeToRefs(rootStore);
saveToSessionStorage('showSplash', 'true');
</script>

<style scoped>
.splash-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--color-background);
  align-items: center;
  justify-content: center;
}

.slogan {
  color: var(--color-neutral-100);
  margin-top: 16px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s ease, transform 1.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
