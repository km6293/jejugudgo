<template>
  <div class="image-wrapper">
    <img
      :src="src"
      :alt="alt"
      :style="imageStyle"
      class="image"
    />
    <HeartIcon
      class="icon"
      :type="false"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, CSSProperties } from 'vue';
import { HeartIcon } from '@/components';

const props = defineProps<{
  test: string;
  alt?: string;
  imageStyle?: CSSProperties;
}>();

const src = computed(() => {
  return `https://via.placeholder.com/${props.test}`;
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

.image {
  border-radius: 12px;
}
</style>
