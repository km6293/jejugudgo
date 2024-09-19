<template>
  <div class="my-record">
    <div class="heading3-bold">나의 걷기 여행</div>
    <div
      v-for="(item, index) in recordsData"
      :key="index"
    >
      <div
        class="record-item"
        @click="navigateTo(item.move)"
      >
        <span class="body1-medium">{{ item.label }}</span>
        <RightIcon />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RightIcon } from '@/components';
import router from '@/router';

const recordsData = [
  { label: '나의 걷기 여행', move: 'walking-travel' },
  { label: '코스 이용 내역', move: 'course-usage-history' },
  { label: '코스 생성 내역', move: 'course-creation-history' },
  { label: '즐겨찾기', move: 'favorites' },
  { label: '리뷰 관리', move: 'review-management' },
  { label: '배지 내역', move: 'badge-history' },
];

const navigateTo = (routeName: string) => {
  router.push({ name: routeName });
};
</script>

<style scoped>
.my-record {
  color: var(--color-neutral-100);
  display: flex;
  flex-direction: column;
  gap: var(--margin-m);
}

.record-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--margin-s2);
}
</style>
