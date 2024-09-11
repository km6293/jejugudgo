<template>
  <div class="container">
    <ModalHeader
      title="어떤 장르의 코스를 원하세요?"
      @left-click="updateData('page', 1)"
      @right-click="updateData('page', 12)"
    />
    <div class="content">
      <div class="slider">
        <div
          v-for="item of 10"
          :key="item"
          class="slider-item"
        >
          <div class="item">
            <CardImage
              :test="'96x96'"
              :icon="false"
            />
            <div class="image-text body2-bold">바다</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CardImage } from '@/components';
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

.slider {
  overflow-x: auto;
  display: inline-flex;
  gap: var(--margin-m);
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.item {
  display: flex;
  flex-direction: column;
  gap: var(--margin-xs);
}

.image-text {
  align-self: center;
  color: var(--color-text-active);
}
</style>
