<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.4273 7.92948C16.5242 7.83253 16.5242 7.67533 16.4273 7.57838L14.9217 6.07272C14.8247 5.97576 14.6675 5.97576 14.5705 6.07272L7.13366 13.5096C7.10303 13.5402 7.08095 13.5783 7.0696 13.6201L6.50893 15.6864C6.4587 15.8716 6.62843 16.0413 6.81355 15.9911L8.87989 15.4304C8.92169 15.419 8.9598 15.397 8.99043 15.3664L16.4273 7.92948Z"
      :fill="fillColor"
    />
    <rect
      x="6"
      y="17.5"
      width="12"
      height="1"
      rx="0.5"
      :fill="fillColor"
    />
  </svg>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';
const props = defineProps<{
  color?: string;
}>();

const fillColor = computed(() => (props.color ? props.color : '#22F779'));
</script>

<style scoped></style>
