import axios from 'axios';

const handleAxiosError = (error: unknown) => {
  const errorCode =
    axios.isAxiosError(error) && error.response
      ? error.response.data.errorCode
      : null;
  throw { originalError: error, errorCode };
};

export const login = async (email: string, password: string) => {
  try {
    const url = `${process.env.VUE_APP_BASE_API}/api/v1/auth/login`;
    const data = { email, password };
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    const response = await axios.post(url, data, {
      headers,
    });

    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};
