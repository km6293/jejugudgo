<template>
  <div class="card-course">
    <div class="content">
      <div class="content-left">
        <DateIcon />
        <span class="body2-regular card-content">일시</span>
      </div>
      <div class="content-right body2-regular">24.05.06(수) 07:00</div>
    </div>
    <div class="content">
      <div class="content-left">
        <CourseIcon />
        <span class="body2-regular card-content">코스</span>
      </div>
      <div class="content-right body2-regular">한라산 초입부터 정상</div>
    </div>
    <div class="content">
      <div class="content-left">
        <DistanceIcon />
        <span class="body2-regular card-content">거리</span>
      </div>
      <div class="content-right body2-regular">10km</div>
    </div>
    <div class="content">
      <div class="content-left">
        <PeopleIcon />
        <span class="body2-regular card-content">모집현황</span>
      </div>
      <div class="content-right body2-regular">10 / 20</div>
    </div>
    <div class="content">
      <div class="content-left">
        <Time1Icon />
        <span class="body2-regular card-content">소요시간</span>
      </div>
      <div class="content-right body2-regular">대략 4-5h</div>
    </div>
    <div class="content">
      <div class="content-left">
        <PositionIcon />
        <span class="body2-regular card-content">모임장소</span>
      </div>
      <div class="content-right body2-regular">코스 시작점</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  PeopleIcon,
  DistanceIcon,
  Time1Icon,
  PositionIcon,
  CourseIcon,
  DateIcon,
} from '@/components';
</script>

<style scoped>
.card-course {
  width: 100%;
  border-radius: var(--radius-s);
  background-color: var(--color-card-surface);
  padding: var(--margin-m);
  gap: var(--margin-s);
  display: flex;
  flex-direction: column;
}

.content {
  display: flex;
  width: 100%;
  gap: 24px;
}

.content-left {
  display: flex;
  gap: var(--margin-xs);
  width: 6.8rem;
}

.card-content {
  color: var(--color-greyscale-400);
}

.content-right {
  color: var(--color-text-body);
}
</style>
