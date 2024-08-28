<template>
  <div class="tag-slider">
    <div class="content-tags">
      <div
        v-for="tag in tags"
        :key="tag"
        class="tag"
      >
        <span class="tag-text body2-bold">{{ tag }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const tags = ['전체', '숲길', '오름', '바다', '산', '마을'];
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
}

.tag-text {
  color: var(--color-button-on-secondary);
  white-space: nowrap;
}
</style>
