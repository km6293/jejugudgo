<template>
  <div class="find-password-email-container">
    <span class="find-password-email-input">
      <Input
        placeholder="이름을 입력해주세요"
        label="이름"
        v-model="name"
        :state="nameState"
      />
      <Input
        placeholder="example@naver.com"
        label="이메일"
        v-model="email"
        :state="emailState"
        message="이메일 주소를 입력해주세요"
      />
      <Button
        v-if="!state.verificationSent && !state.isTimerActive"
        text="인증번호 받기"
        :style="{
          backgroundColor: 'var(--color-button-secondary)',
          color: 'var(--color-button-on-secondary)',
          height: '44px',
          fontSize: '1.4rem',
        }"
        @click="sendVerificationEmail"
      />
      <Input
        v-if="state.verificationSent"
        placeholder="인증번호 입력"
        label="인증번호"
        v-model="authCode"
        :state="codeState"
        :message="codeMessage"
      />
      <ResentTimer
        v-if="state.verificationSent && !state.verificationExpired"
        :verificationStart="state.verificationStart"
        :handleTimeout="handleTimerEnd"
        @resendSms="sendVerificationEmail"
      />
    </span>
    <br />
    <br />
    <br />
    <Button
      v-if="state.verificationSent"
      class="next-button"
      @click="checkVerificationCode"
      text="다음"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue';
import { useRouter } from 'vue-router';
import { sendEmail, sendEmailLater } from '@/apis/authorityFeature/index';
import { Button, Input, ResentTimer } from '@/components';

const router = useRouter();

const state = reactive({
  verificationSent: false,
  verificationExpired: false,
  verificationStart: false,
  timerKey: 0, // Key to force re-render of Timer
});

const name = ref('');
const email = ref('');
const authCode = ref('');
const userId = ref('');

const nameState = ref('default');
const emailState = ref('default');
const codeState = ref('default');
const codeMessage = ref('');

// Function to handle the expiration of the timer
const handleTimerEnd = () => {
  state.verificationExpired = true;
  state.verificationStart = false;
};

// Function to send verification email
const sendVerificationEmail = async () => {
  if (name.value.length === 0) {
    nameState.value = 'error';
    return;
  }
  nameState.value = 'default';

  if (!validateEmail(email.value)) {
    emailState.value = 'error';
    return;
  }
  emailState.value = 'default';

  try {
    await sendEmail(email.value);
    state.verificationSent = true;
    state.verificationStart = true;
    state.timerKey += 1; // Force re-render
  } catch (error) {
    const emailError = error as { errorCode: string | null };
    if (emailError.errorCode) {
      emailState.value = 'error';
    }
  }
};

// Function to check the verification code
const checkVerificationCode = async () => {
  if (!state.verificationSent) return;

  try {
    const response = await sendEmailLater(email.value, authCode.value);
    userId.value = response.id ?? '';
    console.log(userId.value);

    router.push({
      name: 'find-password-reset',
      query: {
        name: name.value,
        email: email.value,
        userId: userId.value,
      },
    });
  } catch (error) {
    const smsError = error as { errorCode: string | null };
    if (
      smsError.errorCode === 'AUTH_03' ||
      smsError.errorCode === 'INVALID_VALUE_02'
    ) {
      codeState.value = 'error';
      codeMessage.value = '인증번호가 틀렸습니다.';
    }
  }
};

// Function to validate email
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Watch for changes in verificationStart to manage timer state
watch(
  () => state.verificationStart,
  (newVal) => {
    if (newVal) {
      state.timerKey += 1; // Force re-render
    }
  }
);
</script>

<style scoped>
.find-password-email-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.find-password-email-input {
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
