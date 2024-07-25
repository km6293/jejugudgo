<template>
  <div class="find-password-container">
    <span class="find-input">
      <Input
        placeholder="이름을 입력해주세요"
        label="이름"
      />
      <Input
        placeholder="010-0000-0000"
        label="휴대폰 번호"
        message="가입 시 등록한 휴대폰 번호를 입력해주세요"
      />
      <Button
        text="인증번호 받기"
        :style="{
          backgroundColor: 'var(--color-button-secondary)',
          color: 'var(--color-button-on-secondary)',
          height: '44px',
          fontSize: '1.4rem',
        }"
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
import { Button, Input } from '@/components';
import { useRouter } from 'vue-router';

const router = useRouter();

const nextPage = () => {
  router.push({ name: 'find-password-reset' });
};
</script>

<style scoped>
.find-password-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.find-input {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.next-button {
  margin-top: auto;
  align-self: center;
}
</style>
