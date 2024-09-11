<template>
  <div class="container">
    <MapSearch
      v-if="courseData.ShowSearch"
      @arrow-click="() => updateCourseData({ ShowSearch: false })"
      :courseData="courseData"
      :updateCourseData="updateCourseData"
    />
    <div id="map_div"></div>
    <SwipeModal>
      <component
        v-if="componentMap[courseData.page]"
        :is="componentMap[courseData.page]"
        :courseData="courseData"
        :updateCourseData="updateCourseData"
      />
    </SwipeModal>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, defineComponent } from 'vue';
import { useMap, useLocation } from '@/hooks';
import { SwipeModal } from '@/components';
import {
  StartPoint,
  SuggestionHelper,
  ResultHelper,
  WayPoint,
  SelectKeyword,
  CheckPublic,
  CompleteCourse,
  MapSearch,
} from './components';
import { ICourseDataType } from './type';

const map = ref<any>(null);

const { initTmap } = useMap(map);
const { moveNowLocation } = useLocation(map);

const courseData = reactive<ICourseDataType>({
  input: '',
  page: 1,
  ShowSearch: false,
  spot: [],
  visibilityStatus: true,
  courseName: '',
  keyword: [],
});

const componentMap: { [key: number]: ReturnType<typeof defineComponent> } = {
  1: StartPoint,
  2: WayPoint,
  3: SelectKeyword,
  4: CheckPublic,
  5: CompleteCourse,
  11: SuggestionHelper,
  12: ResultHelper,
};

const updateCourseData = (newData: Partial<ICourseDataType>) => {
  Object.assign(courseData, newData);
  console.log(courseData);
};

onMounted(async () => {
  await initTmap(map);
  await moveNowLocation(map);
});
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
