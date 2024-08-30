<template>
  <div class="walking-slider">
    <div
      v-for="item of 3"
      :key="item"
      class="walking-item"
    >
      <CardImage :test="'104x104'" />
      <CardContent
        :star="true"
        :time="true"
        :distance="true"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { CardContent, CardImage } from '@/components';
</script>

<style scoped>
.walking-slider {
  gap: var(--margin-m);
  display: grid;
}

.walking-item {
  height: 104px;
  gap: 16px;
  display: flex;
}
</style>
