import { ref } from 'vue';
import { IInputType } from '@/components/input/InputTypes';

type InputStateType = NonNullable<IInputType['state']>;

const email = ref('');
const inputState = ref<InputStateType>('default');
const inputMessage = ref('');

export function useSignupState() {
  return {
    email,
    inputState,
    inputMessage,
  };
}
