<template>
  <article
    class="event-card"
    v-if="event"
  >
    <section class="card-content">
      <div class="content-left">
        <p class="event-title body1-medium">{{ event.title }}</p>
        <div class="event-content">
          <p class="item caption-medium">
            <span>진행 정보: {{ event.type }}</span>
          </p>
          <p class="item caption-medium">
            <span>주최기관명: {{ event.organization }}</span>
          </p>
          <p class="item caption-medium">
            <span>시작 일정: {{ event.startDate }}</span>
          </p>
        </div>
      </div>
      <img
        :src="event.imageUrl || 'https://via.placeholder.com/220x182'"
        :alt="event.title || event"
        class="contest-image"
      />
    </section>
  </article>
</template>

<script setup lang="ts">
import {
  DistanceIcon,
  Time1Icon,
  PeopleIcon,
  CardImage,
  Chips,
} from '@/components';

// eslint-disable-next-line
const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.event-card {
  background-color: var(--color-card-surface);
  min-width: 100%;
  height: 176px;
  padding: var(--margin-m);
  gap: var(--margin-m);
  border-radius: var(--radius-s);
  display: flex;
  flex-direction: column;
}

.card-header {
  display: flex;
  justify-content: space-between;
}

.contest-image {
  width: 150px;
  height: 150px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
}

.create-time {
  color: var(--color-text-muted);
}

.card-content {
  display: flex;
  justify-content: space-between;
  gap: var(--margin-m);
}

.content-left {
  gap: var(--margin-m);
  display: flex;
  flex-direction: column;
}

.event-title {
  color: var(--color-text-secondary);
}

.event-content {
  display: flex;
  flex-direction: column;
  gap: var(--margin-xs);
}

.item {
  gap: var(--margin-xs);
  display: flex;
  align-items: center;
  color: var(--color-text-body);
}

.item-point {
  color: var(--color-text-primary);
}
</style>
