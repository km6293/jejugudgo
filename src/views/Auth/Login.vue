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
        :message="message"
        :state="loginState"
      />
      <Button
        type="submit"
        text="로그인"
        :disabled="isLocked"
      />

      <div class="links">
        <router-link
          to="/signup"
          class="link"
        >
          회원가입
        </router-link>
        <span class="divider"></span>
        <router-link
          to="/findid/phone"
          class="link"
        >
          아이디 찾기
        </router-link>
        <span class="divider"></span>
        <router-link
          to="/findpassword/phone"
          class="link"
        >
          비밀번호 찾기
        </router-link>
      </div>
    </form>
    <div class="sns-login">
      <p class="sns-text body2-regular">SNS 계정으로 3초만에 시작하기</p>
      <Button
        @click="handleGoogleLogin"
        :icon="GoogleIcon"
        text="Google 계정으로 로그인"
        :style="{
          background: 'var(--color-neutral-700)',
          color: 'var(--color-neutral-100)',
        }"
      />
      <Button
        @click="handleKakaoLogin"
        :icon="KakaoIcon"
        text="카카오 로그인"
        :style="{
          background: '#FEE500',
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { LogoIcon, GoogleIcon, Button, Input, KakaoIcon } from '@/components';
import { login, userInfo } from '@/apis/userFeature';
import { storeToRefs } from 'pinia';
import { useLoginStore } from '@/stores/auth';
import router from '@/router';
import { ILoginRequest } from '@/types/api';
import { useUserStore } from '@/stores/user/userState';
import { IUserStateType } from '@/stores/user/type';

const loginStore = useLoginStore();
const userStore = useUserStore();
const { email, password, message, loginFailCount, loginState, isLocked } =
  storeToRefs(loginStore);

const handleLogin = async () => {
  const data: ILoginRequest = {
    email: email.value,
    password: password.value,
  };

  if (!email.value || !password.value) {
    message.value = '이메일과 비밀번호를 모두 입력해주세요.';
    loginState.value = 'error';
    return;
  }

  const status = await login(data);

  if (status === 'AUTH_01' || status === 'AUTH_02') {
    loginFailCount.value += 1;
    loginState.value = 'error';
    message.value = `로그인 5회 실패 시, 10분 간 입력이 제한됩니다. (${loginFailCount.value}/5)`;
  }
  if (status === 200) {
    const userInfoData = await userInfo();
    setUserInfo(userInfoData);

    loginFailCount.value = 0;
    loginState.value = 'default';
    message.value = '';
    await router.push({ path: '/home' });
  }
};

const setUserInfo = (data: IUserStateType) => {
  userStore.email = data.email;
  userStore.id = data.id;
  userStore.name = data.name;
  userStore.nickname = data.nickname;
  userStore.numberTag = data.numberTag;
  userStore.profileImageUrl = data.profileImageUrl;
  userStore.userRole = data.userRole;
};

const handleGoogleLogin = () => {
  window.location.href = `${process.env.VUE_APP_BASE_API}/api/v1/oauth/authorize/google`;
};

const handleKakaoLogin = () => {
  window.location.href = `${process.env.VUE_APP_BASE_API}/api/v1/oauth/authorize/kakao`;
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
  color: var(--color-neutral-100);
  font-size: 1.2rem;
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
