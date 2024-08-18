import { autoHyphen } from './autoHyphen';
import { getCookie, setCookie, deleteCookie } from './cookies';
import { validateEmail } from './emailValidators';
import { errorMessages } from './errorMessages';
import { hasError } from './hasError';
import {
  saveToLocalStorage,
  getFromLocalStorage,
  removeFromLocalStorage,
  saveToSessionStorage,
  getFromSessionStorage,
  removeFromSessionStorage,
} from './storageHelper';
import {
  hasUppercase,
  hasNumber,
  hasSpecialChar,
  isValidLength,
  passwordsMatch,
} from './passwordValidators';
import { validatePhoneNumber } from './phoneValidators';

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
  saveToSessionStorage,
  getFromSessionStorage,
  removeFromSessionStorage,
  getCookie,
  setCookie,
  deleteCookie,
  errorMessages,
  hasError,
};
