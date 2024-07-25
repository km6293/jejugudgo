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
import { watch } from 'vue';
import { useRouter } from 'vue-router';
import { useSignUpIDStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';

const signUpIDStore = useSignUpIDStore();
const { email, inputState, inputMessage } = storeToRefs(signUpIDStore);

const router = useRouter();

watch(email, (newEmail) => {
  if (newEmail === '') {
    inputState.value = 'default';
    inputMessage.value = '';
  } else if (validateEmail(newEmail)) {
    inputState.value = 'success';
    inputMessage.value = '';
    email.value = newEmail;
  } else {
    inputState.value = 'error';
    inputMessage.value = '이메일 형식이 올바르지 않습니다.';
  }
});

const nextPage = () => {
  if (inputState.value === 'success') {
    router.push({ name: 'signup-password' });
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
