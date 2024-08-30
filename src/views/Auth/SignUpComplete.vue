<template>
  <div class="signup-complete-container">
    <span class="complete-text">
      <h1>회원가입이 완료되었어요!</h1>
      <h1>이제 제주도를 걸어보러 가실까요?</h1>
    </span>

    <div class="icon-wrapper">
      <SignUpIcon class="signup-icon" />
    </div>

    <Button
      @click="nextPage"
      text="다음"
    />
  </div>
</template>

<script setup lang="ts">
import { Button, SignUpIcon } from '@/components';
import { useRouter } from 'vue-router';

const router = useRouter();

const nextPage = () => {
  router.push({ name: 'login' });
};
</script>

<style scoped>
.signup-complete-container {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
}

.complete-text {
  text-align: left;
  font-family: var(--font-bold);
  color: var(--color-neutral-white);
  font-size: 2.1rem;
  line-height: 3rem;
}

.icon-wrapper {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}
</style>
