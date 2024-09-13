<template>
  <header class="header-content">
    <div class="header-text heading2-bold">
      {{ userName }}님, 혼저옵서예! <br />
      오늘은 어디를 걸을까요?
    </div>
    <div class="header-info">
      <Search />
      <div class="info-rows">
        <div class="rows-item">
          <div class="item-text">
            <div class="item-sub-text caption-medium">지금 서귀포시는</div>
            <div class="item-main-text subheading-bold">{{ temperature }}˚</div>
          </div>
          <img
            :src="weatherIcon"
            class="rows-item-icon-weather"
            alt="Weather Icon"
          />
        </div>
        <div
          class="rows-item"
          @click="goToCheckList"
        >
          <div class="item-text">
            <div class="item-sub-text caption-medium">필요한 것들</div>
            <div class="item-main-text subheading-bold">체크하기</div>
          </div>
          <NoteIcon class="rows-item-icon" />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { Search, WeatherIcon, NoteIcon } from '@/components';
import { useRouter } from 'vue-router';

const userName = ref('');
const temperature = ref(0);
const weather = ref('');
const weatherIcon = ref('');
const router = useRouter();

const fetchUserInfo = async () => {
  try {
    const response = await axios.get('/api/v1/auth/user', {
      headers: {
        Authorization: `Bearer ${getCookie('Authorization')}`,
      },
    });
    const userData = response.data;
    userName.value = userData.name || userData.nickname || '사용자';
  } catch (error) {
    console.error('Failed to fetch user info:', error);
  }
};

const fetchWeather = async () => {
  const apiKey = 'b185f63264f73151b89f36f599433cf2';
  const city = 'Jeju City';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await axios.get(apiUrl);
    temperature.value = response.data.main.temp.toFixed(1);
    weather.value = response.data.weather[0].main;

    switch (weather.value) {
      case 'Clouds':
        weatherIcon.value = require('@/assets/weather/Clouds.svg');
        break;
      case 'Rain':
        weatherIcon.value = require('@/assets/weather/Rain.svg');
        break;
      case 'Snow':
        weatherIcon.value = require('@/assets/weather/Snow.svg');
        break;
      default:
        weatherIcon.value = require('@/assets/weather/Sunny.svg');
    }
  } catch (error) {
    console.error('Failed to fetch weather:', error);
  }
};

const goToCheckList = () => {
  router.push({ name: 'check-list' });
};

onMounted(() => {
  fetchUserInfo();
  fetchWeather();
});

function getCookie(name: string): string | null {
  const matches = document.cookie.match(
    new RegExp('(?:^|; )' + name + '=([^;]*)')
  );
  return matches ? decodeURIComponent(matches[1]) : null;
}
</script>

<style scoped>
.header-content {
  display: grid;
  gap: var(--margin-l);
}

.header-text {
  color: var(--color-neutral-100);
  padding: 0px 20px 0px 20px;
}

.header-info {
  padding: 0px 20px 0px 20px;
  gap: 16px;
  min-width: 240px;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: auto;
}

.info-search {
  width: 100%;
  display: flex;
  align-items: center;
  padding: var(--margin-xs) var(--margin-s) var(--margin-xs) var(--margin-s);
  gap: var(--margin-s);
  justify-content: space-between;
  background-color: var(--color-greyscale-800);
  height: 52px;
  border-radius: var(--radius-s);
  box-sizing: border-box;
}

.info-rows {
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 88px;
  gap: 16px;
}

.rows-item {
  background-color: var(--color-greyscale-800);
  flex: 1;
  border-radius: var(--radius-s);
  gap: 24px;
  padding: var(--margin-m);
  position: relative;
}

.item-text {
  gap: 4px;
  display: flex;
  flex-direction: column;
}

.item-sub-text {
  color: var(--color-text-white-50);
}

.item-main-text {
  color: var(--color-text-white);
}

.rows-item-icon {
  position: absolute;
  bottom: 0px;
  right: 0px;
}

.rows-item-icon-weather {
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 70px;
  height: 70px;
}

.search-text {
  flex: 1;
  padding: 0px var(--margin-m) 0px var(--margin-m);
  min-width: 0;
  background-color: transparent;
  outline: none;
  border: none;
  color: var(--color-neutral-100);
}

.search-text::placeholder {
  color: var(--color-text-muted);
}
</style>
