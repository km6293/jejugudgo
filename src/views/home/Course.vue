<template>
  <div class="course-container">
    <div class="recommended-course">
      <div class="heading3-bold course-text">오늘의 추천코스</div>
      <CardImage />
      <CardContent />
    </div>
    <div class="walking-courses">
      <div class="heading3-bold course-text">걷기 코스 TOP 10</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CardContent, CardImage } from '@/components';
</script>

<style scoped>
.course-container {
  margin-top: 40px;
  flex-direction: column;
  display: flex;
  gap: 40px;
}

.recommended-course {
  gap: var(--margin-m2);
  padding: 0px 20px 0px 20px;
  display: grid;
}

.walking-courses {
  gap: var(--margin-m2);
  padding: 0px 20px 0px 20px;
  display: grid;
}

.course-text {
  color: var(--color-neutral-100);
}
</style>
