<template>
  <div class="container">
    <ModalHeader title="어울리는 키워드를 선택하세요" />

    <div class="keyword">
      <div
        class="item body2-regular"
        v-for="item in keywords"
        :key="item"
        @click="toggleKeyword(item)"
        :class="{ selected: selectedKeywords.includes(item) }"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useCreateCourseStore } from '@/stores/recommendedCourse/createCourse';
import { ModalHeader } from './index';

const createCourseStore = useCreateCourseStore();

const keywords = [
  '맛집탐방',
  '감성카페',
  '자연힐링',
  '데이트',
  '역시탐방',
  '가족여행',
  '예술과 문화',
  '빵지순례',
  '액티비티',
];

const selectedKeywords = computed(() => createCourseStore.keyword);

const toggleKeyword = (keyword: string) => {
  if (selectedKeywords.value.includes(keyword)) {
    createCourseStore.removeKeyword(keyword);
  } else {
    createCourseStore.addKeyword(keyword);
  }
};
</script>

<style scoped lang="scss">
.container {
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: var(--margin-m);
}

.keyword {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  overflow-y: auto;
  scrollbar-width: none;
}

.item {
  height: 36px;
  padding: var(--padding-m);
  border-radius: var(--radius-s);
  border: 1px solid var(--Neutral-700, #555555);
  color: var(--color-button-on-secondary);
  display: flex;
  align-items: center;
  width: fit-content;

  &.selected {
    border-color: var(--color-primary-500);
    color: var(--color-text-primary);
  }
}
</style>
