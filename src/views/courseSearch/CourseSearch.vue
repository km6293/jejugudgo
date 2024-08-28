<template>
  <div class="container">
    <div class="search-container">
      <Search />
    </div>
    <div class="tags-container">
      <Tags />
    </div>
    <div class="search-map">
      <Tmap
        :lat="37.566481622437934"
        :lng="126.98502302169841"
        icon="location"
      />
      <div class="map-button">
        <Button
          :icon="TargetIcon"
          :style="{
            backgroundColor: 'var(--color-button-secondary)',
            color: 'var(--color-button-on-secondary)',
            width: '48px',
            height: '48px',
            fontSize: '1.4rem',
          }"
        />
        <div class="course-button">
          <Button
            text="주변코스 검색"
            :icon="SearchIcon"
            :style="{
              backgroundColor: 'var(--color-button-secondary)',
              color: 'var(--color-button-on-secondary)',
              height: '48px',
              width: '156px',
              fontSize: '1.4rem',
            }"
          />
          <Button
            text="코스 검색하기"
            :icon="SparkleIcon"
            :style="{
              width: '158px',
              height: '44px',
              fontSize: '1.4rem',
            }"
          />

          <!-- <div class="search-course"></div>
          <div class="create-course"></div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Tags,
  Search,
  Tmap,
  Button,
  SearchIcon,
  TargetIcon,
  SparkleIcon,
} from '@/components';
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
