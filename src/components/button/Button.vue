<template>
  <button
    :type="props.type || 'button'"
    :disabled="props.disabled"
    class="form-button body1-bold"
    @click="handleClick"
    :style="props.style"
  >
    <span
      v-if="props.icon"
      class="icon"
    >
      <component :is="props.icon" />
    </span>
    <span>
      {{ props.text }}
    </span>
  </button>
</template>

<script lang="ts" setup>
import { defineEmits, defineProps } from 'vue';
import type { IButtonType } from './ButtonTypes';

const props = defineProps<IButtonType>();
const emit = defineEmits(['click']);

const handleClick = () => {
  if (!props.disabled) {
    emit('click');
  }
};
</script>

<style scoped lang="scss">
button {
  border: none;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 56px;
  padding: 16px;
  position: relative;
  background-color: var(--color-button-primary);

  &:active {
    background-color: var(--color-button-surface-pressed);
  }

  &:disabled {
    background-color: var(--color-neutral-500);
    color: var(--color-neutral-700);
    cursor: default;
  }

  .icon {
    display: flex;
    align-items: center;
  }
}
</style>
