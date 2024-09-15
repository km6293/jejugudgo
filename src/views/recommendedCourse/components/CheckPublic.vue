<template>
  <div class="container">
    <ModalHeader title="코스를 공개하시겠어요?" />
    <div class="check-content">
      <div class="button-container body2-regular">
        <div
          class="check-button"
          @click="createCourseStore.updateData('visibilityStatus', true)"
          :class="{ active: visibilityStatus }"
        >
          공개 할래요
        </div>
        <div
          class="check-button"
          @click="createCourseStore.updateData('visibilityStatus', false)"
          :class="{ active: !visibilityStatus }"
        >
          공개 안할래요
        </div>
      </div>
      <div class="check-info caption-medium">
        코스를 공개하면 다른 유저들도 코스를 이용할 수 있어요
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { ModalHeader } from './index';
import { useCreateCourseStore } from '@/stores/recommendedCourse/createCourse';

const createCourseStore = useCreateCourseStore();
const { visibilityStatus } = storeToRefs(createCourseStore);
</script>

<style scoped lang="scss">
.container {
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: var(--margin-m);
}

.check-content {
  display: flex;
  flex-direction: column;
  gap: var(--margin-s);
}

.button-container {
  width: 100%;
  display: flex;
  gap: var(--margin-s);
}
.check-button {
  height: 48px;
  padding: var(--padding-m);
  border-radius: var(--radius-s);
  border: 1px solid var(--Neutral-700, #555555);
  display: flex;
  align-items: center;
  color: var(--color-button-on-secondary);
  flex: 1;
  justify-content: center;

  &.active {
    color: var(--color-text-primary);
    border-color: var(--color-primary-500);
  }
}

.check-info {
  color: var(--color-text-muted);
}
</style>
