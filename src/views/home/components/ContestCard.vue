<template>
  <div class="contest-container">
    <img
      :src="'https://via.placeholder.com/220x182'"
      :alt="alt"
      :style="imageStyle"
      class="contest-image"
    />
    <div class="contest-scheduled">
      <div
        class="scheduled-container"
        :class="{ ongoing: isOngoing, upcoming: !isOngoing }"
      >
        <div class="caption-medium">
          {{ isOngoing ? '진행중' : '진행예정' }}
        </div>
      </div>
    </div>
    <div class="contest-content">
      <div class="content-title body1-medium">
        2024 아름다운 제주 국제 마라톤 대회
      </div>
      <div class="content-info">
        <div class="info-name regular-12">주최기관명</div>
        <div class="info-date caption-medium">2024.10.02</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CSSProperties, defineProps, ref } from 'vue';
const isOngoing = ref(true);

const props = defineProps<{
  alt?: string;
  imageStyle?: CSSProperties;
}>();
</script>

<style scoped>
.contest-container {
  border-radius: 12px;
  position: relative;
}

.contest-scheduled {
  position: absolute;
  top: 0;
  left: 0;
  padding: var(--padding-xs);
}

.scheduled-container {
  border-radius: var(--radius-xs);
  padding: var(--margin-s) var(--padding-m);
}

.contest-image {
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.ongoing {
  background-color: var(--color-button-primary);
  color: var(--button-on-primary);
}

.upcoming {
  background-color: var(--color-button-secondary);
  color: var(--color-neutral-100);
}

.contest-content {
  width: 220px;
  height: 74px;
  background-color: var(--color-card-surface);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  gap: 8px;
  padding: 12px;
  display: grid;
}

.content-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--color-neutral-100);
}

.content-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.info-name {
  color: var(--color-text-muted);
}

.info-date {
  color: var(--color-text-body);
}
</style>
