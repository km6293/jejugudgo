import axios from 'axios';

const headers: Record<string, string> = {
  'Content-Type': 'application/json',
};

const handleAxiosError = (error: unknown) => {
  const errorCode =
    axios.isAxiosError(error) && error.response
      ? error.response.data.errorCode
      : null;
  throw { originalError: error, errorCode };
};

export const sendSms = async (name: string, phoneNumber: string) => {
  try {
    const url = `${process.env.VUE_APP_BASE_API}/api/v1/auth/sms/send`;
    const data = { name, phoneNumber };
    const response = await axios.post(url, data, {
      headers,
    });

    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

export const checkSms = async (
  name: string,
  phoneNumber: string,
  verificationCode: string
) => {
  console.log(name, phoneNumber, verificationCode);
  try {
    const url = `${process.env.VUE_APP_BASE_API}/api/v1/auth/sms/check`;
    const data = { name, phoneNumber, verificationCode };
    const response = await axios.post(url, data, {
      headers,
    });

    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};
