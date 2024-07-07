<template>
  <div
    class="progress-bar"
    :style="{ width: `${progress}%` }"
  ></div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'ProgressBar',
  props: {
    progress: {
      type: Number as PropType<number>,
      required: true,
      validator: (value: number) => value >= 0 && value <= 100,
    },
  },
});
</script>

<style scoped lang="scss">
.progress-bar {
  height: 4px;
  background-color: $color-green-300;
  transition: width 0.3s;
}
</style>
