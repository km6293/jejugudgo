<template>
  <div class="signup-verification-container">
    <span class="verification-text">
      <h1 class="heading3-bold">본인인증을 진행해주세요</h1>
      <h2 class="body2-regular">
        안전한 서비스 사용을 위해 딱 한 번만 본인인증을 진행해요.
      </h2>
    </span>
    <span class="signup-input">
      <Input
        placeholder="이름"
        :state="nameState"
        v-model="name"
      />
      <div class="phone-verification">
        <Input
          placeholder="000-0000-0000"
          @input="autoHyphen"
          maxlength="13"
          v-model="phoneNumber"
          :state="phoneNumberState"
        />
        <Button
          text="인증번호 받기"
          :style="{
            width: '200px',
            height: '44px',
            backgroundColor: 'var(--color-button-secondary)',
            color: 'var(--color-button-on-secondary)',
            fontSize: '1.4rem',
          }"
          @click="sendCode"
        />
      </div>
      <Input
        placeholder="인증번호 입력"
        v-model="code"
        :state="codeState"
        :message="codeMessege"
      />
    </span>

    <ResentTimer
      :verificationStart="state.verificationStart"
      :handleTimeout="handleTimeout"
      @resendSms="sendCode"
    />

    <Button
      class="next-button"
      @click="nextPage"
      text="확인"
    />
  </div>
</template>

<script setup lang="ts">
import { Button, Input, ResentTimer } from '@/components';
import { useRouter } from 'vue-router';
import { reactive } from 'vue';
import {
  useSignUpIDStore,
  useSignUpPasswordStore,
  useSignUpVerificationStore,
} from '@/stores/auth';
import { autoHyphen, validatePhoneNumber } from '@/utils';
import { storeToRefs } from 'pinia';
import { sendSms, checkSms } from '@/apis/authorityFeature';
import { signUp } from '@/apis/userFeature';

const router = useRouter();

const signUpVerificationStore = useSignUpVerificationStore();
const {
  name,
  nameState,
  phoneNumber,
  phoneNumberState,
  code,
  codeState,
  codeMessege,
  cleanPhoneNumber,
} = storeToRefs(signUpVerificationStore);

const signUpIDStore = useSignUpIDStore();
const { email } = storeToRefs(signUpIDStore);

const signUpPasswordStore = useSignUpPasswordStore();
const { password } = storeToRefs(signUpPasswordStore);

const state = reactive({
  verificationStart: false,
  verificationExpired: false,
});

const sendCode = async () => {
  try {
    if (name.value.length === 0) {
      nameState.value = 'error';
      return;
    }
    nameState.value = 'default';
    if (!validatePhoneNumber(cleanPhoneNumber.value)) {
      phoneNumberState.value = 'error';
      return;
    }
    phoneNumberState.value = 'default';

    state.verificationStart = true;
    state.verificationExpired = false;
    await sendSms(name.value, cleanPhoneNumber.value);
  } catch (error) {
    const smsError = error as { errorCode: string | null };
    if (smsError.errorCode === 'INVALID_VALUE_04') {
      codeState.value = 'error';
      codeMessege.value = '이미 계정이 존재합니다.';
    }
  }
};

const handleTimeout = () => {
  codeState.value = 'error';
  codeMessege.value = '인증시간이 만료되었습니다.';
  state.verificationExpired = true;
};

const nextPage = async () => {
  if (state.verificationExpired) {
    return;
  }

  try {
    await checkSms(name.value, cleanPhoneNumber.value, code.value);
    await signUp(
      email.value,
      password.value,
      name.value,
      cleanPhoneNumber.value
    );
    router.push({ name: 'signup-complete' });
  } catch (error) {
    const smsError = error as { errorCode: string | null };
    if (smsError.errorCode === 'AUTH_03') {
      codeState.value = 'error';
      codeMessege.value = '인증번호가 틀렸습니다.';
    }
  }
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
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  h1 {
    color: var(--color-neutral-white);
  }

  h2 {
    color: var(--color-neutral-500);
  }
}

.resend-timer-container {
  margin-top: 8px;
  height: 40px;
  display: flex;
  font-size: 1.2rem;
  color: var(--color-neutral-100);
  align-items: center;
  justify-content: space-between;
}

.resent {
  display: flex;
  align-items: center;
  gap: 4px;
}

.next-button {
  margin-top: auto;
  align-self: center;
}
</style>
