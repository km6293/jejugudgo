<template>
  <div class="signup-id-container">
    <span class="id-text">
      <h1>로그인에 사용할</h1>
      <h1>아이디를 입력해주세요</h1>
    </span>
    <Input placeholder="이메일" />
    <Button
      class="next-button"
      @click="nextPage"
      text="다음"
    />
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/button/Button.vue';
import Input from '@/components/input/Input.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const nextPage = () => {
  router.push({ name: 'signup-password' });
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
  font-family: var(--font-bold);
  color: var(--color-neutral-white);
  font-size: 2.1rem;
  line-height: 3rem;
  margin-bottom: 20px;
}

.next-button {
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
}
</style>
