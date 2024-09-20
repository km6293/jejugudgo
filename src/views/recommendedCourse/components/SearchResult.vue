<template>
  <div class="container">
    <div class="slider">
      <div
        v-for="(place, index) in places"
        :key="index"
        class="item"
        @click="onResultClick(place)"
      >
        <CardImage
          :test="'104x104'"
          :icon="false"
        />
        <div class="content-title body1-medium">
          {{ place.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CardImage } from '@/components';
import { storeToRefs } from 'pinia';
import { useCreateCourseStore } from '@/stores/recommendedCourse/createCourse';
import { searchPlaces } from '@/apis/courseFeature/tmap';
import { onMounted, ref } from 'vue';
import { ISpotType } from '@/stores/recommendedCourse/type';

const createCourseStore = useCreateCourseStore();
const { selectedObject, input } = storeToRefs(createCourseStore);

const places = ref<
  Array<{ name: string; latitude: number; longitude: number; address: string }>
>([]);

onMounted(async () => {
  try {
    if (input.value !== '') {
      const result = await searchPlaces(input.value);
      places.value = result;
    }
  } catch (error) {
    console.error('장소를 가져오는 중 오류 발생:', error);
  }
});

const onResultClick = (place: {
  name: string;
  latitude: number;
  longitude: number;
  address: string;
}) => {
  const { type, index } = selectedObject.value;
  const { name, latitude, longitude, address } = place;
  const data: ISpotType = {
    name,
    longitude,
    latitude,
    type: 'USER',
    category: 'USER',
    address: address,
  };

  if (type === 'wayPoint' && index !== undefined) {
    createCourseStore.updateData(type, data, index);
  } else if (type === 'startPoint') {
    createCourseStore.updateData(type, data);
  } else if (type === 'endPoint') {
    createCourseStore.updateData(type, data);
  }

  createCourseStore.updateData('showSearch', false);
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
  gap: var(--margin-m);
  display: grid;
}

.item {
  height: 104px;
  gap: 16px;
  display: flex;
}

.content-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--color-text-secondary);
}
</style>
