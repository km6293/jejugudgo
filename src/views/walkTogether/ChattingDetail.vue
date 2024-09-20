<template>
  <div class="chat-detail-container">
    <TopBar>
      <template #center>
        <span>{{ title }}</span>
        <span class="participant-count">{{ participantCount }}</span>
      </template>
    </TopBar>

    <!-- 공지 사항 -->
    <div
      v-if="notice"
      class="notice"
    >
      {{ notice }}
    </div>

    <!-- 채팅 메시지 표시 -->
    <div class="chat-content">
      <div
        class="message"
        v-for="message in messages"
        :key="message.id"
        :class="{
          'my-message': message.sender === '나',
          'other-message': message.sender !== '나',
        }"
      >
        <div
          class="message-sender"
          v-if="message.sender !== '나'"
        >
          {{ message.sender }}
        </div>
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
import { TopBar } from '../myWalk/components';
import { useRoute } from 'vue-router';
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';
import { getCookie } from '@/utils'; // 인증 토큰을 가져오기 위한 유틸리티

// WebSocket 연결에 사용할 인증 토큰
const accessToken = getCookie('Authorization');
const route = useRoute();
const chatId = route.params.id as string;

// 채팅 메시지 상태 관리
const messages = ref([]); // 서버로부터 받는 메시지들
const newMessage = ref(''); // 입력한 새 메시지
let stompClient: Client | null = null; // STOMP 클라이언트

// 더미데이터
const title = ref('나는 채팅방입니다.');
const participantCount = ref(3);
const notice = ref('공지 사항: 채팅방 규칙을 확인하세요.');

// 메시지 전송 함수
const sendMessage = () => {
  if (newMessage.value.trim() && stompClient && stompClient.connected) {
    const message = {
      sender: '나',
      text: newMessage.value,
      time: new Date().toLocaleTimeString().substring(0, 5),
    };

    // STOMP를 통해 서버로 메시지 전송
    stompClient.publish({
      destination: `/pub/chat/${chatId}`, // 전송할 채팅 경로
      body: JSON.stringify(message),
    });

    // 메시지를 로컬에서도 추가하여 즉시 화면에 반영
    messages.value.push(message);
    newMessage.value = '';
  }
};

// WebSocket 설정 (SockJS + STOMP 사용)
const setupWebSocket = () => {
  const socket = new SockJS(
    `${process.env.VUE_APP_BASE_API}/ws?token=${accessToken}`
  );
  stompClient = new Client({
    webSocketFactory: () => socket,
    debug: (str) => console.log(str),
    reconnectDelay: 5000,
    heartbeatIncoming: 4000,
    heartbeatOutgoing: 4000,
  });

  stompClient.onConnect = (frame) => {
    console.log('WebSocket 연결 성공');

    // 메시지 구독
    stompClient.subscribe(`/sub/chat/${chatId}`, (message) => {
      const receivedMessage = JSON.parse(message.body);
      messages.value.push(receivedMessage); // 수신한 메시지 화면에 반영
    });
  };

  stompClient.onStompError = (frame) => {
    console.error('STOMP 에러:', frame.headers['message']);
    console.error('상세 내용:', frame.body);
  };

  stompClient.activate();
};

// 컴포넌트가 처음 마운트될 때 WebSocket 연결 설정
onMounted(() => {
  setupWebSocket(); // WebSocket 연결 설정
});

// 컴포넌트가 해제될 때 WebSocket 연결 종료
onBeforeUnmount(() => {
  if (stompClient) {
    stompClient.deactivate();
  }
});
</script>

<style scoped>
.chat-detail-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  box-sizing: border-box;
}

.notice {
  background-color: #f9f9f9;
  padding: 10px;
  text-align: center;
  font-weight: bold;
  border-bottom: 1px solid #ccc;
}

.chat-content {
  flex-grow: 1;
  overflow-y: auto;
  padding-top: 10px;
}

.message {
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 기본은 왼쪽 정렬 */
}

.my-message {
  align-items: flex-end; /* 내 메시지는 오른쪽 정렬 */
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

.participant-count {
  color: #22f779; /* 참가자 수 색상 */
  margin-left: 8px; /* 제목과의 간격 */
}
</style>
