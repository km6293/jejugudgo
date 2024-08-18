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
import { onMounted, reactive } from 'vue';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
import { ProgressBar } from '@/components';
import {
  useSignUpTermsStore,
  useSignUpIDStore,
  useSignUpPasswordStore,
  useSignUpVerificationStore,
} from '@/stores/auth';

const route = useRoute();
const parentRoute =
  route.matched.length > 1 ? route.matched[route.matched.length - 2] : null;
const childPathList = parentRoute?.children.map((child) => child.path);

onMounted(() => {
  useSignUpTermsStore().$reset();
  useSignUpIDStore().$reset();
  useSignUpPasswordStore().$reset();
  useSignUpVerificationStore().$reset();

  setTimeout(() => {
    pathIndex(route.fullPath);
  }, 30);
});

onBeforeRouteUpdate((to, from, next) => {
  pathIndex(to.fullPath);
  next();
});

const pathIndex = (fullPath: string) => {
  const pathList = fullPath.split('/');
  const pathIndex = childPathList?.indexOf(pathList[2]) as number;
  state.progress = (pathIndex + 1) * 20;
};

const state = reactive({
  progress: 0,
});
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
