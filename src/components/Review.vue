<template>
  <div class="review-container">
    <div class="review-header">
      <div class="review-status">
        <div class="status-user">
          <CardImage
            :test="'24x24'"
            :icon="false"
            :imageStyle="{
              borderRadius: '1000px',
            }"
          />
          <div class="reveiw-user-name body2-medium">프로필명</div>
          <div class="review-star">
            <div><StarIcon /></div>
            <p class="info-text caption-medium">4.5</p>
          </div>
        </div>
        <div class="info-text caption-regular">2024.08.15</div>
        <KebabIcon />
      </div>
    </div>
    <div class="review-title subheading-bold">강남에서 부산 광안대교까지</div>
    <div class="review-icon">
      <div
        class="icon-content"
        v-for="item of 20"
        :key="item"
      >
        <ShieldIcon />
        <span class="caption-regular icon-title"> 안전한 길 </span>
      </div>
    </div>
    <div class="review-picture-slider">
      <div
        v-for="item of 5"
        :key="item"
        class="picture-item"
      >
        <CardImage
          :icon="false"
          :test="'148x148'"
        />
      </div>
    </div>
    <div
      class="review-content body2-medium"
      :class="{ expanded: isExpanded }"
      ref="reviewContent"
    >
      차귀도 올레길을 걷고 싶어 오랜만에 탐방 배타고 10분, 둘레길 1시간 정도
      둘러보고 배타고 해변가도 보고 차귀도 올레길을차귀도 올레길을 걷고 싶어
      오랜만에 탐방 배타고 10분, 둘레길 1시간 정도 둘러보고 배타고 해변가도 보고
      차귀도 올레길을차귀도 올레길을 걷고 싶어 오랜만에 탐방 배타고 10분, 둘레길
      1시간 정도 둘러보고 배타고 해변가도 보고 차귀도 올레길을
    </div>
    <button
      v-if="showMoreButton"
      @click="toggleExpand"
      class="more-button"
    >
      <template v-if="!isExpanded"><DownIcon /></template>
    </button>
  </div>
</template>

<script setup lang="ts">
import {
  CardImage,
  StarIcon,
  KebabIcon,
  ShieldIcon,
  DownIcon,
} from '@/components';
import { ref, onMounted } from 'vue';

const isExpanded = ref(false);
const showMoreButton = ref(false);
const reviewContent = ref<HTMLElement | null>(null);

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value;
};

onMounted(() => {
  const el = reviewContent.value;
  if (el) {
    const lineCount = Math.floor(
      el.scrollHeight / parseFloat(getComputedStyle(el).lineHeight)
    );
    if (lineCount > 2) {
      showMoreButton.value = true;
    }
  }
});
</script>

<style scoped>
.review-container {
  display: flex;
  flex-direction: column;
  gap: var(--margin-m);
  background: #333333;
  padding: 16px;
  border-radius: 12px;
}

.status-user {
  display: flex;
  align-items: center;
  gap: 4px;
}

.review-status {
  justify-content: space-between;
  display: flex;
  align-items: center;
}

.reveiw-user-name {
  color: var(--color-text-white);
}

.info-text {
  color: var(--color-text-body);
}

.review-star {
  display: flex;
}

.review-title {
  color: var(--color-neutral-100);
}

.icon-content {
  display: flex;
  gap: var(--margin-xs);
  align-items: center;
  padding: var(--padding-m) var(--padding-xs) var(--padding-m) var(--padding-xs);
  border-radius: var(--radius-xs);
  background-color: var(--color-neutral-900);
  height: 32px;
}

.review-icon {
  gap: var(--margin-xs);
  overflow-x: auto;
  display: inline-flex;
  -ms-overflow-style: none;
  scrollbar-width: none;
  white-space: nowrap;
}

.icon-title {
  color: var(--color-text-secondary);
}

.review-picture-slider {
  overflow-x: auto;
  display: inline-flex;
  gap: 12px;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.review-content {
  color: var(--color-text-body);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
}

.review-content.expanded {
  -webkit-line-clamp: unset;
}

.more-button {
  margin-top: 8px;
  background: none;
  border: none;
  color: var(--color-primary);
  cursor: pointer;
}
</style>
