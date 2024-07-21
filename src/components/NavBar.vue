<template>
  <nav>
    <router-link
      to="/"
      class="nav-item"
      :class="{ active: isActive('/') }"
    >
      <div class="nav-icon">
        <component :is="isActive('/') ? HomeActiveIcon : HomeDisabledIcon" />
        <span>홈</span>
      </div>
    </router-link>
    <router-link
      to="/about"
      class="nav-item"
      :class="{ active: isActive('/about') }"
    >
      <div class="nav-icon">
        <component
          :is="
            isActive('/about')
              ? CourseSearchActiveIcon
              : CourseSearchDisabledIcon
          "
        />
        <span>코스검색</span>
      </div>
    </router-link>
    <router-link
      to="/walk-together"
      class="nav-item"
      :class="{ active: isActive('/walk-together') }"
    >
      <div class="nav-icon">
        <component
          :is="
            isActive('/walk-together')
              ? WalkTogetherActiveIcon
              : WalkTogetherDisabledIcon
          "
        />
        <span>같이걷기</span>
      </div>
    </router-link>
    <router-link
      to="/my-walk"
      class="nav-item"
      :class="{ active: isActive('/my-walk') }"
    >
      <div class="nav-icon">
        <component
          :is="isActive('/my-walk') ? MyWalkGoActiveIcon : MyWalkGoDisabledIcon"
        />
        <span>마이걷고</span>
      </div>
    </router-link>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router';
import {
  CourseSearchActiveIcon,
  CourseSearchDisabledIcon,
  HomeActiveIcon,
  HomeDisabledIcon,
  MyWalkGoActiveIcon,
  MyWalkGoDisabledIcon,
  WalkTogetherActiveIcon,
  WalkTogetherDisabledIcon,
} from '@/components/icons/navigation';

const route = useRoute();

const isActive = (path) => route.path === path;
</script>

<style scoped>
nav {
  z-index: 1000;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #333;
  padding: 16px 0;
  text-align: center;
  min-width: 280px;
  max-width: 768px;
  display: flex;
  justify-content: space-around;
}

.nav-item {
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  text-decoration: none;
  color: var(--color-neutral-500);
}

.nav-item.active {
  color: var(--color-neutral-100);
  font-family: var(--font-regular);
}

.nav-item span {
  margin-top: 5px;
}

.nav-icon {
  height: 48px;
  width: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
