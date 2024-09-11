<template>
  <div class="container">
    <ModalHeader
      title="어디서부터 시작할까요?"
      :showLeftIcon="false"
      :showInfoIcon="true"
      @right-click="updateData('page', 2)"
    />
    <div class="content">
      <div class="location">
        <ModalSearch
          :input="courseData.input"
          @search-click="updateData('ShowSearch', true)"
        />
        <div class="target">
          <TargetIcon />
          <div class="body2-regular">현위치로 설정</div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="helper">
        <div class="helper-text body1-medium">
          어디서부터 마칠지 고민된다면?
        </div>
        <div
          class="helper-button body2-bold"
          @click="updateData('page', 11)"
        >
          추천받기
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TargetIcon } from '@/components';
import { ModalSearch, ModalHeader } from './index';
import { defineProps } from 'vue';
import { ICourseDataType } from '../type';

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

.location {
  display: flex;
  flex-direction: column;
  gap: var(--margin-s);
}

.target {
  display: flex;
  align-items: center;
  justify-content: end;
  color: var(--color-text-body);
}

.divider {
  width: 100%;
  border: 1px solid var(--color-opacity-white-15);
}

.content {
  gap: var(--margin-m);
  display: flex;
  flex-direction: column;
}

.helper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.helper-text {
  color: #f2f2f2;
}

.helper-button {
  border-radius: var(--padding-s);
  height: 36px;
  padding: 8px 16px;
  gap: var(--spacing-1);
  border: 1px solid var(--color-button-primary);
  color: var(--color-button-primary);
}
</style>
