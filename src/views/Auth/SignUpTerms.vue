<template>
  <div class="terms-container">
    <span class="terms-text">
      <h1>제주걷고 서비스 약관에</h1>
      <h1>동의해주세요</h1>
    </span>
    <span class="terms-check-container">
      <label>
        <div
          class="terms-check"
          @click="toggleAll"
        >
          <CheckActive2Icon v-if="allChecked" />
          <Check2Icon v-else />
          <span>모두 동의</span>
        </div>
      </label>
      <span class="divider"></span>
      <label>
        <div
          class="terms-check"
          @click="toggleService"
        >
          <CheckActive1Icon v-if="terms.service" />
          <Check1Icon v-else />
          <span>[필수] 서비스 이용약관</span>
        </div>
      </label>
      <label>
        <div
          class="terms-check"
          @click="toggleLocation"
        >
          <CheckActive1Icon v-if="terms.location" />
          <Check1Icon v-else />
          <span>[필수] 위치 기반 서비스 이용약관</span>
        </div>
      </label>
      <label>
        <div
          class="terms-check"
          @click="toggleMarketing"
        >
          <CheckActive1Icon v-if="terms.marketing" />
          <Check1Icon v-else />
          <span>[선택] 마케팅 수신 동의</span>
        </div>
      </label>
    </span>
    <Button
      class="next-button"
      :disabled="!allRequiredChecked"
      @click="nextPage"
      text="다음"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import Button from '@/components/button/Button.vue';
import { useRouter } from 'vue-router';
import {
  Check1Icon,
  Check2Icon,
  CheckActive1Icon,
  CheckActive2Icon,
} from '@/components/icons/basic';

const router = useRouter();

const allChecked = ref(false);
const terms = ref({
  service: false,
  location: false,
  marketing: false,
});

const allRequiredChecked = ref(false);

watch(
  () => [terms.value.service, terms.value.location],
  () => {
    allRequiredChecked.value = terms.value.service && terms.value.location;
  },
  { immediate: true }
);

const toggleAll = () => {
  const newValue = !allChecked.value;
  allChecked.value = newValue;
  terms.value.service = newValue;
  terms.value.location = newValue;
  terms.value.marketing = newValue;
};

const checkAllChecked = () => {
  allChecked.value =
    terms.value.service && terms.value.location && terms.value.marketing;
};

const nextPage = () => {
  if (allRequiredChecked.value) {
    router.push({ name: 'signup-id' });
  }
};

const toggleService = () => {
  terms.value.service = !terms.value.service;
  checkAllChecked();
};

const toggleLocation = () => {
  terms.value.location = !terms.value.location;
  checkAllChecked();
};

const toggleMarketing = () => {
  terms.value.marketing = !terms.value.marketing;
  checkAllChecked();
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
  font-family: var(--font-bold);
  color: var(--color-neutral-white);
  font-size: 2.1rem;
  line-height: 3rem;
}

.divider {
  border-top: 1px solid var(--color-neutral-500);
  display: block;
}

.terms-check-container {
  margin-top: 20px;
}

.terms-check {
  display: flex;
  gap: 1rem;
  align-items: center;
}

label {
  display: block;
  color: var(--color-neutral-500);
  height: 40px;
  align-content: center;
  margin-bottom: 4px;
}

input[type='checkbox'] {
  margin-right: 10px;
}

input[type='checkbox']:checked + span {
  color: var(--color-neutral-100);
}

.next-button {
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
}
</style>
