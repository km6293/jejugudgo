<template>
  <div class="target-button">
    <Button
      :icon="TargetIcon"
      :style="buttonStyle"
    />
  </div>
</template>

<script setup lang="ts">
import { Button, TargetIcon } from '@/components';
const buttonStyle = {
  backgroundColor: 'var(--color-button-secondary)',
  color: 'var(--color-button-on-secondary)',
  width: '48px',
  height: '48px',
  fontSize: '1.4rem',
};
</script>

<style scoped>
.target-button {
  padding: var(--margin-m2);
  display: flex;
  position: absolute;
  bottom: 84px;
}
</style>
