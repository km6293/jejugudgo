<template>
  <article class="recruitment-card">
    <header class="card-header">
      <Chips status="ongoing" />
      <div class="create-time caption-regular">2시간 전</div>
    </header>
    <section class="card-content">
      <div class="content-left">
        <p class="recruitment-title body1-medium">같이 걸을 사람 구해요</p>
        <div class="recruitment-content">
          <p class="item caption-medium">
            <DistanceIcon />
            <span>한라산 초입부터 정상</span>
          </p>
          <p class="item caption-medium">
            <Time1Icon />
            <span>24.05.06(수) 07:00</span>
          </p>
          <p class="item caption-medium">
            <PeopleIcon />
            <span>
              <span class="item-point">10</span>
              /20
            </span>
          </p>
        </div>
      </div>
      <p class="content-right">
        <CardImage :test="'104x104'" />
      </p>
    </section>
  </article>
</template>

<script setup lang="ts">
import {
  DistanceIcon,
  Time1Icon,
  PeopleIcon,
  CardImage,
  Chips,
} from '@/components';
</script>

<style scoped>
.recruitment-card {
  background-color: var(--color-card-surface);
  width: 100%;
  height: 176px;
  padding: var(--margin-m);
  gap: var(--margin-m);
  border-radius: var(--radius-s);
  display: flex;
  flex-direction: column;
}

.card-header {
  display: flex;
  justify-content: space-between;
}

.create-time {
  color: var(--color-text-muted);
}

.card-content {
  display: flex;
  justify-content: space-between;
  gap: var(--margin-m);
}

.content-left {
  gap: var(--margin-m);
  display: flex;
  flex-direction: column;
}

.recruitment-title {
  color: var(--color-text-secondary);
}

.recruitment-content {
  display: flex;
  flex-direction: column;
  gap: var(--margin-xs);
}

.item {
  gap: var(--margin-xs);
  display: flex;
  align-items: center;
  color: var(--color-text-body);
}

.item-point {
  color: var(--color-text-primary);
}
</style>
