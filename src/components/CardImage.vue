<template>
  <div class="image-wrapper">
    <img
      src="https://via.placeholder.com/150"
      :alt="alt"
      :style="imageStyle"
    />
    <HeartIcon class="icon" />
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { HeartIcon } from '@/components';

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: 'Image',
  },
  imageClass: {
    type: String,
    default: '',
  },
  imageStyle: {
    type: Object,
    default: () => ({}),
  },
  iconStyle: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style scoped>
.image-wrapper {
  position: relative;
  display: inline-block;
}

.icon {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
