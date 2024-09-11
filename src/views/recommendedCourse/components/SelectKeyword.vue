<template>
  <div class="container">
    <ModalHeader
      title="어울리는 키워드를 선택하세요"
      @left-click="updateData('page', 2)"
      @right-click="updateData('page', 4)"
    />

    <div class="keyword">
      <div
        class="item body2-regular"
        v-for="item of 40"
        v-bind:key="item"
      >
        맛집탐방
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { ICourseDataType } from '../type';
import { ModalHeader } from './index';

const props = defineProps<{
  updateCourseData: (newData: Partial<ICourseDataType>) => void;
  courseData: ICourseDataType;
}>();

const updateData = <K extends keyof ICourseDataType>(
  item: K,
  value: ICourseDataType[K]
) => {
  props.updateCourseData({ [item]: value });
};
</script>

<style scoped>
.container {
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: var(--margin-m);
}

.keyword {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  overflow-y: auto;
  scrollbar-width: none;
}

.item {
  height: 36px;
  padding: var(--padding-m);
  border-radius: var(--radius-s);
  border: 1px solid var(--Neutral-700, #555555);
  color: var(--color-button-on-secondary);
  display: flex;
  align-items: center;
  width: fit-content;
}
</style>
