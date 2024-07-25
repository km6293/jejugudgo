<template>
  <div class="signup-password-container">
    <span class="password-text heading3-bold">
      <h1>로그인에 사용할</h1>
      <h1>비밀번호를 입력해주세요</h1>
    </span>
    <span class="signup-input">
      <Input
        placeholder="비밀번호"
        type="password"
        v-model="password"
      />
      <div class="password-conditions">
        <p
          :class="[
            'caption-regular',
            'password-conditions-check',
            { valid: hasUppercase(password) },
          ]"
        >
          대소문자
          <Check1Icon
            :active="hasUppercase(password)"
            width="1.3rem"
            height="0.917rem"
          />
        </p>

        <p
          :class="[
            'caption-regular',
            'password-conditions-check',
            { valid: hasNumber(password) },
          ]"
        >
          숫자
          <Check1Icon
            :active="hasNumber(password)"
            width="1.3rem"
            height="0.917rem"
          />
        </p>
        <p
          :class="[
            'caption-regular',
            'password-conditions-check',
            { valid: hasSpecialChar(password) },
          ]"
        >
          특수문자
          <Check1Icon
            :active="hasSpecialChar(password)"
            width="1.3rem"
            height="0.917rem"
          />
        </p>
        <p
          :class="[
            'caption-regular',
            'password-conditions-check',
            { valid: isValidLength(password) },
          ]"
        >
          8-20자 이내
          <Check1Icon
            :active="isValidLength(password)"
            width="1.3rem"
            height="0.917rem"
          />
        </p>
      </div>
      <Input
        placeholder="비밀번호 재확인"
        type="password"
        v-model="confirmPassword"
      />
      <div class="password-conditions">
        <p
          :class="[
            'caption-regular',
            'password-conditions-check',
            { valid: passwordsMatch(password, confirmPassword) },
          ]"
        >
          비밀번호 일치
          <Check1Icon
            :active="passwordsMatch(password, confirmPassword)"
            width="1.3rem"
            height="0.917rem"
          />
        </p>
      </div>
    </span>
    <Button
      class="next-button"
      @click="nextPage"
      :disabled="!canProceed"
      text="다음"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { Check1Icon, Input, Button } from '@/components';
import { useSignUpPasswordStore } from '@/stores/auth/signUpPassword';
import {
  hasUppercase,
  hasNumber,
  hasSpecialChar,
  isValidLength,
  passwordsMatch,
} from '@/utils';
import { storeToRefs } from 'pinia';

const router = useRouter();

const signUpPasswordStore = useSignUpPasswordStore();
const { password, confirmPassword } = storeToRefs(signUpPasswordStore);

const canProceed = computed(
  () =>
    hasUppercase(password.value) &&
    hasNumber(password.value) &&
    hasSpecialChar(password.value) &&
    isValidLength(password.value) &&
    passwordsMatch(password.value, confirmPassword.value)
);

const nextPage = () => {
  if (canProceed.value) {
    router.push({ name: 'signup-verification' });
  }
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
  gap: 8px;
}

.password-text {
  color: var(--color-neutral-white);
  margin-bottom: 20px;
}

.password-conditions {
  display: flex;
  gap: 12px;
  margin-bottom: 8px;
}

.password-conditions-check {
  color: var(--color-greyscale-500);
}

.password-conditions-check.valid {
  color: var(--color-text-primary);
}

.next-button {
  margin-top: auto;
  align-self: center;
}
</style>
