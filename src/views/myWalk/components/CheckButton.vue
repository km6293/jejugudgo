<template>
  <div :class="['button', { checked: check }]">
    <div class="inner">
      <Check3Icon v-if="check" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Check3Icon } from '@/components';
import { defineProps } from 'vue';

const props = defineProps({
  check: Boolean,
});
</script>

<style scoped>
.button {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.inner {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  background-color: var(--color-neutral-700);
}

.checked .inner {
  border: 1px solid var(--color-green-500);
}
</style>
