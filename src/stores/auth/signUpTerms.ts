import { computed, reactive, toRefs } from 'vue';
import { defineStore } from 'pinia';

export const useSignUpTermsStore = defineStore('signUpTerms', () => {
  const initialState = {
    service: false,
    location: false,
    marketing: false,
  };

  const state = reactive({ ...initialState });

  const allChecked = computed(
    () => state.service && state.location && state.marketing
  );
  const allRequiredChecked = computed(() => state.service && state.location);

  const toggleTerm = (term: 'service' | 'location' | 'marketing') => {
    state[term] = !state[term];
  };

  const toggleAllTerms = (value: boolean) => {
    state.service = value;
    state.location = value;
    state.marketing = value;
  };

  const $reset = () => {
    Object.assign(state, initialState);
  };

  return {
    ...toRefs(state),
    $reset,
    allChecked,
    allRequiredChecked,
    toggleTerm,
    toggleAllTerms,
  };
});
