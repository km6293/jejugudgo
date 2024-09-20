import { defineStore } from 'pinia';
import { reactive, toRefs } from 'vue';

export const useUserStore = defineStore('user', () => {
  const initialState = {
    email: '',
    id: 0,
    name: '',
    nickname: '',
    numberTag: 0,
    profileImageUrl: '',
    userRole: '',
  };

  const state = reactive({
    ...initialState,
  });

  const $reset = () => {
    Object.assign(state, initialState);
  };

  return { ...toRefs(state), $reset };
});
