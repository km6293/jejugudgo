<template>
  <div class="search-bar">
    <BigArrowIcon @click="createCourseStore.updateData('showSearch', false)" />
    <div class="search-input">
      <input
        class="subheading-bold input-text"
        v-model="inputValue"
      />
      <SearchIcon @click="updateInput" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { BigArrowIcon, SearchIcon } from '@/components';
import { storeToRefs } from 'pinia';
import { useCreateCourseStore } from '@/stores/recommendedCourse/createCourse';
import { ref, watch } from 'vue';

const createCourseStore = useCreateCourseStore();
const { input } = storeToRefs(createCourseStore);

const inputValue = ref(input.value);

watch(
  () => input.value,
  (newValue) => {
    inputValue.value = newValue;
  }
);

const updateInput = () => {
  createCourseStore.updateData('input', inputValue.value);
};
</script>

<style scoped>
.search-bar {
  display: flex;
  position: fixed;
  top: 0;
  z-index: 1001;
  max-width: 768px;
  height: 48px;
  width: 100%;
  background-color: #242424;
}

.search-input {
  display: flex;
  align-items: center;
  padding-right: 20px;
  justify-content: space-between;
  flex: 1;
}

.input-text {
  background-color: #242424;
  color: var(--color-text-active);
  border: none;
  width: 100%;
  outline: none;
}
</style>
