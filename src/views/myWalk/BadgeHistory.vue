<template>
  <div class="container">
    <TopBar>
      <template #center>배지</template>
      <template #right></template>
    </TopBar>
  </div>
  <div class="contents">
    <div class="body1-bold now-badge">
      보유한 배지 <span class="text-highlight">90개</span>
    </div>

    <div
      v-for="section in sections"
      :key="section.title"
    >
      <BadgeSection
        :title="section.title"
        :badges="section.badges"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { TopBar, BadgeSection } from './components';

const sections = [
  {
    title: '올레길',
    badges: [
      { type: 'olle', number: 1 },
      { type: 'olle', number: 3 },
      { type: 'olle', number: 5 },
    ],
  },
  {
    title: '산책로',
    badges: [
      { type: 'mountain', number: 1 },
      { type: 'mountain', number: 3 },
      { type: 'mountain', number: 5 },
    ],
  },
  {
    title: '제주객의 길',
    badges: [
      { type: 'userCourse', number: 1 },
      { type: 'userCourse', number: 3 },
      { type: 'userCourse', number: 5 },
    ],
  },
  {
    title: '동행자와 걷기',
    badges: [
      { type: 'companion', number: 1 },
      { type: 'companion', number: 3 },
      { type: 'companion', number: 5 },
    ],
  },
  {
    title: '걷기기록 남기기',
    badges: [
      { type: 'walkingRecord', number: 1 },
      { type: 'walkingRecord', number: 3 },
      { type: 'walkingRecord', number: 5 },
    ],
  },
  {
    title: '연속 걷기',
    badges: [
      { type: 'continuous', number: 1 },
      { type: 'continuous', number: 3 },
      { type: 'continuous', number: 5 },
    ],
  },
  {
    title: '웰컴 뱃지',
    badges: [{ type: 'welcome' }],
  },
];
</script>

<style scoped>
.container {
  position: relative;
}

.contents {
  display: flex;
  flex-direction: column;
  padding: 68px 20px 20px;
  gap: var(--margin-xl);
}

.now-badge {
  color: var(--color-button-on-secondary);
  padding: var(--padding-m);
  background-color: var(--color-card-surface);
  border-radius: var(--padding-s);
}

.text-highlight {
  color: var(--color-primary-500);
}
</style>
