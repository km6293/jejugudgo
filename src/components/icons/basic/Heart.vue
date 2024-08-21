<template>
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.3302 25.0633L23.2792 31.2503C23.6726 31.6595 24.3274 31.6595 24.7208 31.2503L30.6698 25.0633C32.4434 23.2187 32.4434 20.228 30.6698 18.3834C28.8962 16.5389 26.0206 16.5389 24.247 18.3834C24.1122 18.5237 23.8878 18.5237 23.753 18.3834C21.9794 16.5389 19.1038 16.5389 17.3302 18.3834C15.5566 20.228 15.5566 23.2187 17.3302 25.0633Z"
      :fill="fillColor"
      :fill-opacity="fillOpacity"
      stroke="white"
    />
  </svg>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';
const props = defineProps<{
  type: boolean;
}>();

const fillColor = computed(() => (props.type ? 'white' : 'black'));
const fillOpacity = computed(() => (props.type ? '1' : '0.5'));
</script>

<style scoped></style>
