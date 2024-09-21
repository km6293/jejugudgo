<template>
  <div v-if="event && event.length">
    <div class="contest-row">
      <div
        v-for="item in event"
        :key="item.eventId"
        class="contest-container"
      >
        <img
          :src="item.imageUrl || 'https://via.placeholder.com/220x182'"
          :alt="item.title || alt"
          class="contest-image"
          @click="openInformation(item.informationUrl)"
        />

        <div class="contest-scheduled">
          <Chips status="ongoing" />
        </div>
        <div class="contest-content">
          <div class="content-title body1-medium">
            {{ item.title }}
          </div>
          <div class="content-info">
            <div class="info-name regular-12">{{ item.organization }}</div>
            <div class="info-date caption-medium">{{ item.startDate }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CSSProperties, defineProps, ref, onMounted } from 'vue';
import { Chips } from '@/components';
import axios from 'axios';
import { getCookie } from '@/utils';

const props = defineProps<{
  alt?: string;
  imageStyle?: CSSProperties;
}>();

const event = ref(null);
const accessToken = getCookie('Authorization');

const fetchEvent = async () => {
  try {
    const response = await axios.get(
      `${process.env.VUE_APP_BASE_API}/api/v1/event?query=ALL`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    // 그룹화: 예를 들어, organization 또는 다른 기준으로 그룹화
    const groupedEvents = response.data.content.reduce((acc, event) => {
      const key = event.organization; // 그룹화 기준
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(event);
      return acc;
    }, {});

    // 각 그룹에서 첫 번째 이벤트만 선택하고 최대 5개까지 가져옴
    event.value = Object.values(groupedEvents)
      .slice(0, 5) // 그룹의 수를 5개로 제한
      .map((group) => group[0]); // 각 그룹에서 첫 번째 이벤트 선택
    console.log(event.value);
  } catch (error) {
    console.error('Error fetching event:', error);
  }
};

// URL을 새 창에서 열기 위한 함수
const openInformation = (url) => {
  if (url) {
    window.open(url, '_blank'); // 새 창에서 URL 열기
  }
};

// 컴포넌트가 마운트될 때 API 호출
onMounted(fetchEvent);
</script>

<style scoped>
.contest-row {
  display: flex; /* Flexbox 사용하여 수평 배치 */
  gap: 16px; /* 아이템 간 간격 조정 */
  justify-content: space-between; /* 아이템 간격 자동 조정 */
}

.contest-container {
  border-radius: 12px;
  position: relative;
  flex: 0 0 auto; /* 컨테이너가 자동 크기 조정되도록 설정 */
  max-width: 220px; /* 각 컨테이너의 최대 너비 설정 */
  height: 250px; /* 고정 높이 설정 */
}

.contest-scheduled {
  position: absolute;
  top: 0;
  left: 0;
  padding: var(--padding-xs);
}

.contest-image {
  width: 220px;
  height: 175px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.contest-content {
  width: 220px;
  height: 74px;
  background-color: var(--color-card-surface);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  gap: 8px;
  padding: 12px;
  display: grid;
}

.content-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--color-neutral-100);
}

.content-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.info-name {
  color: var(--color-text-muted);
}

.info-date {
  color: var(--color-text-body);
}
</style>
