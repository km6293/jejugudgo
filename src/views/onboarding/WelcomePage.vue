<template>
  <div class="welcome-container">
    <div class="welcome-detail">
      <div class="welcome-explanation">
        <p class="welcome-description caption-regular">
          {{ steps[currentStep].description[0] }}
        </p>
        <h2 class="welcome-title heading2-bold">
          {{ steps[currentStep].title }}
        </h2>
        <p class="welcome-description caption-regular">
          {{ steps[currentStep].description[1] }}
        </p>
        <p class="welcome-description caption-regular">
          {{ steps[currentStep].description[2] }}
        </p>
      </div>
      <Carousel :currentStep="currentStep" />
      <div class="welcome-image">
        <!-- <img :src="steps[currentStep].image" alt="Step image" class="step-image" /> -->
      </div>
    </div>

    <div class="next-button">
      <Button
        @click="nextStep"
        :text="buttonText"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { Carousel, Button } from '@/components';
import { useRootStore } from '@/stores/rootStore';
import { storeToRefs } from 'pinia';
import { saveToLocalStorage } from '@/utils';

const router = useRouter();
const rootStore = useRootStore();
const { showUserGuide } = storeToRefs(rootStore);

const steps = [
  {
    title: '주변 코스 검색',
    description: [
      '제주도에 있는 모든',
      '가장 가까운 코스를',
      '현재 위치에서  발견하세요',
    ],
    image: '',
  },
  {
    title: '걷기 코스 만들기',
    description: [
      '모두가 즐길수 있는',
      '시작점부터 종점까지',
      '취향저격 코스를 만드세요',
    ],
    image: '',
  },
  {
    title: '동행과 같이 걷기',
    description: [
      '함께 걸으며 좋은 경험을 만드는',
      '가장 가까운 코스를',
      '현재 위치에서  발견하세요',
    ],
    image: '',
  },
  {
    title: '나만의 걷기 기록 만들기',
    description: [
      '소중한 추억으로 간직할 수 있는',
      '사진과 글로 나만의',
      '특별한 코스를 만들어요',
    ],
    image: '',
  },
];

const currentStep = ref(0);

const nextStep = () => {
  if (currentStep.value < steps.length - 1) {
    currentStep.value++;
  } else {
    showUserGuide.value = true;
    saveToLocalStorage('showUserGuide', 'true');
    router.push({ path: '/home' }); // Home 페이지 경로로 변경
  }
};

const buttonText = computed(() =>
  currentStep.value < steps.length - 1 ? '다음' : '이동'
);
</script>

<style scoped>
.welcome-container {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: var(--color-background);
  max-width: 47.2rem;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}

.welcome-detail {
  width: 100%;
  text-align: center;
  flex-direction: column;
  display: flex;
  align-items: center;
  gap: var(--spacing-8);
  padding: 20px;
  flex: 1;
  justify-content: center;
}

.welcome-explanation {
  flex-direction: column;
  display: flex;
}

.welcome-description {
  color: var(--color-neutral-500);
}

.welcome-title {
  color: var(--color-neutral-100);
}

.welcome-image {
  width: 164px;
  height: 328px;
  background-color: #fff;
  border-radius: 20px;
}

.next-button {
  align-self: center;
  padding: 20px;
  width: 100%;
}
</style>
