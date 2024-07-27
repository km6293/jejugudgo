import { defineStore } from 'pinia';
import { reactive, toRefs } from 'vue';

export const useFindPasswordStore = defineStore('findPassword', () => {
  const initialState = {
    password: '',
    confirmPassword: '',
  };

  const state = reactive({ ...initialState });

  const $reset = () => {
    Object.assign(state, initialState);
  };

  return { ...toRefs(state), $reset };
});
