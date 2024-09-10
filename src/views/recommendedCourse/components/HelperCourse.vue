<template>
  <div class="container">
    <div class="header">
      <div class="start-text">
        <div class="start-title subheading-bold">
          <BigArrowIcon @click="movePage(1)" />
          어떤 장르의 코스를 원하세요?
        </div>
      </div>
      <div class="button">
        <Button
          @click="movePage(3)"
          text="다음"
          :style="{
            height: '40px',
          }"
        />
      </div>
    </div>
    <div class="content">
      <div class="slider">
        <div
          v-for="item of 10"
          :key="item"
          class="slider-item"
        >
          <div class="item">
            <CardImage
              :test="'96x96'"
              :icon="false"
            />
            <div class="image-text body2-bold">바다</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button, BigArrowIcon, CardImage } from '@/components';
import { defineProps } from 'vue';

const props = defineProps<{
  setStep: (step: number) => void;
}>();

const movePage = (num: number) => {
  props.setStep(num);
};
</script>

<style scoped>
.container {
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: var(--margin-m);
}

.header {
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.start-text {
  display: flex;
  gap: var(--margin-xs);
  align-items: center;
}

.start-title {
  display: flex;
  align-items: center;
  color: #f2f2f2;
}

.slider {
  overflow-x: auto;
  display: inline-flex;
  gap: var(--margin-m);
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.item {
  display: flex;
  flex-direction: column;
  gap: var(--margin-xs);
}

.image-text {
  align-self: center;
  color: var(--color-text-active);
}
</style>
