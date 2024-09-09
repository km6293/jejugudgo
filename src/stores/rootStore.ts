import { defineStore } from 'pinia';
import { reactive, toRefs } from 'vue';
import { getFromLocalStorage } from '@/utils';

export const useRootStore = defineStore('root', () => {
  const initialState = {
    showSplash: true,
    showUserGuide: false,
    tabHome: 'course',
    tabWalkTogether: 'find-recruitment',
  };

  const userGuideStatus = getFromLocalStorage('showUserGuide');

  const state = reactive({
    ...initialState,
    showUserGuide:
      userGuideStatus !== null ? userGuideStatus : initialState.showUserGuide,
  });

  const $reset = () => {
    Object.assign(state, initialState);
  };

  return { ...toRefs(state), $reset };
});
