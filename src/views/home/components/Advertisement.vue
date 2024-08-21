<template>
  <div class="slider">
    <div
      v-for="item of 5"
      :key="item"
      class="advertisement"
    >
      <div class="content">
        <div class="title body1-bold">제주도에서 만나는 특별함</div>
        <div class="detail caption-regular">네이버 리뷰 1위 맛집</div>
      </div>
      <div class="check-slider">
        <div
          v-for="dot of 5"
          :key="dot"
          :class="['ellipse', { active: item === dot }]"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.slider {
  overflow-x: auto;
  display: inline-flex;
  gap: var(--margin-m);
  -ms-overflow-style: none;
  scrollbar-width: none;
  scroll-snap-type: x mandatory;
}

.advertisement {
  background-color: var(--color-neutral-500);
  height: 120px;
  border-radius: var(--radius-s);
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  flex-basis: 100%;
  scroll-snap-align: start;
}

.content {
  gap: 4px;
  display: flex;
  flex-direction: column;
}

.title {
  color: var(--color-button-on-primary);
}

.detail {
  color: var(--color-text-black-50);
}

.check-slider {
  margin: var(--margin-s);
  display: flex;
  justify-content: end;
  gap: var(--margin-s);
}

.ellipse {
  width: 8px;
  height: 8px;
  background-color: var(--color-neutral-900);
  opacity: 50%;
  border-radius: 50%;
}

.ellipse.active {
  background-color: var(--color-neutral-white);
}
</style>
