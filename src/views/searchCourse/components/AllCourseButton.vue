<template>
  <div class="search-course-button">
    <Button
      text="전체 코스 보기"
      :icon="TabIcon"
      :style="searchButtonStyle"
    />
  </div>
</template>

<script setup lang="ts">
import { TabIcon, Button } from '@/components';

const searchButtonStyle = {
  backgroundColor: 'var(--color-button-secondary)',
  color: 'var(--color-button-on-secondary)',
  height: '48px',
  width: '156px',
  fontSize: '1.4rem',
};
</script>

<style scoped>
.search-course-button {
  padding: var(--margin-m2);
  display: flex;
  position: absolute;
  bottom: 0;
}
</style>
