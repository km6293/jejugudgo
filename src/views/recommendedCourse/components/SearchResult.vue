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
  longitude: '33.433944015499456',
  latitude: '126.43602130714433',
};

const end = {
  name: 'end',
  longitude: '33.45120886113757',
  latitude: '126.48765563964844',
};

const way = [
  {
    name: 'way1',
    longitude: '33.47190207955216',
    latitude: '126.39573248492509',
  },
  {
    name: 'way2',
    longitude: '33.47486469122896',
    latitude: '126.44226001173622',
  },
  {
    name: 'way3',
    longitude: '33.48001928930712',
    latitude: '126.42766879469521',
  },
];

const onResultClick = () => {
  if (
    selectedObject.value.type === 'wayPoint' &&
    selectedObject.value.index !== undefined
  ) {
    createCourseStore.updateData(
      'wayPoint',
      way[selectedObject.value.index],
      selectedObject.value.index
    );
  } else if (selectedObject.value.type === 'startPoint') {
    createCourseStore.updateData('startPoint', start);
  } else if (selectedObject.value.type === 'endPoint') {
    createCourseStore.updateData('endPoint', end);
  }

  createCourseStore.updateData('ShowSearch', false);
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
