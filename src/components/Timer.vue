<template>
  <div class="timer">
    <TimeIcon />
    <div class="caption-regular">
      {{ formattedTime }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, defineProps, watch } from 'vue';
import { TimeIcon } from '@/components';

const props = defineProps<{
  startTime: number;
  onTimeout: () => void;
}>();

const timeLeft = ref(props.startTime);
let timer: ReturnType<typeof setInterval>;

const startTimer = () => {
  timer = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--;
    } else {
      clearInterval(timer);
      props.onTimeout();
    }
  }, 1000);
};

const resetTimer = () => {
  clearInterval(timer);
  timeLeft.value = props.startTime;
  startTimer();
};

onMounted(() => startTimer());
onUnmounted(() => clearInterval(timer));

watch(() => props.startTime, resetTimer);

const formattedTime = computed(() => {
  const minutes = Math.floor(timeLeft.value / 60);
  const seconds = timeLeft.value % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
    2,
    '0'
  )}`;
});
</script>

<style scoped>
.timer {
  display: flex;
  align-items: center;
  gap: 4px;

  .caption-regular {
    width: 3.2rem;
  }
}
</style>
