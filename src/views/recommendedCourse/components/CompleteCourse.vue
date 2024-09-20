<template>
  <div class="container">
    <ModalHeader
      title="OO님 만의 코스생성이 완료되었어요"
      :showLeftIcon="false"
      :showRightButton="false"
    />
    <div class="check-content">
      <div class="button-container body2-regular">
        <div class="check-button">바로 걸을래요</div>
        <div class="check-button">나중에 걸을래요</div>
      </div>
      <div class="check-info caption-medium">
        생성된 코스는 마이걷고 코스생성내역에서 확인가능해요.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { createCourse } from '@/apis/courseFeature';
import { ModalHeader } from './index';
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useCreateCourseStore } from '@/stores/recommendedCourse/createCourse';
import { useUserStore } from '@/stores/user/userState';

const createCourseStore = useCreateCourseStore();
const userCourseStore = useUserStore();

const {
  courseName,
  visibilityStatus,
  startPoint,
  wayPoint,
  endPoint,
  keyword,
} = storeToRefs(createCourseStore);
const { id } = storeToRefs(userCourseStore);

onMounted(async () => {
  await createCourse(
    courseName.value,
    visibilityStatus.value,
    keyword.value,
    id.value,
    startPoint.value,
    wayPoint.value,
    endPoint.value
  );
});
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

  &:active {
    color: var(--color-text-primary);
    border-color: var(--color-text-primary);
  }
}

.check-info {
  color: var(--color-text-muted);
}
</style>
