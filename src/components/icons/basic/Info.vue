<template>
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9 15C12.3137 15 15 12.3137 15 9C15 5.68629 12.3137 3 9 3C5.68629 3 3 5.68629 3 9C3 12.3137 5.68629 15 9 15ZM8.25 10.0902V5.72656H9.75V10.0902H8.25ZM8.25 12.7995V11.2995H9.75V12.7995H8.25Z"
      :fill="props.color"
    />
  </svg>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';

interface Props {
  color?: string;
}

const props = withDefaults(defineProps<Props>(), {
  color: 'white',
});
</script>

<style scoped></style>
