<template>
  <div class="container">
    <div class="header">
      <div class="start-text">
        <div class="start-title subheading-bold">
          <BigArrowIcon @click="movePage(2)" />
          최적의 걷기 시작점을 찾았어요!
        </div>
      </div>
      <div class="button">
        <Button
          @click="movePage(4)"
          text="다음"
          :style="{
            height: '40px',
          }"
        />
      </div>
    </div>
    <div class="content">
      <div class="items">
        <div
          class="item"
          v-for="item of 10"
          :key="item"
        >
          <CardImage
            :test="'74x74'"
            :icon="false"
          />
          <div class="card-info">
            <div class="info-head body1-medium">장소명</div>
            <div class="info-content caption-regular">
              <div>장소에 대한 설명</div>
              <div>장소에 대한 설명</div>
            </div>
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

.items {
  display: flex;
  flex-direction: column;
  gap: var(--margin-m);
  height: 100%;
  overflow-y: auto;
  scrollbar-width: none;
}

.item {
  display: flex;
  gap: var(--margin-m);
}

.card-info {
  display: flex;
  flex-direction: column;
  gap: var(--margin-s);
}

.info-head {
  color: var(--color-text-secondary);
}

.info-content {
  color: var(--color-text-body);
}
</style>
