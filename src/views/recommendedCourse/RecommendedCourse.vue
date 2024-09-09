<template>
  <div class="container">
    <div class="header">
      <LogoIcon
        :width="106"
        :height="20"
      />
      <Notification />
    </div>
    <div class="contents">
      <div><Tags /></div>
      <div class="sub-title">
        <Title :title="'오늘은 이런코스 어때요?'" />
        <CourseCard />
      </div>
      <div class="sub-title">
        <div>
          <Title :title="'포근한 날씨랑 어울리는'" />
          <Title :title="'코스는 어때요?'" />
        </div>
        <CourseCard />
      </div>
    </div>
    <div class="create-course">
      <div
        class="button-inner"
        @click="createCourse"
      >
        <SparkleIcon />
        <div class="course-button body2-bold">코스 생성하기</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Notification,
  LogoIcon,
  Tags,
  Button,
  SparkleIcon,
} from '@/components';
import Title from '@/views/home/components/Title.vue';
import CourseCard from '../home/components/CourseCard.vue';
import router from '@/router';

const buttonStyle = {
  height: '44px',
  width: '135px',
  fontSize: '1.4rem',
};

const createCourse = () => {
  router.push({ name: 'create-course' });
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
}

.contents {
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  gap: 40px;
}

.container {
  position: relative;
}

.sub-title {
  gap: var(--margin-m2);
  display: grid;
}
.create-course {
  position: sticky;
  bottom: 20px;
  display: flex;
  justify-content: flex-end;
  padding: 0 20px 0 0;
}
.button-inner {
  background-color: var(--color-button-primary);
  display: flex;
  align-items: center;
  width: auto;
  height: 4.4rem;
  padding: var(--padding-m);
  gap: var(--spacing-1);
  border-radius: var(--padding-s);
  justify-content: center;
  max-width: 14rem;
}
.course-button {
  white-space: nowrap;
}
</style>
