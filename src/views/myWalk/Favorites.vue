<template>
  <div class="container">
    <TopBar>
      <template #center>즐겨찾기</template>
      <template #right></template>
    </TopBar>
  </div>
  <div class="contents">
    <Tags />
    <div class="course-card-container">
      <CourseCard
        v-for="(item, index) in 5"
        :key="index"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { TopBar, CourseCard } from './components';
import { Tags } from '@/components';
</script>

<style scoped>
.container {
  position: relative;
}

.contents {
  padding: 68px 20px 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.course-card-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
