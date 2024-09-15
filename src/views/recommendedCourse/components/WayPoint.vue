<template>
  <div class="container">
    <ModalHeader
      title="다음 지점을 선택해주세요"
      :showInfoIcon="true"
      :showLeftIcon="false"
      :rightDisabled="!areWaypointsAndEndPointValid"
    />

    <div class="content">
      <div class="location">
        <ModalSearch
          :point="startPoint"
          @click="handleCheckPointClick({ type: 'startPoint' })"
        />

        <div
          v-for="(wayPoint, index) in wayPoint"
          :key="index"
          class="button-container"
        >
          <ModalSearch
            :point="wayPoint"
            @click="handleCheckPointClick({ type: 'wayPoint', index })"
          />
          <div
            class="button-icon"
            @click="createCourseStore.removeWayPoint(index)"
          >
            <SubtractIcon />
          </div>
        </div>

        <div class="button-container">
          <ModalSearch
            :point="endPoint"
            @click="handleCheckPointClick({ type: 'endPoint' })"
          />
          <div
            class="button-icon"
            :class="{ disabled: !allWayPointsFilled }"
            @click="handleAddWayPointClick"
          >
            <AddIcon />
          </div>
        </div>
        <div class="target">
          <TargetIcon />
          <div class="body2-regular">현위치로 설정</div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="helper">
        <div class="helper-text body1-medium">어디서로 갈지 고민된다면?</div>
        <div
          class="helper-button body2-bold"
          @click="createCourseStore.updateData('page', 11)"
        >
          추천받기
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TargetIcon, AddIcon, SubtractIcon } from '@/components';
import { ModalSearch, ModalHeader } from './index';
import { useCreateCourseStore } from '@/stores/recommendedCourse/createCourse';
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { IselectedObjectType } from '@/stores/recommendedCourse/type';

const createCourseStore = useCreateCourseStore();
const { wayPoint, endPoint, startPoint } = storeToRefs(createCourseStore);

const handleAddWayPointClick = () => {
  if (allWayPointsFilled.value) {
    createCourseStore.addWayPoint();
  }
};

const allWayPointsFilled = computed(() =>
  createCourseStore.wayPoint.every(
    (point) => point.name && point.longitude && point.latitude
  )
);

const isEndPointValid = computed(
  () =>
    createCourseStore.endPoint.name &&
    createCourseStore.endPoint.longitude &&
    createCourseStore.endPoint.latitude
);

const areWaypointsAndEndPointValid = computed<boolean>(() => {
  const isValid = !!(allWayPointsFilled.value && isEndPointValid.value);
  return isValid;
});

const handleCheckPointClick = (selectedObject: IselectedObjectType) => {
  createCourseStore.updateData('selectedObject', selectedObject);
};
</script>

<style scoped lang="scss">
.container {
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: var(--margin-m);
}

.button-container {
  display: flex;
  align-content: center;
  gap: 8px;
}

.button-icon {
  justify-content: center;
  align-content: center;
  display: grid;
  width: 48px;
  height: 52px;
  padding: var(--padding-m);
  gap: var(--spacing-1);
  border-radius: var(--padding-s);
  background-color: var(--color-button-secondary);

  &.disabled {
    background-color: var(--color-neutral-700);
  }
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
