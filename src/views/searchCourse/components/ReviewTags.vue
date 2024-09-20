<template>
  <div class="tag-list">
    <div
      v-for="(tag, index) in props.tags"
      :key="index"
      class="tag body2-regular"
      :class="{ selected: selectedTags.includes(tag.title) }"
      @click="selectTag(tag.title)"
    >
      {{ tag.title }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  tags: {
    type: Array,
    required: true,
  },
  selectedTags: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(['tag-click']);

const selectTag = (tag: string) => {
  console.log(tag);
  emit('tag-click', tag);
};
</script>

<style scoped>
.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  cursor: pointer;
  padding: 8px 16px;
  border: 1px solid var(--color-neutral-700, #555555);
  border-radius: var(--radius-s);
  color: var(--color-button-on-secondary);
}

.tag.selected {
  color: var(--color-primary-500);
  border-color: var(--color-primary-500);
}
</style>
