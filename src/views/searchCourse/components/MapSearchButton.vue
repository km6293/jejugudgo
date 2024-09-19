<template>
  <div class="map-search-button body2-regular">
    <TargetIcon />
    현 지도에서 검색
  </div>
</template>

<script setup lang="ts">
import { TargetIcon } from '@/components';
</script>

<style scoped>
.map-search-button {
  position: absolute;
  top: 22px;
  border-radius: var(--radius-xl);
  background-color: var(--color-neutral-white);
  color: var(--color-primary-700);
  padding: var(--margin-s) var(--margin-s2) var(--margin-s) var(--margin-s2);
  display: flex;
  align-items: center;
  left: 50%;
  transform: translateX(-50%);
}
</style>
