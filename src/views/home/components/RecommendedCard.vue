<template>
  <div class="recommended-place">
    <div class="recommended-content">
      <div class="recommended-title">
        <div class="body1-medium">제주 현지인 맛집</div>
        <div class="body1-medium">내돈내산 후기</div>
      </div>
      <div class="recommended-info">
        <div class="recommended-write caption-bold">By 제주걷고</div>
        <div class="recommended-devider" />
        <div class="recommended-time regular-12">3시간전</div>
      </div>
    </div>
    <div>
      <CardImage :test="'74x74'" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { CardImage } from '@/components';
</script>

<style scoped>
.recommended-place {
  display: flex;
  gap: var(--margin-m);
  justify-content: space-between;
  height: 74px;
}

.recommended-content {
  gap: var(--margin-s);
  display: grid;
}

.recommended-title {
  color: var(--color-text-secondary);
  gap: var(--margin-xs);
}

.recommended-info {
  display: flex;
  align-items: center;
  gap: 8px;
}

.recommended-write {
  color: var(--color-text-secondary);
}
.recommended-time {
  color: var(--color-text-body);
}

.recommended-devider {
  border: 1px solid var(--Opacity-White-30, #ffffff4d);
  height: 8px;
}
</style>
