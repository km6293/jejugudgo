<template>
  <div class="trail-container">
    <Title
      :title="'제주도 주변 산책로'"
      :allView="true"
    />
    <Tags />
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
import { CardContent, CardImage, Tags } from '@/components';
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

.trail-container {
  padding: 0px 20px 0px 20px;
  display: flex;
  margin-top: 40px;
  flex-direction: column;
  gap: var(--margin-m);
}
</style>
