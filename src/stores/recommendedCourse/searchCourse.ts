import { defineStore } from 'pinia';
import { reactive, toRefs } from 'vue';

export const useSearchCourseStore = defineStore('SearchCourse', () => {
  const initialState = {
    showSearch: false,
    showNowMap: false,
    showAllCourse: false,
    selectCourse: false,
  };

  const state = reactive({ ...initialState });

  const updateData = <K extends keyof typeof initialState>(
    item: K,
    value: (typeof initialState)[K]
  ) => {
    state[item] = value;
  };

  const $reset = () => {
    Object.assign(state, initialState);
  };

  return {
    ...toRefs(state),
    $reset,
    updateData,
  };
});
