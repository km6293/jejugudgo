<template>
  <div class="content-tags">
    <div
      v-for="tag in props.tags"
      :key="tag"
      class="tag"
    >
      <span class="tag-text caption-regular">{{ tag }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps<{
  tags: string[];
}>();
</script>

<style scoped>
.content-tags {
  display: flex;
  gap: 4px;
}

.tag {
  display: inline-flex;
  align-items: center;
  border-radius: var(--radius-xs);
  padding: 3px var(--padding-xs);
  border: 1px solid var(--Neutral-700, #555555);
}

.tag-text {
  color: var(--color-text-body);
  white-space: nowrap;
}
</style>
