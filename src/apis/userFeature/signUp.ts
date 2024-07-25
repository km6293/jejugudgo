import axios from 'axios';

const handleAxiosError = (error: unknown) => {
  const errorCode =
    axios.isAxiosError(error) && error.response
      ? error.response.data.errorCode
      : null;
  throw { originalError: error, errorCode };
};

export const signUp = async (
  email: string,
  password: string,
  name: string,
  phoneNumber: string
) => {
  try {
    const url = `${process.env.VUE_APP_BASE_API}/api/v1/auth/signup`;
    const data = { email, password, nickname: 'test', name, phoneNumber };
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    const response = await axios.post(url, data, {
      headers,
    });

    return response.data;
  } catch (error) {
    handleAxiosError;
  }
};
