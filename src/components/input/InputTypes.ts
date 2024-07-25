import type { CSSProperties } from 'vue';

export interface IInputType {
  modelValue: string | number;
  label?: string;
  type?: 'text' | 'password';
  placeholder?: string;
  message?: string;
  state?: 'default' | 'success' | 'filled' | 'error' | 'disabled';
  readonly?: boolean;
  style?: CSSProperties | null;
  maxlength?: string | number;
}

export type InputState = NonNullable<IInputType['state']>;
