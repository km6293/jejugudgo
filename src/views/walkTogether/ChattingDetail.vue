<template>
  <div class="chat-detail-container">
    <!-- 채팅 메시지 표시 -->
    <div class="chat-content">
      <div
        class="message"
        v-for="message in messages"
        :key="message.id"
      >
        <div class="message-sender">{{ message.sender }}</div>
        <div class="message-text">{{ message.text }}</div>
        <div class="message-time">{{ message.time }}</div>
      </div>
    </div>

    <!-- 메시지 입력창 -->
    <div class="message-input">
      <input
        type="text"
        v-model="newMessage"
        placeholder="메시지를 입력하세요..."
        @keyup.enter="sendMessage"
      />
      <button @click="sendMessage">전송</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';
import { getCookie } from '@/utils';

// WebSocket 연결에 사용할 인증 토큰
const accessToken = getCookie('Authorization');
const route = useRoute();
const chatId = route.params.id as string;

// 채팅 메시지 상태 관리
const messages = ref([]); // 서버로부터 받는 메시지들
const newMessage = ref(''); // 입력한 새 메시지
let socket; // WebSocket 연결용 변수

// 메시지 전송 함수
const sendMessage = () => {
  if (newMessage.value.trim()) {
    const message = {
      sender: '나',
      text: newMessage.value,
      time: new Date().toLocaleTimeString().substring(0, 5),
    };

    // WebSocket을 통해 서버로 메시지 전송
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify(message));
    }

    // 메시지를 로컬에서도 추가하여 즉시 화면에 반영
    messages.value.push(message);
    newMessage.value = '';
  }
};

// WebSocket 설정
const setupWebSocket = () => {
  const socket = new WebSocket(`ws://localhost:8080/ws?token=${accessToken}`);

  socket.onmessage = (event) => {
    const receivedMessage = JSON.parse(event.data);
    messages.value.push(receivedMessage);
  };

  socket.onopen = () => {
    console.log('WebSocket 연결 성공');
  };

  socket.onclose = () => {
    console.log('WebSocket 연결이 종료되었습니다.');
  };

  socket.onerror = (error) => {
    console.error('WebSocket 에러:', error);
  };
};

// 컴포넌트가 처음 마운트될 때 실행
onMounted(() => {
  setupWebSocket(); // WebSocket 연결 설정
});

// 컴포넌트가 해제될 때 WebSocket 종료
onBeforeUnmount(() => {
  if (socket) {
    socket.close();
  }
});
</script>

<style scoped>
.chat-detail-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  height: 100vh;
  box-sizing: border-box;
}

.chat-content {
  flex-grow: 1;
  overflow-y: auto;
}

.message {
  margin-bottom: 12px;
}

.message-sender {
  font-weight: bold;
}

.message-text {
  margin-top: 5px;
}

.message-time {
  color: #888;
  font-size: 12px;
}

.message-input {
  display: flex;
  gap: 10px;
  align-items: center;
}

.message-input input {
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.message-input button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
