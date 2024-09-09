<template>
  <div
    class="modal-backdrop"
    @click.self="closeModal"
  >
    <div class="modal-content">
      <div class="modal-top">
        <div class="header">
          <span class="modal-title subheading-bold">동행 신청</span>
          <Delete2Icon @click="closeModal" />
        </div>

        <textarea
          class="inner-content body2-medium"
          placeholder="간단한 소개, 신청 목적 등 작성"
        />

        <div class="info">
          <div class="info-icon">
            <InfoIcon color="#959595" />
          </div>
          <div class="caption-regular info-content">
            <div>동행 신청이 수락되면 채팅방에 초대될 수 있습니다.</div>
            <div>초대 여부는 앱 푸시로 알려 드립니다. 앱 푸시가 꺼진</div>
            <div>경우 알림이 가지 않으니, 푸시 설정을 확인해주세요.</div>
          </div>
        </div>
      </div>
      <Button
        text="작성 완료"
        @click="confirmJoin"
        :style="{
          height: '48px',
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Delete2Icon, InfoIcon, Button } from '@/components';
import { defineEmits } from 'vue';
const emit = defineEmits(['close', 'confirm']);

const closeModal = () => {
  emit('close');
};

const confirmJoin = () => {
  emit('confirm');
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
}

.header {
  display: flex;
  justify-content: space-between;
}

.modal-top {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.modal-title {
  color: var(--color-text-secondary);
}

.modal-content {
  width: 32.3rem;
  background: var(--color-card-surface);
  border-radius: var(--radius-s);
  padding: 20px;
  gap: var(--margin-m);
  display: flex;
  flex-direction: column;
}

.inner-content {
  padding: var(--margin-m);
  border-radius: var(--radius-s);
  background-color: var(--color-neutral-700);
  height: 11.5rem;
  resize: none;
  outline: none;
  color: var(--color-text-body);
  overflow-y: hidden;
  white-space: normal;
}

.info-content {
  color: var(--color-text-body);
}

.info {
  display: flex;
  gap: 4px;
}

.info-icon {
  width: 18px;
}
</style>
