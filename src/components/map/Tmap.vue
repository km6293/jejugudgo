<template>
  <div
    class="map_div"
    id="map_div"
  ></div>
</template>

<script setup lang="ts">
import { onMounted, ref, defineProps } from 'vue';
// import { course, end, location, now, start } from '@/assets/icon';

import course from '@/assets/icon/course.svg';
import end from '@/assets/icon/end.svg';
import location from '@/assets/icon/location.svg';
import now from '@/assets/icon/now.svg';
import start from '@/assets/icon/start.svg';

const props = defineProps<{
  lat: number;
  lng: number;
  icon: 'course' | 'end' | 'location' | 'now' | 'start';
}>();

let map: any;
let marker: any;

const initializeMap = () => {
  // 지도를 초기화
  map = new window.Tmapv2.Map('map_div', {
    center: new window.Tmapv2.LatLng(props.lat, props.lng),
    width: '100%',
    height: '100%',
    httpsMode: true,
    zoom: 15,
  });

  // 마커를 추가
  addMarker(props.lat, props.lng, props.icon);
};

const addMarker = (lat: number, lng: number, icon: string) => {
  const position = new window.Tmapv2.LatLng(lat, lng);

  const iconMap: Record<string, string> = {
    course,
    end,
    location,
    now,
    start,
  };

  marker = new window.Tmapv2.Marker({
    position: position,
    map: map,
    icon: iconMap[icon],
    // iconSize: new window.Tmapv2.Size(32, 32), // 아이콘 크기 설정
  });

  map.setCenter(position);
};

onMounted(initializeMap);
</script>

<style scoped>
.map_div {
  width: 100%;
  height: 100%;
}
</style>
