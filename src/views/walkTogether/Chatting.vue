<template>
  <div class="container">
    <div class="chat">
      <div class="chat-image">
        <CardImage
          :test="'52x52'"
          :icon="false"
        />
      </div>
      <div class="content">
        <div class="content-header">
          <div class="chat-title body1-bold">채팅방 제목</div>
          <div class="chat-date caption-regular">06월 20일</div>
        </div>
        <div class="chat-content body2-regular">
          가장 최근에 수신된 메시지 미리보기
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CardImage } from '@/components';
</script>

<style scoped>
.container {
  padding: 20px;
}

.chat {
  display: flex;
  gap: var(--margin-m);
}

.content {
  display: flex;
  flex-direction: column;
  gap: var(--margin-s);
}

.content-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chat-title {
  color: var(--color-neutral-100);
}

.chat-date {
  color: var(--color-neutral-500);
}

.chat-content {
  color: var(--color-neutral-300);
}
</style>
