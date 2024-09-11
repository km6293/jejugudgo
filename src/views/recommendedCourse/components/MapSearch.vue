<template>
  <div class="search-bar">
    <BigArrowIcon @click="onArrowClick" />
    <div class="search-input">
      <input
        class="subheading-bold input-text"
        :value="courseData.input"
      />
      <SearchIcon />
    </div>
  </div>
</template>

<script setup lang="ts">
import { BigArrowIcon, SearchIcon } from '@/components';
import { defineEmits, defineProps } from 'vue';
import { ICourseDataType } from '../type';

const emits = defineEmits(['arrow-click']);
const onArrowClick = () => emits('arrow-click');

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
.search-bar {
  display: flex;
  position: fixed;
  top: 0;
  z-index: 1001;
  max-width: 768px;
  height: 48px;
  width: 100%;
  background-color: #242424;
}

.search-input {
  display: flex;
  align-items: center;
  padding-right: 20px;
  justify-content: space-between;
  flex: 1;
}

.input-text {
  background-color: #242424;
  color: var(--color-text-active);
  border: none;
  width: 100%;
  outline: none;
}
</style>
