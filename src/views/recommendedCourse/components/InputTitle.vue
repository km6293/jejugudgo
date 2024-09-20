<template>
  <div class="container">
    <ModalHeader title="코스명을 입력해주세요" />
    <input
      v-model="courseName"
      class="content-input body2-medium"
    />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { ModalHeader } from './index';
import { useCreateCourseStore } from '@/stores/recommendedCourse/createCourse';

const createCourseStore = useCreateCourseStore();
const { courseName } = storeToRefs(createCourseStore);
</script>

<style scoped lang="scss">
.container {
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: var(--margin-m);
}

.content-input {
  width: 100%;
  height: 52px;
  border: none;
  background-color: var(--color-neutral-700);
  outline: none;
  border-radius: var(--radius-s);
  color: var(--color-text-active);
  padding: 20px;
}
</style>
