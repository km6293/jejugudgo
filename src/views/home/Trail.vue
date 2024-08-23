<template>
  <div class="trail-container">
    <Title
      :title="'제주도 주변 산책로'"
      :allView="true"
    />
    <div class="tag-slider">
      <div class="content-tags">
        <div
          v-for="tag in tags"
          :key="tag"
          class="tag"
        >
          <span class="tag-text body2-bold">{{ tag }}</span>
        </div>
      </div>
    </div>
    <div class="walking-slider">
      <div
        v-for="item of 3"
        :key="item"
        class="walking-item"
      >
        <CardImage :test="'104x104'" />
        <CardContent :star="true" />
      </div>
    </div>
    <Advertisement />
  </div>
</template>

<script setup lang="ts">
import { Advertisement, Title } from './components';
import { CardContent, CardImage } from '@/components';
const tags = ['전체', '숲길', '오름', '바다', '산', '마을'];
</script>

<style scoped>
.walking-item {
  height: 104px;
  gap: 12px;
  display: flex;
}

.walking-slider {
  gap: var(--margin-m);
  display: grid;
}

.trail-container {
  padding: 0px 20px 0px 20px;
  display: flex;
  margin-top: 40px;
  flex-direction: column;
  gap: var(--margin-m);
}

.tag-slider {
  overflow-x: auto;
  display: inline-flex;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.content-tags {
  display: flex;
  gap: var(--margin-s);
}

.tag {
  height: 36px;
  gap: 8px;
  display: inline-flex;
  align-items: center;
  border-radius: var(--radius-s);
  padding: 3px var(--padding-m);
  border: 1px solid var(--Neutral-700, #555555);
}

.tag-text {
  color: var(--color-button-on-secondary);
  white-space: nowrap;
}
</style>
