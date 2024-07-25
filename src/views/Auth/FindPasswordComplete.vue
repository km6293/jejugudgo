<template>
  <div class="find-password-complete-container">
    <span class="complete-text">
      <h1>비밀번호 재설정을 완료했어요</h1>
      <h1>새로운 비밀번호로 로그인해주세요</h1>
    </span>

    <Button
      class="next-button"
      @click="nextPage"
      text="다음"
    />
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components';
import { useRouter } from 'vue-router';

const router = useRouter();

const nextPage = () => {
  router.push({ name: 'login' });
};
</script>

<style scoped>
.find-password-complete-container {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.complete-text {
  font-family: var(--font-bold);
  color: var(--color-neutral-white);
  font-size: 2.1rem;
  line-height: 3rem;
  margin-bottom: 20px;
}

.next-button {
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
}
</style>
