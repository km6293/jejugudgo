<template>
  <div class="container">
    <ModalHeader
      title="어떤 장르의 코스를 원하세요?"
      :left-step="-10"
    />
    <div class="content">
      <div class="slider">
        <div
          v-for="(item, index) in keywords"
          :key="index"
          class="slider-item"
          @click="onSuggestionClick(item.id)"
          :class="{ selected: suggestionCourse === item.id }"
        >
          <div class="item">
            <CardImage
              :test="'96x96'"
              :icon="false"
              :imageStyle="{
                borderColor: suggestionCourse === item.id ? '#22F779' : '',
                opacity:
                  suggestionCourse === '' || suggestionCourse === item.id
                    ? 1
                    : 0.5,
              }"
            />
            <div
              class="image-text body2-bold"
              :style="{
                color: suggestionCourse === item.id ? '#22F779' : '',
              }"
            >
              {{ item.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CardImage } from '@/components';
import { useCreateCourseStore } from '@/stores/recommendedCourse/createCourse';
import { ModalHeader } from './index';
import { storeToRefs } from 'pinia';

const createCourseStore = useCreateCourseStore();
const { suggestionCourse } = storeToRefs(createCourseStore);

const keywords = [
  { id: '12', title: '관광지' },
  { id: '14', title: '문화시설' },
  { id: '15', title: '축제/공연/행사' },
  { id: '28', title: '레포츠' },
  { id: '38', title: '쇼핑' },
  { id: '39', title: '음식' },
];

const onSuggestionClick = (item: string) => {
  createCourseStore.updateData('suggestionCourse', item);
};
</script>

<style scoped>
.container {
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: var(--margin-m);
}

.slider {
  overflow-x: auto;
  display: inline-flex;
  gap: var(--margin-m);
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.item {
  display: flex;
  flex-direction: column;
  gap: var(--margin-xs);
}

.image-text {
  align-self: center;
  color: var(--color-text-active);
}
</style>
