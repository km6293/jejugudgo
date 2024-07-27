import { InputState } from '@/components/input/InputTypes';
import { defineStore } from 'pinia';
import { reactive, toRefs, watch } from 'vue';

export const useLoginStore = defineStore('login', () => {
  const initialState = {
    email: '',
    password: '',
    message: '',
    loginState: 'default' as InputState,
    loginFailCount: 0,
    isLocked: false,
  };

  const state = reactive({ ...initialState });

  const $reset = () => {
    Object.assign(state, initialState);
  };

  const lockAccount = () => {
    state.isLocked = true;
    state.loginFailCount = 0;

    setTimeout(() => {
      state.isLocked = false;
    }, 10 * 60 * 1000);
  };

  watch(
    () => state.loginFailCount,
    (newCount) => {
      if (newCount >= 5) {
        lockAccount();
      }
    }
  );

  return {
    ...toRefs(state),
    $reset,
  };
});
