<template>
  <div class="card-content">
    <div class="content-header">
      <div class="content-title body1-medium">
        강남 한복판에서 부산 광안대교까지
      </div>
      <p class="content-body body2-regular">시작점-도착점</p>
    </div>
    <div class="content-info">
      <div
        v-if="props.distance"
        class="info-item"
      >
        <div class="info-icon"><DistanceIcon /></div>
        <p class="info-text caption-medium">5.14km</p>
      </div>
      <div
        v-if="props.time"
        class="info-item"
      >
        <div class="info-icon"><Time1Icon /></div>
        <p class="info-text caption-medium">3시간</p>
      </div>
      <div
        v-if="props.star"
        class="info-item"
      >
        <div class="info-icon"><StarIcon /></div>
        <p class="info-text caption-medium">4.5(251)</p>
      </div>
    </div>
    <Tag :tags="['바다', '올레길']" />
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue';
import { StarIcon, DistanceIcon, Time1Icon, Tag } from '@/components';

interface Props {
  distance?: boolean;
  time?: boolean;
  star?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  distance: false,
  time: false,
  star: false,
});
</script>

<style scoped>
.card-content {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
}

.content-header {
  display: grid;
  gap: var(--margin-xs);
}

.content-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--color-text-secondary);
}

.content-body,
.info-text {
  color: var(--color-text-body);
}

.content-info {
  display: flex;
  gap: var(--margin-xs);
}

.info-item {
  display: flex;
  align-items: center;
}
</style>
