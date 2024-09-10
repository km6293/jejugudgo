<template>
  <div class="container">
    <div class="content-list">
      <div class="content">
        <div class="content-title body2-regular">제목</div>
        <input
          class="content-input body2-medium"
          placeholder="동행 모집 글의 제목을 입력하세요"
        />
      </div>
      <div class="content">
        <div class="content-title body2-regular">일자</div>
        <input
          class="content-input body2-medium"
          placeholder="2024.07.07(수)"
        />
      </div>
      <div class="content">
        <div class="content-title body2-regular">시간</div>
        <input
          class="content-input body2-medium"
          placeholder="오후 13:00"
        />
      </div>
      <div class="content">
        <div class="content-title body2-regular">정원</div>
        <input
          class="content-input body2-medium"
          placeholder="6"
        />
      </div>
      <div class="content">
        <div class="content-title body2-regular">장소</div>
        <input
          class="content-input body2-medium"
          placeholder="6"
        />
      </div>
      <div class="content">
        <div class="content-title body2-regular">코스명</div>
        <div class="input-wrapper">
          <input
            class="content-input body2-medium"
            :class="{ 'with-icon': iconVisible }"
            placeholder="코스명을 입력하세요"
          />
          <div
            v-if="iconVisible"
            class="icon-wrapper"
          >
            <SearchIcon />
          </div>
        </div>
      </div>
    </div>
    <Button
      text="작성 완료"
      :style="{
        height: '48px',
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { Button, SearchIcon } from '@/components';
import { ref } from 'vue';

const iconVisible = ref(true);
</script>

<style scoped>
.container {
  height: 100%;
  padding: 20px;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
}

.input-wrapper {
  position: relative;
}

.content-input {
  width: 100%;
  height: 5.2rem;
  background-color: var(--color-card-surface);
  color: var(--color-text-active);
  border-radius: var(--radius-xl);
  border: none;
  outline: none;
  padding: 12px 16px;
}

.content-input.with-icon {
  padding-right: 40px;
}

.content-input::placeholder {
  color: var(--color-text-muted);
}

.icon-wrapper {
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  pointer-events: none;
}

.content-list {
  display: flex;
  flex-direction: column;
  gap: var(--margin-m);
}

.content {
  display: flex;
  flex-direction: column;
  gap: var(--margin-m);
}

.content-title {
  color: var(--color-card-on-surface);
}
</style>
