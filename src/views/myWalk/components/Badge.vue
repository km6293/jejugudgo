<template>
  <div class="badge-item">
    <div class="badge-content">
      <div class="badge-inner">
        <component :is="badgeIcon" />
        <div
          v-if="props.number !== undefined"
          class="badge-number body2-regular"
        >
          {{ props.number }}
        </div>
      </div>
    </div>
    <div
      v-if="props.number !== undefined"
      class="badge-title body2-regular"
    >
      이용 <span class="title-highlight">{{ props.number }}</span
      >회
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';
import {
  CompanionWalkIcon,
  ContinuousWalkIcon,
  MountainWalkIcon,
  OlleCourseIcon,
  UserCreatedCourseIcon,
  WelcomeIcon,
  WalkingRecordIcon,
} from '@/components';

const props = defineProps({
  type: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
  },
});

const badgeIcon = computed(() => {
  switch (props.type) {
    case 'companion':
      return CompanionWalkIcon;
    case 'continuous':
      return ContinuousWalkIcon;
    case 'mountain':
      return MountainWalkIcon;
    case 'olle':
      return OlleCourseIcon;
    case 'userCourse':
      return UserCreatedCourseIcon;
    case 'welcome':
      return WelcomeIcon;
    case 'walkingRecord':
      return WalkingRecordIcon;
    default:
      return null;
  }
});
</script>

<style scoped>
.badge-item {
  display: flex;
  flex-direction: column;
  gap: var(--margin-s);
  align-items: center;
}

.badge-content {
  background-color: var(--color-card-surface);
  border-radius: var(--radius-s);
  padding: 14px;
}

.badge-inner {
  position: relative;
}

.badge-number {
  width: 20px;
  height: 20px;
  background: linear-gradient(275.71deg, #e6e6e6 3.18%, #f2f2f2 95%);
  border-radius: 1000px;
  color: #333333;
  display: flex;
  justify-content: center;
  position: absolute;
  right: 0;
  bottom: 0;
}

.badge-title {
  color: var(--color-neutral-300);
}

.title-highlight {
  color: var(--color-neutral-white);
}
</style>
