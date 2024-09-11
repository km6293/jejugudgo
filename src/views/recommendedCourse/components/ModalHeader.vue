<template>
  <div class="header">
    <div class="start-text">
      <BigArrowIcon
        v-if="showLeftIcon"
        @click="onLeftClick"
      />
      <div class="start-title subheading-bold">{{ title }}</div>
      <Info2Icon v-if="showInfoIcon" />
    </div>
    <div
      class="button"
      v-if="showRightButton"
    >
      <Button
        @click="onRightClick"
        :text="rightButtonText"
        :style="{ height: '40px' }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, withDefaults } from 'vue';
import { Button, Info2Icon, BigArrowIcon } from '@/components';

const props = withDefaults(
  defineProps<{
    title: string;
    showLeftIcon?: boolean;
    showInfoIcon?: boolean;
    showRightButton?: boolean;
    rightButtonText?: string;
  }>(),
  {
    showLeftIcon: true,
    showInfoIcon: false,
    showRightButton: true,
    rightButtonText: '다음',
  }
);

const emits = defineEmits(['left-click', 'right-click']);

const onLeftClick = () => emits('left-click');
const onRightClick = () => emits('right-click');
</script>

<style scoped>
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
</style>
