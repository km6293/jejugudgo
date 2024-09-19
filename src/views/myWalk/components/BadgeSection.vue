<template>
  <div class="badge-container">
    <div class="subheading-bold badge-text">{{ props.title }}</div>
    <div class="badge-slider">
      <Badge
        v-for="badge in props.badges"
        :key="badge.number"
        :type="badge.type"
        :number="badge.number"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { Badge } from './';
interface BadgeItem {
  type: string;
  number?: number;
}

const props = defineProps<{
  title: string;
  badges: BadgeItem[];
}>();
</script>

<style scoped>
.badge-container {
  display: flex;
  flex-direction: column;
  gap: var(--margin-m);
}

.badge-text {
  color: var(--color-neutral-100);
}

.badge-slider {
  overflow-x: auto;
  display: inline-flex;
  gap: var(--margin-m);
  -ms-overflow-style: none;
  scrollbar-width: none;
  scroll-snap-type: x mandatory;
}
</style>
