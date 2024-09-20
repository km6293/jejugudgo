<template>
  <div class="tag-slider">
    <div class="content-tags">
      <div
        v-for="(tag, index) in finalTags"
        :key="index"
        class="tag"
        :class="{ 'selected-tag': tag === selectedTag }"
        @click="handleClick(tag)"
      >
        <span class="tag-text body2-bold">{{ tag }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  tags: {
    type: Array as () => string[],
    required: false,
    default: () => [],
  },
  selectedTag: {
    type: String,
    required: false,
  },
});

const emit = defineEmits(['tag-clicked']);

const defaultTags = ['전체', '숲길', '오름', '바다', '산', '마을'];
const finalTags = computed(() =>
  props.tags.length ? props.tags : defaultTags
);

const handleClick = (tag: string) => {
  emit('tag-clicked', tag);
};
</script>

<style scoped>
.tag-slider {
  overflow-x: auto;
  display: inline-flex;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.content-tags {
  display: flex;
  gap: var(--margin-s);
}

.tag {
  height: 36px;
  gap: 8px;
  display: inline-flex;
  align-items: center;
  border-radius: var(--radius-s);
  padding: 3px var(--padding-m);
  border: 1px solid var(--Neutral-700, #555555);
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.tag.selected-tag {
  background-color: var(--color-primary); /* 선택된 태그의 배경색 */
  color: white; /* 선택된 태그의 글자색 */
}

.tag-text {
  color: var(--color-button-on-secondary);
  white-space: nowrap;
}
</style>
