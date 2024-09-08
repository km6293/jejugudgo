<template>
  <div class="container">
    <div id="map_div"></div>
    <SwipeModal>
      <p>Here is some content in the bottom sheet.</p>
    </SwipeModal>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useMap, useLocation } from '@/hooks';
import { SwipeModal } from '@/components';

const map = ref<any>(null);
const { initTmap } = useMap(map);
const { moveNowLocation } = useLocation(map);

onMounted(async () => {
  await initTmap(map);
  await moveNowLocation(map);
});
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
