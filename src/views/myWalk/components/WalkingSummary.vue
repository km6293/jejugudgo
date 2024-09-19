<template>
  <div class="table">
    <div
      class="table-item"
      v-for="(item, index) in statsData"
      :key="index"
    >
      <div class="item-top">
        <component :is="item.icon" />
        <span class="item-text body1-medium">{{ item.label }}</span>
      </div>
      <div class="item-bottom">
        <span class="item-highlight heading1">{{ item.value }}</span>
        <span class="item-text body1-medium">{{ item.unit }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CourseIcon, DistanceIcon, ShoesIcon, BadgeIcon } from '@/components';

const statsData = [
  { icon: ShoesIcon, label: '총 걸은 시간', value: 15, unit: '시간' },
  { icon: DistanceIcon, label: '총 걸은 거리', value: 7, unit: 'km' },
  { icon: CourseIcon, label: '총 걸음 수', value: 3, unit: '개' },
  { icon: BadgeIcon, label: '달성 배지', value: 3, unit: '개' },
];
</script>

<style scoped>
.table {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--margin-s);
}

.table-item {
  display: flex;
  flex-direction: column;
  background-color: var(--color-input-chat-on-surface);
  border-radius: var(--radius-s);
  padding: var(--margin-m2);
  gap: var(--margin-xs);
}

.item-highlight {
  color: var(--color-button-primary);
}

.item-text {
  color: var(--color-neutral-100);
}

.item-top {
  display: flex;
  gap: 4px;
  align-items: center;
}

.item-bottom {
  display: flex;
  gap: 4px;
  align-items: flex-end;
  justify-content: flex-end;
}
</style>
