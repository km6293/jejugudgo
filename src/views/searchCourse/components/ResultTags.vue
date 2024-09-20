<template>
  <div class="tag-slider">
    <div class="setting-icon">
      <Setting2Icon />
    </div>
    <Tags />
  </div>
</template>

<script setup lang="ts">
import { Setting2Icon, Tags } from '@/components';
</script>

<style scoped>
.tag-slider {
  gap: 8px;
  overflow-x: auto;
  display: inline-flex;
  -ms-overflow-style: none;
  scrollbar-width: none;
  white-space: nowrap;
  align-items: start;
  flex-shrink: 0;
  margin-bottom: 4px;
}

.setting-icon {
  border: 1px solid var(--Neutral-700, #555555);
  padding: var(--margin-s);
  border-radius: var(--radius-s);
}
</style>
