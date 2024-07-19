<template>
  <div class="find-id-email-container">
    <span class="find-id-email-input">
      <Input
        placeholder="이름을 입력해주세요"
        label="이름"
      />
      <Input
        placeholder="010-0000-0000"
        label="이메일"
        message="이메일 주소를 입력해주세요"
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
  router.push({ name: 'find-id-result' });
};
</script>

<style scoped>
.find-id-email-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.find-id-email-input {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.next-button {
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
}
</style>
