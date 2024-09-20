<template>
  <div class="container">
    <MapSearch v-if="showSearch" />
    <div id="map_div"></div>
    <SwipeModal>
      <SearchResult v-if="showSearch" />
      <component
        v-else-if="componentMap[page]"
        :is="componentMap[page]"
      />
    </SwipeModal>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineComponent, watch } from 'vue';
import { useMap } from '@/hooks';
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
  InputTitle,
} from './components';

import { storeToRefs } from 'pinia';
import { useCreateCourseStore } from '@/stores/recommendedCourse/createCourse';
import { ISpotType } from '@/stores/recommendedCourse/type';

const createCourseStore = useCreateCourseStore();
const {
  page,
  showSearch,
  startPointValid,
  endPointValid,
  wayPointsValid,
  wayPoint,
  endPoint,
  startPoint,
} = storeToRefs(createCourseStore);

const map = ref<any>(null);
const {
  initTmap,
  addMarker,
  searchRoutes,
  removeMarker,
  checkDuplMarker,
  moveNowLocation,
} = useMap(map);

const componentMap: { [key: number]: ReturnType<typeof defineComponent> } = {
  1: WayPoint,
  2: InputTitle,
  3: SelectKeyword,
  4: CheckPublic,
  5: CompleteCourse,
  11: SuggestionHelper,
  12: ResultHelper,
};

onMounted(async () => {
  await initTmap(map);
  await moveNowLocation();
});

const handleMarkerChange = (
  newPoint: ISpotType,
  oldPoint: ISpotType | undefined,
  markerType: 'start' | 'end' | 'location'
) => {
  if (newPoint && startPointValid.value) {
    const isDuplicate = checkDuplMarker(newPoint);

    if (!isDuplicate) {
      addMarker(newPoint, markerType);
    }
  }

  if (
    oldPoint &&
    (newPoint.name !== oldPoint.name ||
      newPoint.longitude !== oldPoint.longitude ||
      newPoint.latitude !== oldPoint.latitude)
  ) {
    removeMarker(oldPoint);
  }
};

const handleSearchRoutes = () => {
  if (startPointValid.value && endPointValid.value && wayPointsValid.value) {
    searchRoutes(startPoint.value, endPoint.value, wayPoint.value);
  }
};

watch(
  () => startPoint.value,
  (newStartPoint, oldStartPoint) => {
    handleMarkerChange(newStartPoint, oldStartPoint, 'start');
  },
  { deep: true }
);

watch(
  () => endPoint.value,
  (newEndPoint, oldEndPoint) => {
    handleMarkerChange(newEndPoint, oldEndPoint, 'end');
  },
  { deep: true }
);

watch(
  () => [...wayPoint.value],
  (newWayPoints, oldWayPoints) => {
    newWayPoints.forEach((newPoint, index) => {
      const oldPoint = oldWayPoints[index];
      handleMarkerChange(newPoint, oldPoint, 'location');
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
  () => [wayPoint.value, startPoint.value, endPoint.value],
  handleSearchRoutes,
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
