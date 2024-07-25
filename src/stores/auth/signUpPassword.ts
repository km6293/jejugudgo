import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSignUpPasswordStore = defineStore('signUpPassword', () => {
  const password = ref('');
  const confirmPassword = ref('');

  return { password, confirmPassword };
});
