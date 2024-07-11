<template>
  <div class="home-container">
    <ProgressBar
      :progress="progress"
      class="progress"
    />
    <router-view />
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.progress {
  margin-bottom: 40px;
}
</style>
