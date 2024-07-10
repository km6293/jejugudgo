import type { CSSProperties, Component } from 'vue';

export interface IButtonType {
  type?: 'submit' | 'reset';
  disabled?: boolean | false;
  text?: string | '';
  icon?: Component | null;
  style?: CSSProperties | null;
}
