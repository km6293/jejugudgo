<template>
  <div
    ref="mapContainer"
    class="map-container"
  ></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
const VITE_APP_KAKAO_MAP_API_KEY = '15f8370c0086fb9f03661645a89f9ae0'; //추후 env에 넣어야됨. 현재 임시 API KEY

const mapContainer = ref<HTMLDivElement | null>(null);

onMounted(() => {
  loadKakaoMap(mapContainer.value);
});

const loadKakaoMap = (container: HTMLDivElement | null) => {
  if (!container) return;

  console.log(VITE_APP_KAKAO_MAP_API_KEY);

  const script = document.createElement('script');
  script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${VITE_APP_KAKAO_MAP_API_KEY}&autoload=false`;
  document.head.appendChild(script);

  script.onload = () => {
    (window as any).kakao.maps.load(() => {
      const options = {
        center: new (window as any).kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
        maxLevel: 5,
      };

      new (window as any).kakao.maps.Map(container, options);
    });
  };
};
</script>

<style scoped>
.map-container {
  width: 100%;
  height: 100%;
}
</style>
