<template class="card-content">
  <div class="content-write">
    <div class="content-title body1-medium">
      강남 한복판에서 부산 광안대교까지
    </div>
    <div class="contetn-body body2-regular">시작점-도착점</div>
  </div>
  <div class="content-info">
    <div class="info-container">
      <div class="info-icon"><DistanceIcon /></div>
      <div class="info-content caption-medium">5.14km</div>
    </div>
    <div class="info-container">
      <div class="info-icon"><Time1Icon /></div>
      <div class="info-content caption-medium">3시간 이상</div>
    </div>
    <div class="info-container">
      <div class="info-icon"><StarIcon /></div>
      <div class="info-content caption-medium">4.5(251)</div>
    </div>
  </div>
  <div class="content-tag">
    <div class="tag-radius">
      <div class="tag-content caption-regular">바다</div>
    </div>
    <div class="tag-radius">
      <div class="tag-content caption-regular">올레길</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { StarIcon, DistanceIcon, Time1Icon } from '@/components';
</script>

<style scoped>
.card-content {
  display: flex;
  justify-content: center;
  gap: var(--margin-xs);
}

.content-write {
  gap: var(--margin-xs);
}

.content-title {
  color: var(--color-text-secondary);
}

.contetn-body {
  color: var(--color-text-body);
}

.content-info {
  gap: 8px;
  display: flex;
}

.info-content {
  color: var(--color-text-body);
}

.info-container {
  align-items: center;
  display: flex;
}

.content-tag {
  display: flex;
  gap: 4px;
}

.tag-radius {
  display: inline-flex;
  border-radius: var(--radius-xs);
  padding: var(--padding-xs);
  gap: 1rem;
  border: 1px solid var(--Neutral-700, #555555);
}

.tag-content {
  flex-wrap: wrap;
  color: var(--color-text-body);
}
</style>
