import { defineStore } from 'pinia';
import { reactive, toRefs } from 'vue';

export const useSearchCourseStore = defineStore('SearchCourse', () => {
  const initialState = {
    input: '',
    showSearch: false,
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
