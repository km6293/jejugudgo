<template>
  <div class="input-container">
    <input
      class="content-input body2-medium"
      v-model="inputValue"
      @keydown.enter="updateInput"
    />
    <SearchIcon @click="updateInput" />
  </div>
</template>

<script setup lang="ts">
import { SearchIcon } from '@/components';
import { useCreateCourseStore } from '@/stores/recommendedCourse/createCourse';
import { ref, defineProps, watch } from 'vue';
import { ISpotType } from '@/stores/recommendedCourse/type';

const createCourseStore = useCreateCourseStore();

const props = defineProps<{
  point: ISpotType;
}>();
const inputValue = ref(props.point.name);

const updateInput = () => {
  if (inputValue.value !== '') {
    createCourseStore.updateData('input', inputValue.value);
    createCourseStore.updateData('showSearch', true);
  }
};

watch(
  () => props.point.name,
  (newName) => {
    inputValue.value = newName;
  }
);
</script>

<style scoped>
.input-container {
  padding: 20px;
  width: 100%;
  height: 52px;
  gap: var(--margin-s);
  display: flex;
  align-items: center;
  border-radius: var(--radius-s);
  background-color: var(--color-neutral-700);
}

.content-input {
  width: 100%;
  height: 52px;
  border: none;
  background-color: var(--color-neutral-700);
  outline: none;
  border-radius: var(--radius-s);
  color: var(--color-text-active);
}
</style>
