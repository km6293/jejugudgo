import type { CSSProperties } from 'vue';

export interface IInputType {
  modelValue: string | number;
  label?: string;
  type?: 'text' | 'password';
  placeholder?: string;
  message?: string;
  state?: 'default' | 'focused' | 'success' | 'filled' | 'error';
  readonly?: boolean;
  style?: CSSProperties | null;
  success?: (value: string | number) => boolean;
  error?: (value: string | number) => boolean;
}
