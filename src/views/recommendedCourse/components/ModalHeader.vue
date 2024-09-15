<template>
  <div class="header">
    <div class="start-text">
      <BigArrowIcon
        v-if="showLeftIcon"
        @click="onPageMove(leftStep)"
      />
      <div class="start-title subheading-bold">{{ title }}</div>
      <Info2Icon v-if="showInfoIcon" />
    </div>
    <div
      class="button"
      v-if="showRightButton"
    >
      <Button
        @click="onPageMove(rightStep)"
        :text="rightButtonText"
        :style="{ height: '40px' }"
        :disabled="rightDisabled"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';
import { Button, Info2Icon, BigArrowIcon } from '@/components';
import { storeToRefs } from 'pinia';
import { useCreateCourseStore } from '@/stores/recommendedCourse/createCourse';

const createCourseStore = useCreateCourseStore();
const { page } = storeToRefs(createCourseStore);

const props = withDefaults(
  defineProps<{
    title: string;
    showLeftIcon?: boolean;
    showInfoIcon?: boolean;
    showRightButton?: boolean;
    rightButtonText?: string;
    leftStep?: number;
    rightStep?: number;
    rightDisabled?: boolean;
  }>(),
  {
    showLeftIcon: true,
    showInfoIcon: false,
    showRightButton: true,
    rightButtonText: '다음',
    leftStep: -1,
    rightStep: 1,
    rightDisabled: false,
  }
);

const onPageMove = (stepDirection: number) => {
  createCourseStore.updateData('page', page.value + stepDirection);
};
</script>

<style scoped>
.header {
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 48px;
}

.start-text {
  display: flex;
  gap: var(--margin-xs);
  align-items: center;
}

.start-title {
  color: #f2f2f2;
}
</style>
