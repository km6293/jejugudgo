<template>
  <div class="chat-container">
    <div
      v-if="chats.length === 0"
      class="empty-chat"
    >
      <img
        src="@/assets/empty-chat.svg"
        alt="No chat history"
        class="empty-chat-image"
      />
    </div>
    <div
      v-for="(chat, index) in chats"
      :key="index"
      @click="goToChatDetail(index)"
      class="chat-room"
    >
      <div class="chat-image">
        <CardImage
          :test="'52x52'"
          :icon="false"
        />
      </div>
      <div class="chat-content">
        <div class="chat-header">
          <div class="chat-title body1-bold">채팅방 제목</div>
          <div class="chat-date caption-regular">06월 20일</div>
        </div>
        <div class="chat-preview body2-regular">
          가장 최근에 수신된 메시지 미리보기
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CardImage } from '@/components';
import { useRouter } from 'vue-router';

const router = useRouter();
const chats = [0, 1, 2, 3, 4];

const goToChatDetail = (id: number) => {
  router.push({ name: 'chatDetail', params: { id: String(id) } });
};
</script>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  gap: var(--margin-l);
  padding: 20px;
  height: 100vh; /* Full viewport height */
}

.empty-chat {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; /* Take full height of the container */
}

.empty-chat-image {
  width: 200px; /* Adjust size as needed */
  height: auto;
}

.chat-room {
  display: flex;
  gap: var(--margin-m);
  width: 100%;
  cursor: pointer;
  padding: 10px 0;
}

.chat-image {
  width: 52px;
  height: 52px;
  flex-shrink: 0;
}

.chat-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--margin-s);
  flex-grow: 1;
}

.chat-header {
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

.chat-preview {
  color: var(--color-neutral-300);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.chat-divider {
  border-top: 2px solid #ffffff;
  margin: 10px 0;
}
</style>
