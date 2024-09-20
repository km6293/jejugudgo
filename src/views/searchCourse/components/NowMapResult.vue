<template>
  <ResultTags />
  <div class="result-cards">
    <CourseCard @click="onSelectClick" />
  </div>
</template>

<script setup lang="ts">
import { ResultTags } from '.';
import { CourseCard } from '../../home/components';

import { useSearchCourseStore } from '@/stores/recommendedCourse/searchCourse';

const searchCourseStore = useSearchCourseStore();

const onSelectClick = () => {
  searchCourseStore.updateData('selectCourse', true);
};
</script>

<style scoped>
.result-cards {
  flex-grow: 1;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
