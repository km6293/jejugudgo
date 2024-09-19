<template>
  <div :class="['card-container', { check: checked }]">
    <div
      v-if="showHeader"
      class="card-header"
    >
      <Chips :status="true ? 'private' : 'public'" />
      <CheckButton
        v-if="showIcon"
        class="header-check"
        :check="checked"
        @click="emitCheck"
      />
    </div>
    <div class="card-item">
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
import { defineProps, defineEmits } from 'vue';
import { CheckButton } from './';
import { CardContent, CardImage, Chips } from '@/components';

const props = defineProps({
  showHeader: Boolean,
  showIcon: Boolean,
  checked: Boolean,
});

const emit = defineEmits(['check']);

const emitCheck = () => {
  emit('check');
};
</script>

<style scoped>
.card-container {
  background-color: var(--color-card-surface);
  border-radius: var(--radius-s);
  padding: var(--margin-m);
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 1px solid var(--color-card-surface);
}

.check {
  border: 1px solid var(--color-primary-500);
}

.card-item {
  display: flex;
  gap: 16px;
}

.card-header {
  display: flex;
}

.header-check {
  margin-left: auto;
}
</style>
