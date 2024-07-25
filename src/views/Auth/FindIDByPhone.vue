<template>
  <div class="find-id-container">
    <span class="find-input">
      <Input
        placeholder="이름을 입력해주세요"
        label="이름"
      />
      <Input
        placeholder="000-0000-0000"
        @input="autoHyphen"
        maxlength="13"
        label="휴대폰 번호"
        message="가입 시 등록한 휴대폰 번호를 입력해주세요"
      />
      <Button
        v-if="!state.verificationSent"
        text="인증번호 받기"
        @click="sendVerificationCode"
        :style="{
          backgroundColor: 'var(--color-button-secondary)',
          color: 'var(--color-button-on-secondary)',
          height: '44px',
          fontSize: '1.4rem',
        }"
      />
      <Input
        v-if="state.verificationSent"
        placeholder="인증번호 입력"
        label="인증번호"
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
import { reactive } from 'vue';
import { autoHyphen } from '@/utils';

const router = useRouter();

const state = reactive({
  verificationSent: false,
});

const sendVerificationCode = () => {
  // 인증번호 전송 로직을 여기에 추가하세요.
  state.verificationSent = true;
};

const nextPage = () => {
  router.push({ name: 'find-id-result' });
};
</script>

<style scoped>
.find-id-container {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
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
