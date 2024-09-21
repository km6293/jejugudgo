<template>
  <div class="result-cards">
    <div class="select-content">
      <div class="select-top">
        <div class="header">
          <div>
            <div class="select-title subheading-bold">제주 올레길 7코스</div>
            <div class="select-target body2-regular">시작점-도착점</div>
          </div>
          <HeartIcon :type="false" />
        </div>
      </div>
      <div class="content-info">
        <div class="info-item">
          <div><DistanceIcon /></div>
          <p class="info-text caption-medium">5.14km</p>
        </div>
        <div class="info-item">
          <div><Time1Icon /></div>
          <p class="info-text caption-medium">3시간</p>
        </div>
        <div class="info-item">
          <div><StarIcon /></div>
          <p class="info-text caption-medium">4.5(251)</p>
        </div>
      </div>
      <Tag :tags="['바다', '올레길', '관광명소']" />
      <div class="select-bottom body2-regular">
        용수포구 절부암 앞에서 시작하여 저지예술정보화마을까지 이어진 14.8km의
        길로 약 4~5시간 소요되며, 바다에서 시작하지만 한라산 방향으로 뻗어가며
        제주 서부 중산간 깊숙한 곳까지 닿는다.
      </div>
    </div>
    <div class="select-buttons">
      <div
        class="select-button start-button body1-bold"
        @click="onWalkingButton"
      >
        시작하기
      </div>
      <div class="select-button detail-button body1-bold">상세보기</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Tag,
  StarIcon,
  Time1Icon,
  DistanceIcon,
  HeartIcon,
} from '@/components';
import { useRouter } from 'vue-router';
import { useSearchCourseStore } from '@/stores/recommendedCourse/searchCourse';

const searchCourseStore = useSearchCourseStore();
const router = useRouter();
const onWalkingButton = () => {
  searchCourseStore.updateData('showSearch', false);
  searchCourseStore.updateData('showNowMap', false);
  searchCourseStore.updateData('showAllCourse', false);
  searchCourseStore.updateData('selectCourse', false);
  router.push({ path: '/walking-course' });
};
</script>

<style scoped>
.result-cards {
  flex-grow: 1;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.header {
  display: flex;
  justify-content: space-between;
}

.select-content {
  display: flex;
  flex-direction: column;
  gap: var(--margin-m);
}

.select-top {
  display: flex;
  flex-direction: column;
  gap: var(--margin-xs);
}

.select-title {
  color: var(--color-neutral-100);
}

.select-target {
  color: var(--color-text-body);
}

.select-bottom {
  color: var(--color-text-body);
}

.select-buttons {
  display: flex;
  justify-content: space-between;
}

.select-button {
  width: 154px;
  height: 48px;
  border-radius: var(--padding-s);
  padding: var(--padding-m);
  display: flex;
  align-items: center;
  justify-content: center;
}

.start-button {
  background-color: var(--color-button-primary);
  color: var(--button-on-primary);
}

.detail-button {
  background-color: #242424;
  color: #ffffff;
}

.info-item {
  display: flex;
  align-items: center;
}

.info-text {
  color: var(--color-text-body);
}

.content-info {
  display: flex;
  gap: 8px;
}
</style>
