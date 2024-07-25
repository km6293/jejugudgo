import { defineStore } from 'pinia';
import { InputState } from '@/components/input/InputTypes';
import { ref } from 'vue';

export const useSignUpIDStore = defineStore('signUpID', () => {
  const email = ref('');
  const inputState = ref<InputState>('default');
  const inputMessage = ref('');

  return {
    email,
    inputState,
    inputMessage,
  };
});
