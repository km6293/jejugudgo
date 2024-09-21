<template>
  <div class="event-container">
    <div
      class="filter"
      @click="toggleFilter"
      :class="{ active: isFilterOpen }"
    >
      <span>{{ selectedFilter }} ▼</span>
    </div>
    <div
      class="filter-list"
      v-if="isFilterOpen"
    >
      <div
        class="filter-item"
        :class="{ active: selectedFilter === 'ALL' }"
        @click="fetchEvents('ALL')"
      >
        전체
      </div>
      <div
        class="filter-item"
        :class="{ active: selectedFilter === 'PROGRESS' }"
        @click="fetchEvents('PROGRESS')"
      >
        진행중
      </div>
      <div
        class="filter-item"
        :class="{ active: selectedFilter === 'SCHEDULED' }"
        @click="fetchEvents('SCHEDULED')"
      >
        진행완료
      </div>
      <div
        class="filter-item"
        :class="{ active: selectedFilter === 'END' }"
        @click="fetchEvents('END')"
      >
        종료
      </div>
    </div>
    <div class="event-list">
      <EventCard
        v-for="event in events"
        :key="event.eventId"
        :event="event"
        class="event-item"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { EventCard } from './components';
import axios from 'axios';
import { getCookie } from '@/utils';

const events = ref([]);
const accessToken = getCookie('Authorization');
const selectedFilter = ref('전체');
const isFilterOpen = ref(false);

// 필터 토글 함수
const toggleFilter = () => {
  isFilterOpen.value = !isFilterOpen.value;
};

// 이벤트 데이터를 가져오는 함수
const fetchEvents = async (status) => {
  selectedFilter.value = status === 'ALL' ? '전체' : status; // 선택한 필터 업데이트
  isFilterOpen.value = false; // 필터 닫기
  try {
    const response = await axios.get(
      `${process.env.VUE_APP_BASE_API}/api/v1/event?query=${status}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    events.value = response.data.content;

    console.log(events.value);
  } catch (error) {
    console.error('이벤트 데이터를 가져오는 중 오류 발생:', error);
  }
};

// 처음에는 전체 이벤트를 가져오도록 호출
onMounted(() => fetchEvents('ALL'));
</script>

<style scoped>
.event-container {
  display: flex;
  margin-top: 40px;
  flex-direction: column;
  gap: 40px;
}

.filter {
  padding: 10px 20px;
  border-radius: var(--radius-s);
  background-color: var(--color-light-gray);
  cursor: pointer;
  transition: background-color 0.3s;
}

.filter.active {
  background-color: var(--color-primary);
  color: white; /* 선택된 항목의 글자색 */
}

.filter-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.filter-item {
  padding: 10px 20px;
  border-radius: var(--radius-s);
  background-color: var(--color-light-gray);
  cursor: pointer;
  transition: background-color 0.3s;
}

.filter-item.active {
  background-color: var(--color-primary);
  color: white; /* 선택된 항목의 글자색 */
}

.filter-item:hover {
  background-color: var(--color-gray);
}

.event-list {
  gap: var(--margin-m2);
  padding: 0px 20px 0px 20px;
  display: grid;
}

.event-item {
  width: 225px;
}
</style>
