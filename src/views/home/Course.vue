<template>
  <div class="course-container">
    <div class="recommended-course">
      <Title :title="'오늘의 추천코스'" />
      <div class="recommended-slider">
        <div
          v-for="item of 5"
          :key="item"
          class="recommended-item"
        >
          <CardImage :test="'225x148'" />
          <CardContent
            :star="true"
            :time="true"
            :distance="true"
          />
        </div>
      </div>
    </div>
    <div class="walking-courses">
      <Title :title="'걷기 코스 TOP 10'" />
      <CourseCard />
    </div>
  </div>
</template>

<script setup lang="ts">
import { CardContent, CardImage } from '@/components';
import { Title, CourseCard } from './components';
</script>

<style scoped>
.walking-item {
  height: 104px;
  gap: 16px;
  display: flex;
}

.walking-slider {
  gap: var(--margin-m);
  display: grid;
}

.recommended-slider {
  overflow-x: auto;
  display: inline-flex;
  gap: var(--margin-m);
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.recommended-item {
  width: 225px;
}

.course-container {
  display: flex;
  margin-top: 40px;
  flex-direction: column;
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
</style>
