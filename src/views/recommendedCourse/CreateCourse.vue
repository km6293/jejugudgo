<template>
  <div class="container">
    <MapSearch v-if="ShowSearch" />
    <div id="map_div"></div>
    <SwipeModal>
      <SearchResult v-if="ShowSearch" />
      <component
        v-else-if="componentMap[page]"
        :is="componentMap[page]"
      />
    </SwipeModal>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineComponent, watch } from 'vue';
import { useMap, useLocation } from '@/hooks';
import { SwipeModal } from '@/components';
import {
  SuggestionHelper,
  ResultHelper,
  WayPoint,
  SelectKeyword,
  CheckPublic,
  CompleteCourse,
  MapSearch,
  SearchResult,
} from './components';

import { storeToRefs } from 'pinia';
import { useCreateCourseStore } from '@/stores/recommendedCourse/createCourse';
import { ISpotType } from '@/stores/recommendedCourse/type';

const createCourseStore = useCreateCourseStore();
const {
  page,
  ShowSearch,
  startPointValid,
  endPointValid,
  wayPointsValid,
  wayPoint,
  endPoint,
  startPoint,
} = storeToRefs(createCourseStore);

const map = ref<any>(null);

const { initTmap, addMarker, searchRoutes, removeMarker } = useMap(map);
const { moveNowLocation, moveLocation } = useLocation(map);

const componentMap: { [key: number]: ReturnType<typeof defineComponent> } = {
  1: WayPoint,
  2: SelectKeyword,
  3: CheckPublic,
  4: CompleteCourse,
  11: SuggestionHelper,
  12: ResultHelper,
};

onMounted(async () => {
  await initTmap(map);
  await moveNowLocation(map);
});

watch(
  () => [wayPoint, startPoint, endPoint],
  () => {
    if (startPointValid.value && endPointValid.value && wayPointsValid.value) {
      searchRoutes(startPoint.value, endPoint.value, wayPoint.value);
    }
  },
  { deep: true }
);

watch(
  () => startPoint,
  () => {
    if (startPointValid.value) {
      addMarker(startPoint.value, 'start');
    }
  },
  { deep: true }
);

watch(
  () => [...wayPoint.value],
  (newWayPoints, oldWayPoints) => {
    newWayPoints.forEach((newPoint, index) => {
      const oldPoint = oldWayPoints[index];

      if (
        !oldPoint ||
        newPoint.name !== oldPoint.name ||
        newPoint.longitude !== oldPoint.longitude ||
        newPoint.latitude !== oldPoint.latitude
      ) {
        addMarker(newPoint, 'location');
      }
    });

    if (newWayPoints.length < oldWayPoints.length) {
      for (let i = newWayPoints.length; i < oldWayPoints.length; i++) {
        removeMarker(oldWayPoints[i]);
      }
    }
  },
  { deep: true }
);

watch(
  () => endPoint,
  () => {
    if (endPointValid.value) {
      addMarker(endPoint.value, 'end');
    }
  },
  { deep: true }
);
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
