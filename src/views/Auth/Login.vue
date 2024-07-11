<template>
  <div class="login-container">
    <div class="logo">
      <div class="slogan">슬로건</div>
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
          to="/SignUp"
          class="link"
          >회원가입</router-link
        >
        <span class="divider"></span>
        <router-link
          to="/FindID"
          class="link"
          >아이디 찾기</router-link
        >
        <span class="divider"></span>
        <router-link
          to="/find-password"
          class="link"
          >비밀번호 찾기</router-link
        >
      </div>
    </form>
    <div class="sns-login">
      <p class="sns-text">SNS 계정으로 3초만에 시작하기</p>
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
import Input from '@/components/input/Input.vue';
import Button from '@/components/button/Button.vue';
import { ref } from 'vue';
import { GoogleIcon } from '@/components/icons/basic';

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
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
}

.slogan {
  width: 24rem;
  height: 95px;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}

.login-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.links {
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  padding: 17px 16px;
  width: 100%;
  color: #b0b0b0;
  gap: 1rem;
  max-width: 43.2rem;
}

.link {
  text-decoration: none;
  color: inherit;
  font-size: 1.2rem;
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
}

.sns-text {
  font-size: 1.4rem;
}
</style>
