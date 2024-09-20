<template>
  <div class="back-button">
    <LeftIcon />
  </div>
</template>

<script setup lang="ts">
import { LeftIcon } from '@/components';
</script>

<style scoped>
.back-button {
  position: absolute;
  top: 22px;
  left: 22px;
  padding: 12px;
  border-radius: 1000px;
  background-color: var(--color-button-secondary);
}
</style>
