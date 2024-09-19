<template>
  <div class="container">
    <TopBar>
      <template #center>리뷰 관리</template>
      <template #right></template>
    </TopBar>
  </div>
  <div class="contents">
    <Review
      v-for="item of 5"
      :key="item"
    />
  </div>
</template>

<script setup lang="ts">
import { TopBar } from './components';
import { Review } from '@/components';
</script>

<style scoped>
.container {
  position: relative;
}

.contents {
  padding: 48px 20px 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
