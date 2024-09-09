<template>
  <div class="container">
    <header>
      <div class="search-container">
        <Search @search="handleSearchEvent" />
      </div>
      <div class="tags-container">
        <Tags />
      </div>
    </header>

    <div class="search-map">
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
import { ref, onMounted } from 'vue';
import { useMap, useLocation } from '@/hooks';
import router from '@/router';

const map = ref<any>(null);

const { initTmap, searchRoutes } = useMap(map);
const { moveNowLocation } = useLocation(map);

onMounted(async () => {
  await initTmap(map);
  await moveNowLocation(map);
});

const handleSearchEvent = (searchText: string) => {
  console.log('Search bar enter key pressed or icon clicked', searchText);
};

const handleMoveNowLocation = () => {
  moveNowLocation(map);
};

const handleSearchRoutes = () => {
  searchRoutes(map);
};

const createCourse = () => {
  router.push({ name: 'create-course' });
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
  height: 100%;
  position: relative;
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

.current-location {
  width: 48px;
  height: 48px;
  padding: var(--padding-m);
  gap: var(--spacing-1);
  border-radius: var(--padding-s);
  background-color: var(--color-button-secondary);
}

.course-button {
  gap: var(--margin-s);
  display: flex;
}

/* .search-course {
  width: 156px;
  height: 48px;
  padding: var(--padding-m);
  gap: var(--spacing-1);
  border-radius: var(--padding-s);
  background-color: var(--color-button-secondary);
}

.create-course {
  width: Fill (156px)px;
  height: Fixed (48px)px;
  padding: var(--SpacingSizingPaddingpadding-m);
  gap: var(--SpacingSizingSpacingspacing-1);
  border-radius: var(--SpacingSizingPaddingpadding-s);
  opacity: 0px;
} */
</style>
