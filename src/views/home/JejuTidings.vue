<template>
  <div class="jeju-tidings-container">
    <div class="jeju-tidings-content">
      <EventTitle
        :title="'제주도 걷기 대회'"
        :allView="true"
      />
      <div class="contest-slider">
        <ContestCard />
      </div>
    </div>
    <div class="jeju-tidings-content">
      <Title
        :title="'현지인 추천 장소'"
        :allView="true"
      />
      <span
        v-for="item of 5"
        :key="item"
      >
        <RecommendedCard />
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Title, ContestCard, RecommendedCard } from './components';
import EventTitle from './components/EventTitle.vue';
</script>

<style scoped>
.jeju-tidings-container {
  padding: 0px 20px 0px 20px;
  display: flex;
  margin-top: 40px;
  flex-direction: column;
  gap: 40px;
  position: relative;
}

.jeju-tidings-content {
  gap: var(--margin-l);
  display: grid;
}

.contest-slider {
  overflow-x: auto;
  display: inline-flex;
  gap: var(--margin-m);
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
