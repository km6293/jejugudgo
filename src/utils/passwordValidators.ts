export const hasUppercase = (value: string): boolean => /[A-Z]/.test(value);
export const hasNumber = (value: string): boolean => /[0-9]/.test(value);
export const hasSpecialChar = (value: string): boolean =>
  /[^A-Za-z0-9]/.test(value);
export const isValidLength = (value: string): boolean =>
  value.length >= 8 && value.length <= 20;
export const passwordsMatch = (
  password: string,
  confirmPassword: string
): boolean => password === confirmPassword && password.length !== 0;
