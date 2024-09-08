<template>
  <div class="course-container">
    <Tags />
  </div>
  <div class="create-course">
    <div class="button-inner">
      <SparkleIcon />
      <div class="course-button body2-bold">코스 생성하기</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Tags } from '@/components';
</script>

<style scoped>
.course-container {
  display: flex;
  gap: 40px;
  padding: 40px 20px;
  flex-direction: column;
}

.create-course {
  position: sticky;
  bottom: 20px;
  display: flex;
  justify-content: flex-end;
  padding: 0 20px 0 0;
}
.button-inner {
  background-color: var(--color-button-primary);
  display: flex;
  align-items: center;
  width: auto;
  height: 4.4rem;
  padding: var(--padding-m);
  gap: var(--spacing-1);
  border-radius: var(--padding-s);
  justify-content: center;
  max-width: 14rem;
}
.course-button {
  white-space: nowrap;
}
</style>
