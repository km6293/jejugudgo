<template>
  <div class="container">
    <div class="header">
      <div class="start-text">
        <div class="start-title subheading-bold">어디서부터 시작할까요?</div>
        <Info2Icon />
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
      <div class="location">
        <Search />
        <div class="target">
          <TargetIcon />
          <div class="body2-regular">현위치로 설정</div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="helper">
        <div class="helper-text body1-medium">
          어디서부터 마칠지 고민된다면?
        </div>
        <div
          class="helper-button body2-bold"
          @click="movePage(2)"
        >
          추천받기
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Info2Icon, Button, TargetIcon } from '@/components';
import { Search } from './index';
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
  height: 48px;
}

.start-text {
  display: flex;
  gap: var(--margin-xs);
  align-items: center;
}

.start-title {
  color: #f2f2f2;
}

.location {
  display: flex;
  flex-direction: column;
  gap: var(--margin-s);
}

.target {
  display: flex;
  align-items: center;
  justify-content: end;
  color: var(--color-text-body);
}

.divider {
  width: 100%;
  border: 1px solid var(--color-opacity-white-15);
}

.content {
  gap: var(--margin-m);
  display: flex;
  flex-direction: column;
}

.helper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.helper-text {
  color: #f2f2f2;
}

.helper-button {
  border-radius: var(--padding-s);
  height: 36px;
  padding: 8px 16px;
  gap: var(--spacing-1);
  border: 1px solid var(--color-button-primary);
  color: var(--color-button-primary);
}
</style>
