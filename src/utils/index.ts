import { autoHyphen } from './autoHyphen';
import { validateEmail } from './emailValidators';
import {
  hasUppercase,
  hasNumber,
  hasSpecialChar,
  isValidLength,
  passwordsMatch,
} from './passwordValidators';
import { validatePhoneNumber } from './phoneValidators';
import {
  saveToLocalStorage,
  getFromLocalStorage,
  removeFromLocalStorage,
} from './localStorageHelper';

export {
  autoHyphen,
  validateEmail,
  hasUppercase,
  hasNumber,
  hasSpecialChar,
  isValidLength,
  passwordsMatch,
  validatePhoneNumber,
  saveToLocalStorage,
  getFromLocalStorage,
  removeFromLocalStorage,
};
