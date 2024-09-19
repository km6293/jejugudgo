<template>
  <div class="container">
    <TopBar>
      <template #center> 나의 걷기 기록 </template>
      <template #right></template>
    </TopBar>
    <div id="map_div"></div>
  </div>
</template>

<script setup lang="ts">
import { TopBar } from './components';
import { onMounted, ref } from 'vue';
import { useMap } from '@/hooks';

const map = ref<any>(null);
const { initTmap, addMarker, moveNowLocation } = useMap(map);

onMounted(async () => {
  await initTmap(map);
  await moveNowLocation();
});
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
