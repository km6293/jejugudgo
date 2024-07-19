<template>
  <div class="home-container">
    <ProgressBar
      :progress="progress"
      class="progress"
    />
    <router-view class="router-container" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import ProgressBar from '@/components/ProgressBar.vue';

const router = useRouter();
const progress = ref<number>(0);

const updateProgress = () => {
  progress.value = (router.currentRoute.value.meta.progress as number) || 0;
};

watch(router.currentRoute, updateProgress, { immediate: true });
</script>

<style scoped>
.home-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.progress {
  margin-bottom: 40px;
}

.router-container {
  max-width: 47.2rem;
  margin: 0 auto;
}
</style>
