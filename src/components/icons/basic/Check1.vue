<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      :d="pathD"
      :fill="active ? activeColor : defaultColor"
    />
  </svg>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';

const props = defineProps({
  width: {
    type: [String, Number],
    default: 24,
  },
  height: {
    type: [String, Number],
    default: 24,
  },
  active: {
    type: Boolean,
    default: false,
  },
});

const defaultColor = ref('#D9D9D9');
const activeColor = ref('#09DF7A');
const pathD = ref(
  'M18.6371 6.19841C19.0628 6.55023 19.1228 7.18055 18.7709 7.60628L10.7309 17.3355L10.7285 17.3384C10.5456 17.558 10.3161 17.7341 10.0566 17.8538C9.79713 17.9736 9.51423 18.034 9.22848 18.0307C8.93805 18.0271 8.65131 17.9577 8.39152 17.8278C8.1326 17.6984 7.90626 17.5121 7.72937 17.283C7.72877 17.2822 7.72818 17.2815 7.72758 17.2807L5.21069 14.0447C4.87162 13.6088 4.95016 12.9805 5.3861 12.6415C5.82205 12.3024 6.45033 12.3809 6.7894 12.8169L9.25297 15.9843L17.2292 6.33225C17.581 5.90652 18.2114 5.8466 18.6371 6.19841Z'
);
</script>

<style scoped></style>
