<template>
  <div class="container">
    <header>
      <div class="search-container">
        <Search @search="handleSearchEvent" />
      </div>
      <!-- Toggle visibility for the Tags component -->
      <div
        class="tags-container"
        v-if="showTags"
      >
        <Tags />
      </div>
    </header>

    <div
      class="search-map"
      :class="{ 'expanded-map': !showTags }"
    >
      <div id="map_div"></div>

      <div class="map-button">
        <Button
          :icon="TargetIcon"
          :style="buttonStyle"
          @click="handleMoveNowLocation"
        />
        <div class="course-button">
          <Button
            text="주변코스 검색"
            :icon="SearchIcon"
            :style="searchButtonStyle"
            @click="handleSearchRoutes"
          />
          <Button
            text="코스 생성하기"
            :icon="SparkleIcon"
            :style="smallButtonStyle"
            @click="createCourse"
          />
        </div>
        <!-- Toggle button to hide/show the Tags component -->
        <Button
          text="토글 태그"
          :style="smallButtonStyle"
          @click="toggleTags"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Tags,
  Search,
  Button,
  SearchIcon,
  TargetIcon,
  SparkleIcon,
} from '@/components';
import { ref, onMounted, nextTick } from 'vue';
import { useMap } from '@/hooks';
import router from '@/router';

const map = ref<any>(null);
const showTags = ref(true);

const { initTmap, searchRoutesTest, moveNowLocation } = useMap(map);

onMounted(async () => {
  await initTmap(map);
  await moveNowLocation();
});

const handleSearchEvent = (searchText: string) => {
  console.log(searchText);
};

const handleMoveNowLocation = () => {
  moveNowLocation();
};

const handleSearchRoutes = () => {
  searchRoutesTest(map);
};
const createCourse = () => {
  router.push({ name: 'create-course' });
};

const toggleTags = async () => {
  showTags.value = !showTags.value;

  await nextTick();

  if (map.value) {
    map.value.resize(); // Tmap의 크기 조정
  }
};

const buttonStyle = {
  backgroundColor: 'var(--color-button-secondary)',
  color: 'var(--color-button-on-secondary)',
  width: '48px',
  height: '48px',
  fontSize: '1.4rem',
};

const searchButtonStyle = {
  backgroundColor: 'var(--color-button-secondary)',
  color: 'var(--color-button-on-secondary)',
  height: '48px',
  width: '156px',
  fontSize: '1.4rem',
};

const smallButtonStyle = {
  width: '158px',
  height: '44px',
  fontSize: '1.4rem',
};
</script>

<style scoped>
.container {
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.search-container {
  padding: 0 20px;
  display: flex;
}

.tags-container {
  padding: 20px 20px;
  display: flex;
}

.search-map {
  flex-grow: 1;
  height: calc(100% - 200px);
  position: relative;
  transition: height 0.3s ease;
}

.expanded-map {
  height: 100%;
}

.map-button {
  position: relative;
  bottom: 0px;
  padding: var(--margin-m2);
  gap: 10px;
  display: flex;
  flex-direction: column;
  position: absolute;
}

.course-button {
  gap: var(--margin-s);
  display: flex;
}
</style>
