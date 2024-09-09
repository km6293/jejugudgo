<template>
  <div>
    <div class="container">
      <div class="header">
        <Chips status="ongoing" />
        <div class="title heading3-bold">같이 걸을 사람 구해요</div>
        <div class="user">
          <div class="user-image">
            <CardImage
              :test="'24x24'"
              :icon="false"
            />
          </div>
          <div class="user-name body2-regular">제주 좋아</div>
          <div class="user-write-time caption-regular">2시간 전</div>
        </div>
      </div>

      <div class="divider"></div>

      <CardDetailContent />

      <div class="content-text body1-regular">
        같이 걸을 사람 구해요. 갠적으로 여자분 선호해요.
      </div>

      <CourseMap />

      <div class="join-companion">
        <div
          class="button-inner"
          @click="openModal"
        >
          <div class="join-button body1-bold">동행 신청하기</div>
        </div>
      </div>
    </div>

    <JoinModal
      v-if="isModalOpen"
      @close="closeModal"
      @confirm="handleConfirm"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Chips, CardImage } from '@/components';
import { useRoute } from 'vue-router';
import { CardDetailContent, CourseMap, JoinModal } from './components';

const route = useRoute();
const id = route.params.id;
const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const handleConfirm = () => {
  // 확인 버튼을 클릭했을 때의 로직
  console.log('동행 신청 확인됨');
  isModalOpen.value = false;
};

onMounted(() => {
  console.log(id);
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 31px;
  padding: var(--margin-m2);
}

.header {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.title {
  color: var(--color-neutral-100);
}

.user {
  display: flex;
  gap: var(--margin-s);
  align-items: center;
}

.user-name {
  color: var(--color-text-white);
}

.user-write-time {
  color: var(--color-text-muted);
}

.divider {
  border: 1px solid var(--color-opacity-white-15);
}

.content-text {
  color: var(--color-neutral-100);
}

.join-companion {
  position: sticky;
  bottom: 20px;
  display: flex;
  justify-content: center;
  z-index: 2;
}
.button-inner {
  background-color: var(--color-button-primary);
  display: flex;
  align-items: center;
  width: 100%;
  height: 4.4rem;
  padding: var(--padding-m);
  gap: var(--spacing-1);
  border-radius: var(--padding-s);
  justify-content: center;
  max-width: 48rem;
}
.join-button {
  white-space: nowrap;
}
</style>
