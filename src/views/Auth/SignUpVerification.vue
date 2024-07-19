<template>
  <div class="signup-verification-container">
    <span class="verification-text">
      <h1>본인인증을 진행해주세요</h1>
      <h2>안전한 서비스 사용을 위해 딱 한 번만 본인인증을 진행해요.</h2>
    </span>
    <span class="signup-input">
      <Input placeholder="이름" />
      <div class="phone-verification">
        <Input placeholder="000-0000-000" />
        <Button
          text="인증번호 받기"
          :style="{ width: '200px' }"
        />
      </div>
      <Input placeholder="text@gmai.com" />
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
  router.push({ name: 'signup-complete' });
};
</script>

<style scoped>
.signup-verification-container {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.signup-input {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.phone-verification {
  display: flex;
  gap: 8px;
  align-items: center;
}

.verification-text {
  font-family: var(--font-bold);
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  h1 {
    color: var(--color-neutral-white);
    font-size: 2.1rem;
    line-height: 3rem;
  }

  h2 {
    color: var(--color-neutral-500);
    font-size: 1.4rem;
    line-height: 2rem;
  }
}

.next-button {
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
}
</style>
