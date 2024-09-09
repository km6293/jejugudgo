<template>
  <div>
    <div class="course-container">
      <Tags />
      <div
        v-for="(item, index) of 5"
        :key="item"
        @click="goToDetailPage(index)"
      >
        <RecruitmentCard />
      </div>
    </div>
    <div class="create-course">
      <div
        class="button-inner"
        @click="goToRecruitmentPage"
      >
        <EditIcon color="#1B1B1B" />
        <div class="course-button body2-bold">모집하기</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Tags, EditIcon } from '@/components';
import { RecruitmentCard } from './components';
import { useRouter } from 'vue-router';

const router = useRouter();

const goToDetailPage = (id: number) => {
  router.push({ name: 'recruitmentDetail', params: { id: String(id) } });
};

const goToRecruitmentPage = () => {
  router.push({ name: 'createRecruitment' });
};
</script>

<style scoped>
.course-container {
  display: flex;
  gap: var(--margin-m);
  padding: 40px 20px 0 20px;
  flex-direction: column;
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
