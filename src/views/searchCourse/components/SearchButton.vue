<template>
  <div
    class="search-container"
    :class="{ expanded: showSearch }"
    @click="expandInput"
  >
    <SearchIcon />
    <input
      v-if="showSearch"
      ref="searchInput"
      type="text"
      class="search-input body2-medium"
      placeholder="장소 및 코스명을 입력하세요"
      @blur="collapseInput"
      @keyup.enter="onEnter"
    />
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref } from 'vue';
import { SearchIcon } from '@/components';
import { useSearchCourseStore } from '@/stores/recommendedCourse/searchCourse';
import { storeToRefs } from 'pinia';

const searchCourseStore = useSearchCourseStore();
const { showSearch } = storeToRefs(searchCourseStore);

const searchInput = ref<HTMLInputElement | null>(null);

const expandInput = () => {
  searchCourseStore.updateData('showSearch', true);
  nextTick(() => {
    searchInput.value?.focus();
  });
};

const collapseInput = () => {
  searchCourseStore.updateData('showSearch', false);
};

const onEnter = () => {
  searchCourseStore.updateData('showNowMap', true);
};
</script>

<style scoped>
.search-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 22px;
  right: 22px;
  padding: 12px;
  border-radius: 1000px;
  background-color: var(--color-button-secondary);
  transition: width 0.3s ease;
  width: 48px;
}

.search-container.expanded {
  width: calc(100% - 48px);
  padding-left: 16px;
}

.search-input {
  flex-grow: 1;
  border: none;
  background: transparent;
  outline: none;
  padding: 0 8px;
  color: var(--color-text-white);
  width: 100%;
}

.search-input::placeholder {
  color: var(--color-text-muted);
}
</style>
