import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { InputState } from '@/components/input/InputTypes';

export const useSignUpVerificationStore = defineStore(
  'signUpVerification',
  () => {
    const name = ref('');
    const nameState = ref<InputState>('default');
    const phoneNumber = ref('');
    const phoneNumberState = ref<InputState>('default');
    const code = ref('');
    const codeState = ref<InputState>('default');
    const codeMessege = ref('');
    const cleanPhoneNumber = computed(() =>
      phoneNumber.value.replace(/-/g, '')
    );

    return {
      name,
      nameState,
      phoneNumber,
      phoneNumberState,
      code,
      codeState,
      codeMessege,
      cleanPhoneNumber,
    };
  }
);
