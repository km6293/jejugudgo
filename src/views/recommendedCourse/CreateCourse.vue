<template>
  <div class="container">
    <div id="map_div"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useMap, useLocation } from '@/hooks';

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
