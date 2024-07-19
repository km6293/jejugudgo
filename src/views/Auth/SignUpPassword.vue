<template>
  <div class="signup-password-container">
    <span class="password-text">
      <h1>로그인에 사용할</h1>
      <h1>비밀번호를 입력해주세요</h1>
    </span>
    <span class="signup-input">
      <Input
        placeholder="비밀번호"
        type="password"
        message="This is a help message."
      />
      <Input
        placeholder="비밀번호 재확인"
        type="password"
        message="This is a help message."
      />
    </span>
    <Button
      class="next-button"
      @click="nextPage"
      text="다음"
    />
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/button/Button.vue';
import Input from '@/components/input/Input.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const nextPage = () => {
  router.push({ name: 'signup-verification' });
};
</script>

<style scoped>
.signup-password-container {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
}

.signup-input {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.password-text {
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
