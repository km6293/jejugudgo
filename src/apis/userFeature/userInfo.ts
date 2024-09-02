import axios from 'axios';

const handleAxiosError = (error: unknown) => {
  const errorCode =
    axios.isAxiosError(error) && error.response
      ? error.response.data.errorCode
      : null;
  throw { originalError: error, errorCode };
};

export const findID = async (name: string, phoneNumber: string) => {
  try {
    const url = `${process.env.VUE_APP_BASE_API}/api/v1/auth/find/id`;
    const data = { name, phoneNumber };
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

export const findPassword = async (
  userId: string,
  password: string,
  name: string
) => {
  try {
    const url = `${process.env.VUE_APP_BASE_API}/api/v1/auth/user/${userId}`;
    const data = { password, name };

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    const response = await axios.patch(url, data, { headers });
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};
