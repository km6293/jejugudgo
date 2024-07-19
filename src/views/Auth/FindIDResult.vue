<template>
  <div class="find-id-result-container">
    <div class="find-id-result-text">
      <h1>회원님의 휴대전화로</h1>
      <h1>가입된 아이디가 2개 있습니다</h1>
    </div>
    <div>
      <RadioButton
        v-model="selectedOption"
        :options="radioOptions"
        name="exampleRadioGroup"
      />
    </div>
    <div class="find-password">
      <span class="find-password-text">비밀번호가 기억나지 않으세요?</span>
      <span class="find-password-link">비밀번호 찾기</span>
    </div>
    <Button
      class="next-button"
      @click="nextPage"
      text="다음"
    />
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/button/Button.vue';
import { useRouter } from 'vue-router';
import RadioButton from '@/components/RadioButton.vue';
import { ref } from 'vue';

const router = useRouter();

const nextPage = () => {
  router.push({ path: '/findpassword/phone' });
};

const selectedOption = ref('');
const radioOptions = ref([
  { label: 'Option 1', value: 'option1', description: 'This is option 1' },
  { label: 'Option 2', value: 'option2', description: 'This is option 2' },
  { label: 'Option 3', value: 'option3', description: 'This is option 3' },
]);
</script>

<style scoped>
.find-id-result-container {
  margin-top: 40px;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: space-between;
}

.find-id-result-text {
  font-family: var(--font-bold);
  color: var(--color-neutral-white);
  font-size: 2.1rem;
  line-height: 3rem;
  margin-bottom: 20px;
}

.find-password {
  font-family: var(--font-regular);
  font-size: 1.2rem;
  margin-bottom: 20px;
  margin-top: auto;
  align-self: center;
}

.find-password-text {
  color: var(--color-neutral-100);
  margin-right: 1rem;
}

.find-password-link {
  color: var(--color-primary-500);
}

.next-button {
  align-self: center;
}
</style>
