<template>
  <div class="terms-container">
    <span class="terms-text">
      <h1>제주걷고 서비스 약관에</h1>
      <h1>동의해주세요</h1>
    </span>
    <span class="terms-check">
      <label>
        <input
          type="checkbox"
          v-model="allChecked"
          @change="toggleAll"
        />
        <span>모두 동의</span>
      </label>
      <span class="divider"></span>
      <label>
        <input
          type="checkbox"
          v-model="terms.service"
          @change="checkAllChecked"
        />
        <span>[필수] 서비스 이용약관</span>
      </label>
      <label>
        <input
          type="checkbox"
          v-model="terms.location"
          @change="checkAllChecked"
        />
        <span>[필수] 위치 기반 서비스 이용약관</span>
      </label>
      <label>
        <input
          type="checkbox"
          v-model="terms.marketing"
          @change="checkAllChecked"
        />
        <span>[선택] 마케팅 수신 동의</span>
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
    router.push({ name: 'SignUpID' });
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
  box-sizing: border-box;
}

.terms-text {
  font-family: 'Pretendard-bold', sans-serif;
  color: var(--color-neutral-white);
  font-size: 2.1rem;
  line-height: 3rem;
}

.divider {
  border-top: 1px solid var(--color-neutral-500);
  width: 100%;
  display: block;
  margin-bottom: 5px;
}

.terms-check {
  margin-top: 20px;
}

label {
  display: block;
  margin-bottom: 10px;
  color: var(--color-neutral-500);
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
