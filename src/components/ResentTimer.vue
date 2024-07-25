<template>
  <div
    class="resend-timer-container"
    v-if="props.verificationStart"
  >
    <div class="resent">
      <ReturnIcon />
      <div
        class="caption-bold"
        @click="resendCode"
        :disabled="state.startTime > 0"
      >
        인증번호 재발송
      </div>
    </div>
    <Timer
      :startTime="state.startTime"
      :onTimeout="handleTimeout"
      :key="state.timerKey"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, reactive, defineEmits } from 'vue';
import { ReturnIcon } from '@/components';
import { Timer } from '@/components';

const emits = defineEmits(['resendSms']);

const state = reactive({
  startTime: 180,
  timerKey: 0,
});

const props = defineProps<{
  verificationStart: boolean;
  handleTimeout: () => void;
}>();

const resendCode = async () => {
  state.startTime = 180;
  state.timerKey += 1;
  emits('resendSms');
};
</script>

<style scoped>
.resend-timer-container {
  margin-top: 8px;
  height: 40px;
  display: flex;
  font-size: 1.2rem;
  color: var(--color-neutral-100);
  align-items: center;
  justify-content: space-between;
}

.resent {
  display: flex;
  align-items: center;
  gap: 4px;
}
</style>
