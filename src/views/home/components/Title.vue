<template>
  <div class="title">
    <div class="heading3-bold text">{{ props.title }}</div>
    <div
      v-if="props.allView"
      class="all-view caption-regular"
    >
      모두보기
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue';

interface Props {
  title: string;
  allView?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  allView: false,
});
</script>

<style scoped>
.title {
  display: flex;
  justify-content: space-between;
}

.text {
  color: var(--color-neutral-100);
}

.all-view {
  gap: 8px;
  display: flex;
  padding: var(--padding-xs);
  color: var(--color-text-white-50);
}
</style>
