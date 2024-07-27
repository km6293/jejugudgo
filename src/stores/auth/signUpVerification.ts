import { computed, reactive, toRefs } from 'vue';
import { defineStore } from 'pinia';
import { InputState } from '@/components/input/InputTypes';

export const useSignUpVerificationStore = defineStore(
  'signUpVerification',
  () => {
    const initialState = {
      name: '',
      nameState: 'default' as InputState,
      phoneNumber: '',
      phoneNumberState: 'default' as InputState,
      code: '',
      codeState: 'default' as InputState,
      codeMessege: '',
    };

    const state = reactive({ ...initialState });

    const $reset = () => {
      Object.assign(state, initialState);
    };

    const cleanPhoneNumber = computed(() =>
      state.phoneNumber.replace(/-/g, '')
    );

    return {
      ...toRefs(state),
      $reset,
      cleanPhoneNumber,
    };
  }
);
