import { defineStore } from 'pinia';
import { InputState } from '@/components/input/InputTypes';
import { reactive, toRefs } from 'vue';

export const useSignUpIDStore = defineStore('signUpID', () => {
  const initialState = {
    email: '',
    inputState: 'default' as InputState,
    inputMessage: '',
  };

  const state = reactive({ ...initialState });

  const $reset = () => {
    Object.assign(state, initialState);
  };

  return {
    ...toRefs(state),
    $reset,
  };
});
