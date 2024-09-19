<template>
  <div class="container">
    <TopBar>
      <template #center>코스 생성 내역</template>
      <template #right>
        <div @click="toggleDelete">
          <template v-if="showIcon">
            <Delete1Icon />
          </template>
          <template v-else>
            <div class="delete-text caption-bold">삭제</div>
          </template>
        </div>
      </template>
    </TopBar>
  </div>
  <div class="contents">
    <CourseCard
      v-for="(item, index) in courseCards"
      :key="index"
      :showHeader="true"
      :showIcon="!showIcon"
      :checked="item.checked"
      @check="handleCheck(index)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Delete1Icon } from '@/components';
import { TopBar, CourseCard } from './components';

const courseCards = ref([
  { id: 1, name: 'Course 1', checked: false },
  { id: 2, name: 'Course 2', checked: false },
  { id: 3, name: 'Course 3', checked: false },
  { id: 4, name: 'Course 4', checked: false },
  { id: 5, name: 'Course 5', checked: false },
]);

const showIcon = ref(true);

const toggleDelete = () => {
  showIcon.value = !showIcon.value;
};

const handleCheck = (index: number) => {
  courseCards.value[index].checked = !courseCards.value[index].checked;
};
</script>

<style scoped>
.container {
  position: relative;
}

.delete-text {
  color: var(--color-white-100);
  padding: var(--margin-s2);
}

.contents {
  display: flex;
  flex-direction: column;
  padding: 48px 20px 40px;
  gap: 16px;
}
</style>
