<template>
  <div class="create-course-button">
    <Button
      text="코스 생성하기"
      :icon="SparkleIcon"
      :style="smallButtonStyle"
    />
  </div>
</template>

<script setup lang="ts">
import { Button, SparkleIcon } from '@/components';

const smallButtonStyle = {
  width: '158px',
  height: '48px',
  fontSize: '1.4rem',
};
</script>

<style scoped>
.create-course-button {
  padding: var(--margin-m2);
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
