<template>
  <div class="home-container">
    <ProgressBar
      :progress="state.progress"
      class="progress"
    />
    <router-view class="router-container" />
  </div>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue';
import { useRouter } from 'vue-router';
import { ProgressBar } from '@/components';

const router = useRouter();
const state = reactive({
  progress: 0,
});

const animateProgress = (start: number, end: number, duration: number) => {
  const startTime = performance.now();

  const animate = (currentTime: number) => {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    state.progress = start + (end - start) * progress;

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
};

const updateProgress = () => {
  const targetProgress =
    (router.currentRoute.value.meta.progress as number) || 0;
  animateProgress(state.progress, targetProgress + 20, 100);
};

watch(router.currentRoute, updateProgress, { immediate: true });
</script>

<style scoped>
.home-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.progress {
  margin-bottom: 40px;
}

.router-container {
  max-width: 47.2rem;
  align-self: center;
}
</style>
