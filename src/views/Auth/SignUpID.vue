<template>
  <div class="signup-id-container">
    <span class="id-text heading3-bold">
      <h1>로그인에 사용할</h1>
      <h1>아이디를 입력해주세요</h1>
    </span>
    <Input
      placeholder="이메일"
      v-model="email"
      :state="inputState"
      :message="inputMessage"
    />
    <Button
      class="next-button"
      @click="nextPage"
      :disabled="inputState !== 'success'"
      text="다음"
    />
  </div>
</template>

<script setup lang="ts">
import { Button, Input } from '@/components';
import { validateEmail } from '@/utils';
import { checkId } from '@/apis/authorityFeature';
import { watch } from 'vue';
import { useRouter } from 'vue-router';
import { useSignUpIDStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';

const signUpIDStore = useSignUpIDStore();
const { email, inputState, inputMessage } = storeToRefs(signUpIDStore);

const router = useRouter();

watch(email, async (newEmail) => {
  if (newEmail === '') {
    inputState.value = 'default';
    inputMessage.value = '';
  } else if (validateEmail(newEmail)) {
    inputState.value = 'success';
    inputMessage.value = '';
  } else {
    inputState.value = 'error';
    inputMessage.value = '이메일 형식이 올바르지 않습니다.';
  }
});

const nextPage = async () => {
  if (inputState.value === 'success') {
    try {
      await checkId(email.value);
      router.push({ name: 'signup-password' });
    } catch (error) {
      const emailError = error as { errorCode: string | null };
      if (emailError.errorCode == 'INVALID_VALUE_04') {
        inputState.value = 'error';
        inputMessage.value = '이미 계정이 존재합니다.';
      } else {
        inputState.value = 'error';
        inputMessage.value = '이메일 확인 중 오류가 발생했습니다.';
      }
    }
  }
};
</script>

<style scoped>
.signup-id-container {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.id-text {
  color: var(--color-neutral-white);
  margin-bottom: 20px;
}

.next-button {
  margin-top: auto;
  align-self: center;
}
</style>
