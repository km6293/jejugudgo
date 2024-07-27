<template>
  <div class="terms-container">
    <div class="terms-text heading3-bold">
      <h1>제주걷고 서비스 약관에</h1>
      <h1>동의해주세요</h1>
    </div>
    <div class="terms-check-container">
      <label
        @click="() => toggleAllTerms(!allChecked)"
        class="terms-check"
      >
        <Check2Icon :active="allChecked" />
        <span
          :class="['terms-check-text', { active: allChecked }]"
          class="body2-medium"
          >모두 동의</span
        >
      </label>
      <div class="divider"></div>
      <label
        @click="() => toggleTerm('service')"
        class="terms-check"
      >
        <Check1Icon :active="service" />
        <span
          :class="['terms-check-text', { active: service }]"
          class="body2-medium"
          >[필수] 서비스 이용약관</span
        >
      </label>
      <label
        @click="() => toggleTerm('location')"
        class="terms-check"
      >
        <Check1Icon :active="location" />
        <span
          :class="['terms-check-text', { active: location }]"
          class="body2-medium"
          >[필수] 위치 기반 서비스 이용약관</span
        >
      </label>
      <label
        @click="() => toggleTerm('marketing')"
        class="terms-check"
      >
        <Check1Icon :active="marketing" />
        <span
          :class="['terms-check-text', { active: marketing }]"
          class="body2-medium"
          >[선택] 마케팅 수신 동의</span
        >
      </label>
    </div>
    <Button
      class="next-button"
      :disabled="!allRequiredChecked"
      @click="nextPage"
      text="다음"
    />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useSignUpTermsStore } from '@/stores/auth/signUpTerms';
import { Check1Icon, Check2Icon, Button } from '@/components';
import { storeToRefs } from 'pinia';

const router = useRouter();
const signUpTermsStore = useSignUpTermsStore();
const { service, location, marketing, allChecked, allRequiredChecked } =
  storeToRefs(signUpTermsStore);
const { toggleTerm, toggleAllTerms } = signUpTermsStore;

const nextPage = () => {
  if (allRequiredChecked) {
    router.push({ name: 'signup-id' });
  }
};
</script>

<style scoped>
.terms-container {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
}
.terms-text {
  color: var(--color-neutral-white);
}
.divider {
  border-top: 1px solid var(--color-neutral-500);
  margin-bottom: 4px;
}
.terms-check-container {
  margin-top: 20px;
}
.terms-check {
  display: flex;
  gap: 1rem;
  align-items: center;
  height: 40px;
  margin-bottom: 4px;
}
.terms-check-text {
  color: var(--color-neutral-500);
}
.terms-check-text.active {
  color: var(--color-neutral-100);
}
.next-button {
  margin-top: auto;
  align-self: center;
}
</style>
