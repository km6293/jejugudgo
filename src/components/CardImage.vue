<template>
  <div class="image-wrapper">
    <img
      :src="src"
      :alt="alt"
      :style="imageStyle"
      class="image"
    />
    <HeartIcon
      v-if="props.icon"
      class="icon"
      :type="false"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, CSSProperties, withDefaults } from 'vue';
import { HeartIcon } from '@/components';

interface Props {
  test: string;
  alt?: string;
  icon?: boolean;
  imageStyle?: CSSProperties;
}

const props = withDefaults(defineProps<Props>(), {
  icon: true,
});

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
