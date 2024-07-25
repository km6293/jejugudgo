<template>
  <div class="login-container">
    <div class="logo">
      <LogoIcon />
      <div class="slogan body2-bold">걸음으로 만들어나가는 당신만의 이야기</div>
    </div>
    <form
      class="login-form"
      @submit.prevent="handleLogin"
    >
      <Input
        v-model="email"
        placeholder="이메일"
      />
      <Input
        v-model="password"
        placeholder="비밀번호"
        type="password"
      />
      <Button
        type="submit"
        text="로그인"
      />
      <div class="links">
        <router-link
          to="/signup"
          class="link"
          >회원가입</router-link
        >
        <span class="divider"></span>
        <router-link
          to="/findid/phone"
          class="link"
          >아이디 찾기</router-link
        >
        <span class="divider"></span>
        <router-link
          to="/findpassword/phone"
          class="link"
          >비밀번호 찾기</router-link
        >
      </div>
    </form>
    <div class="sns-login">
      <p class="sns-text body2-regular">SNS 계정으로 3초만에 시작하기</p>
      <Button
        @click="handleGoogleLogin"
        :icon="GoogleIcon"
        text="Google 계정으로 로그인"
        :style="{
          background: 'var(--color-greyscale-600)',
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LogoIcon, GoogleIcon, Button, Input } from '@/components';

const email = ref('');
const password = ref('');

const handleLogin = () => {
  if (!email.value || !password.value) {
    // errorMessage.value = '이메일과 비밀번호를 모두 입력해주세요.';
    return;
  }

  // TODO: 로그인 실패시 문구 추가
  alert(`이메일: ${email.value}\n비밀번호: ${password.value}`);
};

const handleGoogleLogin = () => {
  window.location.href = 'http://localhost:8080/api/v1/oauth/authorize/google';
};
</script>

<style scoped>
.login-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 47.2rem;
  padding: 20px;
  margin: 0 auto;
}

.logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
}

.slogan {
  color: var(--color-neutral-100);
  margin-top: 16px;
}

.login-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
}

.links {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 17px 16px;
  color: #b0b0b0;
  gap: 1rem;
}

.link {
  text-decoration: none;
  color: inherit;
}

.divider {
  width: 1px;
  height: 8px;
  background-color: #b0b0b0;
  margin: 0 8px;
}

.sns-login {
  gap: 8px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-neutral-white);
  margin-top: auto;
  flex: 1;
  justify-content: end;
}

.sns-text {
  font-size: 1.4rem;
}
</style>
