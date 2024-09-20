<template>
  <div class="container">
    <div class="search-map">
      <div id="map_div"></div>

      <BackButton
        v-if="showNowMap && !showSearch"
        @click="handleBack"
      />
      <MapSearchButton
        @click="handleMapSearch"
        v-if="!showSearch"
      />
      <SearchButton />

      <TargetButton
        v-if="!showNowMap"
        @click="handleMoveNowLocation"
      />
      <AllCourseButton
        v-if="!showNowMap"
        @click="handleSearchRoutes"
      />
      <CreateCourseButton
        v-if="!showNowMap"
        @click="createCourse"
      />

      <SwipeModal v-if="showNowMap">
        <div class="result-content">
          <NowMapResult v-if="!selectCourse" />
          <SelectCourse v-else />
        </div>
      </SwipeModal>
    </div>
  </div>
  <AllResult v-if="showAllCourse" />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useMap } from '@/hooks';
import router from '@/router';
import {
  BackButton,
  SearchButton,
  MapSearchButton,
  TargetButton,
  AllCourseButton,
  CreateCourseButton,
  ResultTags,
  AllResult,
  NowMapResult,
  SelectCourse,
} from './components';
import { CourseCard } from '../home/components';
import { SwipeModal } from '@/components';
import { useSearchCourseStore } from '@/stores/recommendedCourse/searchCourse';
import { storeToRefs } from 'pinia';
import { searchCourse } from '@/apis/courseFeature';

const searchCourseStore = useSearchCourseStore();
const { showSearch, showNowMap, showAllCourse, selectCourse } =
  storeToRefs(searchCourseStore);

const map = ref<any>(null);

const { initTmap, moveNowLocation, searchRoutesTest } = useMap(map);

onMounted(async () => {
  await initTmap(map);
  await moveNowLocation();
});

const handleMoveNowLocation = () => {
  moveNowLocation();
};

const handleSearchRoutes = async () => {
  // const data = await searchCourse();
  // console.log(data);
  searchCourseStore.updateData('showAllCourse', true);
};

const handleBack = () => {
  if (selectCourse.value) {
    searchCourseStore.updateData('selectCourse', false);
  } else {
    searchCourseStore.updateData('showNowMap', false);
  }
};

const handleMapSearch = () => {
  searchCourseStore.updateData('showNowMap', true);
};
const createCourse = () => {
  router.push({ name: 'create-course' });
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.search-map {
  flex-grow: 1;
  height: calc(100% - 200px);
  position: relative;
  transition: height 0.3s ease;
}

.result-content {
  height: 100%;
  width: 100%;
  padding: 16px 20px 0px 20px;
  display: flex;
  flex-direction: column;
}

.result-cards {
  flex-grow: 1;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
