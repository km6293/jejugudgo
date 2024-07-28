<template>
  <div class="carousel-indicators">
    <span
      v-for="(step, index) in totalSteps"
      :key="index"
      :class="{ active: index === currentStep }"
    ></span>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';

const props = defineProps<{
  currentStep: number;
}>();

const totalSteps = computed(() => 4);
</script>

<style scoped>
.carousel-indicators {
  display: flex;
  justify-content: center;
}
.carousel-indicators span {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--color-greyscale-300);
  margin: 0 5px;
}
.carousel-indicators span.active {
  background-color: var(--color-primary-500);
}
</style>
