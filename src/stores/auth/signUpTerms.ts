import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useSignUpTermsStore = defineStore('signUpTerms', () => {
  const service = ref(false);
  const location = ref(false);
  const marketing = ref(false);

  const allChecked = computed(
    () => service.value && location.value && marketing.value
  );
  const allRequiredChecked = computed(() => service.value && location.value);

  const toggleTerm = (term: 'service' | 'location' | 'marketing') => {
    if (term === 'service') {
      service.value = !service.value;
    } else if (term === 'location') {
      location.value = !location.value;
    } else if (term === 'marketing') {
      marketing.value = !marketing.value;
    }
  };

  const toggleAllTerms = (value: boolean) => {
    service.value = value;
    location.value = value;
    marketing.value = value;
  };

  const resetTerms = () => {
    service.value = false;
    location.value = false;
    marketing.value = false;
  };

  return {
    service,
    location,
    marketing,
    allChecked,
    allRequiredChecked,
    toggleTerm,
    toggleAllTerms,
    resetTerms,
  };
});
