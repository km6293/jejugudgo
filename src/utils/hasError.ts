import axios, { AxiosError } from 'axios';

export const hasError = (
  error: string | Error | AxiosError | unknown | undefined = ''
): number | string | null => {
  if (!error) {
    return null;
  }

  try {
    if (axios.isAxiosError(error)) {
      const errorCode = error.response?.data.errorCode;
      if (errorCode) {
        return errorCode;
      } else {
        return 'An unknown error occurred';
      }
    } else if (error instanceof Error) {
      return error.message;
    } else if (typeof error === 'string') {
      return error;
    } else {
      return JSON.stringify(error);
    }
  } catch (e) {
    return 'An unknown error occurred';
  }
};
