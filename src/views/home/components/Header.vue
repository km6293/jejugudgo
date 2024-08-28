<template>
  <header class="header-content">
    <div class="header-text heading2-bold">
      제주객님, 혼자옵서예! <br />
      오늘은 어디를 걸을까요?
    </div>
    <div class="header-info">
      <Search />
      <div class="info-rows">
        <div class="rows-item">
          <div class="item-text">
            <div class="item-sub-text caption-medium">지금 서귀포시는</div>
            <div class="item-main-text subheading-bold">24.0˚</div>
          </div>
          <WeatherIcon class="rows-item-icon" />
        </div>
        <div
          class="rows-item"
          @click="goToCheckList"
        >
          <div class="item-text">
            <div class="item-sub-text caption-medium">필요한 것들</div>
            <div class="item-main-text subheading-bold">체크하기</div>
          </div>
          <NoteIcon class="rows-item-icon" />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Search, WeatherIcon, NoteIcon } from '@/components';
import { useRouter } from 'vue-router';

const router = useRouter();
const goToCheckList = () => {
  router.push({ name: 'check-list' });
};
</script>

<style scoped>
.header-content {
  display: grid;
  gap: var(--margin-l);
}

.header-text {
  color: var(--color-neutral-100);
  padding: 0px 20px 0px 20px;
}

.header-info {
  padding: 0px 20px 0px 20px;
  gap: 16px;
  min-width: 240px;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: auto;
}

.info-search {
  width: 100%;
  display: flex;
  align-items: center;
  padding: var(--margin-xs) var(--margin-s) var(--margin-xs) var(--margin-s);
  gap: var(--margin-s);
  justify-content: space-between;
  background-color: var(--color-greyscale-800);
  height: 52px;
  border-radius: var(--radius-s);
  box-sizing: border-box;
}

.info-rows {
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 88px;
  gap: 16px;
}

.rows-item {
  background-color: var(--color-greyscale-800);
  flex: 1;
  border-radius: var(--radius-s);
  gap: 24px;
  padding: var(--margin-m);
  position: relative;
}

.item-text {
  gap: 4px;
  display: flex;
  flex-direction: column;
}

.item-sub-text {
  color: var(--color-text-white-50);
}

.item-main-text {
  color: var(--color-text-white);
}

.rows-item-icon {
  position: absolute;
  bottom: 0px;
  right: 0px;
}

.search-text {
  flex: 1;
  padding: 0px var(--margin-m) 0px var(--margin-m);
  min-width: 0;
  background-color: transparent;
  outline: none;
  border: none;
  color: var(--color-neutral-100);
}

.search-text::placeholder {
  color: var(--color-text-muted);
}
</style>
