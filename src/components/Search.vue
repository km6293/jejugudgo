<template>
  <div class="info-search">
    <input
      class="search-text body2-medium"
      placeholder="내 주변 코스 찾기"
      v-model="searchText"
      @keypress.enter="handleSearch"
    />
    <div
      class="serach-icon"
      @click="handleSearch"
    >
      <BigSearchIcon />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import { BigSearchIcon } from '@/components';

const emit = defineEmits(['search']);
const searchText = ref('');

const handleSearch = () => {
  emit('search', searchText.value);
};
</script>

<style scoped>
.info-search {
  width: 100%;
  display: flex;
  align-items: center;
  padding: var(--margin-xs) var(--margin-s) var(--margin-xs) var(--margin-s);
  gap: var(--margin-s);
  justify-content: space-between;
  background-color: var(--color-greyscale-800);
  height: 52px;
  border-radius: var(--radius-s);
  box-sizing: border-box;
}

.search-text {
  flex: 1;
  padding: 0px var(--margin-m) 0px var(--margin-m);
  min-width: 0;
  background-color: transparent;
  outline: none;
  border: none;
  color: var(--color-neutral-100);
}

.search-text::placeholder {
  color: var(--color-text-muted);
}
</style>
