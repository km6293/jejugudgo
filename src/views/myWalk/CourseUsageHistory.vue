<template>
  <div class="container">
    <TopBar>
      <template #center>코스 이용 내역</template>
      <template #right></template>
    </TopBar>
  </div>
  <div class="contents">
    <CourseCard
      :showHeader="false"
      v-for="item of 5"
      :key="item"
    />
  </div>
</template>

<script setup lang="ts">
import { TopBar, CourseCard } from './components';
</script>

<style scoped>
.container {
  position: relative;
}

.contents {
  display: flex;
  flex-direction: column;
  padding: 48px 20px 40px;
  gap: 16px;
}
</style>
