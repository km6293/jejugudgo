<template>
  <div class="result-page">
    <TopBar>
      <template #left></template>
      <template #center>전체코스</template>
      <template #right><Delete2Icon @click="handleCloseAllCourse" /></template>
    </TopBar>
    <div class="result-content">
      <ResultTags />
      <div @click="onSelectClick">
        <CourseCard class="card-scroll" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Delete2Icon } from '@/components';
import { TopBar } from '@/views/myWalk/components';
import { ResultTags } from './';
import { CourseCard } from '../../home/components';

import { useSearchCourseStore } from '@/stores/recommendedCourse/searchCourse';

const searchCourseStore = useSearchCourseStore();

const handleCloseAllCourse = () => {
  searchCourseStore.updateData('showAllCourse', false);
};

const onSelectClick = () => {
  searchCourseStore.updateData('showAllCourse', false);
  searchCourseStore.updateData('showNowMap', true);
  searchCourseStore.updateData('selectCourse', true);
};
</script>

<style scoped>
.result-page {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #242424;
  z-index: 1002;
  min-width: 280px;
  max-width: 768px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.result-content {
  margin-top: 48px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: calc(100vh - 48px);
}

.card-scroll {
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
