<template>
  <div class="signup-password-container">
    <span class="signup-input">
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
import Button from '@/components/button/Button.vue';
import Input from '@/components/input/Input.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const nextPage = () => {
  router.push({ name: 'FindIDResult' });
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
  font-family: 'Pretendard-bold', sans-serif;
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
