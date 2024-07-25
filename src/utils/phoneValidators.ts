export const validatePhoneNumber = (number: string) => {
  const phoneRegex = /^01\d{8,9}$/;
  return phoneRegex.test(number);
};
