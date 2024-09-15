<template>
  <div class="container">
    <div class="slider">
      <div
        v-for="item of 10"
        :key="item"
        class="item"
        @click="onResultClick"
      >
        <CardImage :test="'104x104'" />
        <CardContent
          :star="true"
          :time="true"
          :distance="true"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CardContent, CardImage } from '@/components';
import { storeToRefs } from 'pinia';
import { useCreateCourseStore } from '@/stores/recommendedCourse/createCourse';
const createCourseStore = useCreateCourseStore();
const { selectedObject } = storeToRefs(createCourseStore);

const start = {
  name: 'start',
  longitude: 126.43602130714433,
  latitude: 33.433944015499456,
};

const end = {
  name: 'end',
  longitude: 126.48765563964844,
  latitude: 33.45120886113757,
};

const way = [
  {
    name: 'way1',
    longitude: 126.39573248492509,
    latitude: 33.47190207955216,
  },
  {
    name: 'way2',
    longitude: 126.44226001173622,
    latitude: 33.47486469122896,
  },
  {
    name: 'way3',
    longitude: 126.42766879469521,
    latitude: 33.48001928930712,
  },
];

const onResultClick = () => {
  const { type, index } = selectedObject.value;

  if (type === 'wayPoint' && index !== undefined) {
    createCourseStore.updateData(type, way[index], index);
  } else if (type === 'startPoint') {
    createCourseStore.updateData(type, start);
  } else if (type === 'endPoint') {
    createCourseStore.updateData(type, end);
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
</style>
