<template>
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24 33.4492L30.7898 37.7461C32.0332 38.5336 33.5548 37.3695 33.2276 35.8972L31.4279 27.8169L37.4323 22.373C38.5285 21.3801 37.9395 19.4969 36.4998 19.3771L28.5974 18.6752L25.5052 11.04C24.9489 9.65333 23.0511 9.65333 22.4948 11.04L19.4026 18.6581L11.5002 19.36C10.0605 19.4798 9.47147 21.3629 10.5677 22.3559L16.5721 27.7998L14.7724 35.8801C14.4452 37.3524 15.9668 38.5165 17.2102 37.729L24 33.4492Z"
      :fill="color"
    />
  </svg>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  color: string;
}>();
</script>

<style scoped></style>

<style scoped></style>
