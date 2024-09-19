<template>
  <div class="find-password-container">
    <span class="find-input">
      <Input
        placeholder="이름을 입력해주세요"
        label="이름"
        v-model="name"
        :state="nameState"
      />
      <Input
        placeholder="010-0000-0000"
        @input="autoHyphen"
        maxlength="13"
        label="휴대폰 번호"
        v-model="phoneNumber"
        :state="inputState"
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
        v-model="verificationCode"
        :state="codeState"
        :message="codeMessage"
      />
      <ResentTimer
        v-if="state.verificationSent"
        :verificationStart="state.verificationStart"
        :handleTimeout="handleTimeout"
        @resendSms="sendVerificationCode"
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
import { Button, Input, ResentTimer } from '@/components';
import { useRouter } from 'vue-router';
import { reactive, ref } from 'vue';
import { sendSmsLater, checkSms, findUserId } from '@/apis/authorityFeature';
import { useSignUpIDStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';
import { autoHyphen, validatePhoneNumber } from '@/utils';

const router = useRouter();
const signUpIDStore = useSignUpIDStore();
const { inputState, inputMessage } = storeToRefs(signUpIDStore);

const state = reactive({
  verificationSent: false,
  verificationExpired: false,
  verificationStart: null, // 타이머 시작 여부
});

const name = ref('');
const nameState = ref('default');
const phoneNumber = ref('');
const phoneNumberState = ref('default');
const verificationCode = ref('');
const codeState = ref('default');
const codeMessage = ref('');
const userId = ref('');

const handleTimeout = () => {
  state.verificationExpired = true;
  state.verificationSent = false;
  state.verificationStart = null;
};

const sendVerificationCode = async () => {
  if (name.value.length === 0) {
    nameState.value = 'error';
    return;
  }
  nameState.value = 'default';

  const cleanedPhoneNumber = phoneNumber.value.replace(/-/g, '');
  if (!validatePhoneNumber(cleanedPhoneNumber)) {
    phoneNumberState.value = 'error';
    return;
  }
  phoneNumberState.value = 'default';

  try {
    await sendSmsLater(name.value, cleanedPhoneNumber);
    state.verificationSent = true;
    state.verificationStart = Date.now();
    inputState.value = 'default';
    inputMessage.value = '';
  } catch (error) {
    const smsError = error as { errorCode: string | null };
    if (smsError.errorCode === 'INVALID_VALUE_04') {
      inputState.value = 'error';
      inputMessage.value = '이미 계정이 존재합니다.';
    } else if (smsError.errorCode === 'INVALID_VALUE_01') {
      inputState.value = 'error';
      inputMessage.value = '휴대폰 번호를 정확히 입력해주세요.';
    }
  }
};

const checkVerificationCode = async () => {
  if (!state.verificationSent) return;

  try {
    const cleanedPhoneNumber = phoneNumber.value.replace(/-/g, '');
    await checkSms(name.value, cleanedPhoneNumber, verificationCode.value);
    const response = await findUserId(name.value, cleanedPhoneNumber);

    userId.value = response[0]?.id ?? '';

    router.push({
      name: 'find-password-reset',
      query: {
        name: name.value,
        phoneNumber: cleanedPhoneNumber,
        userId: userId.value,
      },
    });
  } catch (error) {
    const smsError = error as { errorCode: string | null };
    if (smsError.errorCode === 'AUTH_03') {
      codeState.value = 'error';
      codeMessage.value = '인증번호가 틀렸습니다.';
    }
  }
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
