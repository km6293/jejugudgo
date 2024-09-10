<template>
  <div class="input-container">
    <input class="content-input body2-medium" />
    <SearchIcon />
  </div>
</template>

<script setup lang="ts">
import { SearchIcon } from '@/components';
</script>

<style scoped>
.input-container {
  padding: 20px;
  width: 100%;
  height: 52px;
  gap: var(--margin-s);
  display: flex;
  align-items: center;
  border-radius: var(--radius-s);
  background-color: var(--color-neutral-700);
}

.content-input {
  width: 100%;
  height: 52px;
  border: none;
  background-color: var(--color-neutral-700);
  outline: none;
  border: none;
  border-radius: var(--radius-s);
  color: var(--color-text-active);
}
</style>
