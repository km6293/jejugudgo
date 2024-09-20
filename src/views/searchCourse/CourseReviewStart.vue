<template>
  <div class="container">
    <TopBar>
      <template #center>코스명</template>
      <template #right></template>
    </TopBar>
  </div>
  <div class="contents">
    <div class="start-content">
      <div class="body1-medium content-text">별점을 선택해주세요</div>

      <div class="stars">
        <BigStarIcon
          v-for="star in 5"
          :key="star"
          :color="star <= rating ? '#22F779' : '#959595'"
          @click="setRating(star)"
        />
      </div>
      <div class="rating-text">{{ rating }} / 5</div>
    </div>

    <Button
      text="다음"
      @click="nextButton"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BigStarIcon, Button } from '@/components';
import { TopBar } from '../myWalk/components';
import { useRouter } from 'vue-router';

const rating = ref(0);
const router = useRouter();

const setRating = (star: number) => {
  rating.value = star;
};

const nextButton = () => {
  router.push({ path: '/course-review-detail' });
};
</script>

<style scoped>
.container {
  position: relative;
}

.contents {
  padding: 68px 20px 40px;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 40px;
  justify-content: space-between;
}

.start-content {
  padding: 0px var(--margin-m2) 0px var(--margin-m2);
  gap: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content-text {
  color: var(--color-text-muted);
}

.stars {
  display: flex;
  align-items: center;
  gap: 20px;
}

.rating-text {
  font-size: 16px;
  color: var(--color-text-muted);
}
</style>
