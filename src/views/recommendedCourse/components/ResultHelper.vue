<template>
  <div class="container">
    <ModalHeader
      title="최적의 걷기 시작점을 찾았어요!"
      :showRightButton="false"
      @left-click="updateData('page', 11)"
    />
    <div class="content">
      <div class="items">
        <div
          class="item"
          v-for="item of 10"
          :key="item"
        >
          <CardImage
            :test="'74x74'"
            :icon="false"
          />
          <div class="card-info">
            <div class="info-head body1-medium">장소명</div>
            <div class="info-content caption-regular">
              <div>장소에 대한 설명</div>
              <div>장소에 대한 설명</div>
            </div>
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

.items {
  display: flex;
  flex-direction: column;
  gap: var(--margin-m);
  height: 100%;
  overflow-y: auto;
  scrollbar-width: none;
}

.item {
  display: flex;
  gap: var(--margin-m);
}

.card-info {
  display: flex;
  flex-direction: column;
  gap: var(--margin-s);
}

.info-head {
  color: var(--color-text-secondary);
}

.info-content {
  color: var(--color-text-body);
}
</style>
