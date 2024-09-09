<template>
  <div class="map">
    <div class="subheading-bold map-title">코스 지도</div>
    <div class="course-map">
      <div class="course-content">
        <div class="course-point body2-regular">
          <div class="point-icon"><StartMapIcon /></div>
          <div class="point-title">고내포구</div>
          <div class="point-distance">0km</div>
        </div>
        <div class="course-point body2-regular">
          <div class="point-icon"><WaypointMapIcon /></div>
          <div class="point-title">구엄 어촌체험 마을</div>
          <div class="point-distance">4.8km</div>
        </div>
        <div class="course-point body2-regular">
          <div class="point-icon"><WaypointMapIcon /></div>
          <div class="point-title">수산봉 정상</div>
          <div class="point-distance">6.6km</div>
        </div>
        <div class="course-point body2-regular">
          <div class="point-icon"><WaypointMapIcon /></div>
          <div class="point-title">예원동 복지회관</div>
          <div class="point-distance">9.7km</div>
        </div>
        <div class="course-point body2-regular">
          <div class="point-icon"><WaypointMapIcon /></div>
          <div class="point-title">향파두리코스모스 정자</div>
          <div class="point-distance">11.7km</div>
        </div>
        <div class="course-point body2-regular">
          <div class="point-icon"><EndMapIcon /></div>
          <div class="point-title">광령1리 사무소</div>
          <div class="point-distance">15.8km</div>
        </div>
      </div>
      <div class="course-line"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { StartMapIcon, EndMapIcon, WaypointMapIcon } from '@/components';
</script>

<style scoped>
.map {
  display: flex;
  flex-direction: column;
  gap: var(--margin-m);
}

.map-title {
  color: var(--color-neutral-100);
}

.course-map {
  position: relative;
  padding: var(--margin-m);
  border-radius: var(--radius-s);
  background-color: var(--color-card-surface);
}

.course-content {
  gap: var(--margin-m);
  display: flex;
  flex-direction: column;
}

.course-line {
  position: absolute;
  border-left: 2px dotted var(--color-neutral-600);
  top: 20px;
  bottom: 20px;
  left: 25px;
  z-index: 0;
}

.course-point {
  gap: 8px;
  display: flex;
}

.point-icon {
  z-index: 1;
}

.point-title {
  color: var(--color-text-body);
}

.point-distance {
  color: #777777;
}
</style>
