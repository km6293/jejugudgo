<template>
  <div class="chat-detail-container">
    <TopBar>
      <template #center>
        <span>{{ title }}</span>
        <span class="participant-count">{{ participantCount }}</span>
      </template>
    </TopBar>

    <!-- 유저 정보 표시 -->
    <div class="user-info">
      <img
        :src="profileImageUrl"
        alt="Profile"
      />
      <span>{{ nickname }}</span>
    </div>

    <!-- 공지 사항 -->
    <div
      v-if="notice"
      class="notice"
    >
      {{ notice }}
    </div>

    <!-- 채팅 메시지 표시 -->
    <div class="chat-content">
      <!-- 메시지 내용들 -->
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
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';
import axios from 'axios'; // axios 추가
import { getCookie } from '@/utils';
import { useUserStore } from '@/stores/user/userState'; // Pinia Store 가져오기

// Pinia store에서 유저 정보 불러오기
const userStore = useUserStore();
const { email, name, nickname, profileImageUrl } = userStore;

// WebSocket 연결에 사용할 인증 토큰
const accessToken = getCookie('Authorization');

// 컴포넌트 상태 관리
const messages = ref([]); // 서버로부터 받는 메시지들
const newMessage = ref(''); // 입력한 새 메시지
const client = ref<Client | null>(null);
const connected = ref(false);

// 더미데이터
const title = ref('나는 채팅방입니다.');
const participantCount = ref(3);
const notice = ref('공지 사항: 채팅방 규칙을 확인하세요.');
const chatId = ref('1');

// 구독 처리 함수
const subscribe = (destination: string) => {
  if (client.value) {
    client.value.subscribe(destination, (message) => {
      console.log('message:', message.body);
      const parsedMessage = JSON.parse(message.body);
      handleReceivedMessage(parsedMessage.currentChat); // 수정된 메시지 구조에 맞게 변경
    });
  } else {
    console.log('Client is not connected');
  }
};

// 수신한 메시지 처리
const handleReceivedMessage = (message: {
  userId: number;
  nickname: string;
  text: string;
  time: string;
  images?: { content: string; name: string }[];
}) => {
  messages.value.push(message);
  console.log('Processing message:', message);
};

// handlePlannerDetailResponse 함수 정의 추가
const handlePlannerDetailResponse = (message: string) => {
  console.log('Planner detail response:', message);
};

// 메세지 전송 처리 함수
const sendMessage = async () => {
  const data = {
    userId: userStore.id,
    nickname: userStore.nickname,
    numberTag: userStore.numberTag,
    profileImageUrl: userStore.profileImageUrl,
    message: newMessage.value,
    images: [], // 이미지 배열 추가
  };

  try {
    await axios.post(
      `${process.env.VUE_APP_BASE_API}/sub/chatRooms/${chatId.value}/send`,
      {
        'current-chat': data,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`, // 토큰이 포함되어야 함
        },
      }
    );
    newMessage.value = '';
  } catch (error) {
    console.error('Failed to send message:', error);
  }
};

// WebSocket 설정 (SockJS + STOMP 사용)
const connect = async () => {
  try {
    const response = await axios.get(
      `${process.env.VUE_APP_BASE_API}/ws?token=${accessToken}`
    );

    if (response.status === 200) {
      client.value = new Client({
        webSocketFactory: () => {
          const socket = new SockJS(
            `${process.env.VUE_APP_BASE_API}/ws?token=${accessToken}`
          );

          socket.onclose = (event) => {
            console.log('socket closed', event);
          };
          return socket;
        },
        debug: (str) => {
          console.log(str);
        },
        reconnectDelay: 5000,
        heartbeatIncoming: 4000,
        heartbeatOutgoing: 4000,
      });

      // 구독할 주제 수정
      client.value.onConnect = () => {
        connected.value = true;
        console.log('Connected successfully');
        subscribe(`/sub/chatRooms/${chatId.value}`);
      };

      client.value.onDisconnect = () => {
        connected.value = false;
        console.log('Socket disconnected');
      };

      client.value.onStompError = (frame) => {
        console.error(frame.headers['message']);
        console.error(frame.body);
      };

      client.value.activate();
    }
  } catch (e) {
    console.error(e);
  }
};

// 컴포넌트가 마운트될 때 WebSocket 연결 설정
onMounted(() => {
  connect();
});

// 컴포넌트가 해제될 때 WebSocket 연결 종료
onBeforeUnmount(() => {
  if (client.value) {
    client.value.deactivate();
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
  align-items: flex-start;
}

.my-message {
  align-items: flex-end;
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

.message-images {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.message-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
}

.participant-count {
  color: #22f779;
  margin-left: 8px;
}
</style>
