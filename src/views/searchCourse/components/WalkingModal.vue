<template>
  <div class="modal-overlay">
    <div class="modal">
      <div class="modal-content">
        <h3 class="modal-title subheading-bold">{{ modalTitle }}</h3>
        <div class="content-text body2-regular">
          <p class="text-detail">{{ modalMessage1 }}</p>
          <p class="text-detail">{{ modalMessage2 }}</p>
        </div>
      </div>
      <div class="modal-actions">
        <button
          class="cancel-button body1-bold"
          @click="handleCloseModal"
        >
          취소
        </button>
        <button
          class="review-button body1-bold"
          @click="handleMoreModal"
        >
          {{ modalButtonText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps<{
  status: 'complete' | 'stop';
  closeModal?: () => void;
}>();

const router = useRouter();

const handleCloseModal = () => {
  if (props.status === 'complete') {
    router.push({ path: '/home' });
  } else if (props.closeModal) {
    props.closeModal();
  }
};

const handleMoreModal = () => {
  if (props.status === 'complete') {
    router.push({ path: '/course-review-start' });
  } else if (props.closeModal) {
    router.push({ path: '/home' });
  }
};

const modalTitle = computed(() => {
  return props.status === 'complete' ? '코스 완주!' : '코스를 중단하시겠어요?';
});

const modalMessage1 = computed(() => {
  return props.status === 'complete'
    ? '간단한 코스 완주 리뷰를 남기며'
    : '걷기를 중단하면 지금까지 걸은 기록은 저장';
});

const modalMessage2 = computed(() => {
  return props.status === 'complete'
    ? '완주의 기쁨을 나눠보세요.'
    : '되지 않아요.';
});

const modalButtonText = computed(() => {
  return props.status === 'complete' ? '리뷰쓰기' : '중단하기';
});
</script>

<style scoped>
.content-text {
  color: var(--color-text-body);
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  background-color: var(--color-card-surface);
  padding: 20px;
  border-radius: var(--radius-s);
  width: 320px;
  height: 227px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.modal-actions {
  display: flex;
  justify-content: space-between;
  gap: var(--margin-s);
}

.modal-content {
  align-items: center;
  padding: var(--margin-m2);
  gap: 16px;
  width: 280px;
  height: 123px;
  display: flex;
  flex-direction: column;
}

.modal-title {
  color: var(--color-text-secondary);
}

.cancel-button,
.review-button {
  width: 154px;
  height: 48px;
  border-radius: var(--padding-s);
  padding: var(--padding-m);
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
}

.cancel-button {
  background-color: var(--color-button-secondary);
  color: var(--color-neutral-100);
}

.review-button {
  background-color: var(--color-button-primary);
  color: var(--button-on-primary);
}

.text-detail {
  text-align: center;
}
</style>
