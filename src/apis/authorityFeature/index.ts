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

export const sendSmsLater = async (name: string, phoneNumber: string) => {
  try {
    const url = `${process.env.VUE_APP_BASE_API}/api/v1/auth/sms/send/later`;
    const data = { name, phoneNumber };
    const response = await axios.post(url, data, {
      headers,
    });

    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

export const sendEmail = async (email: string) => {
  try {
    const url = `${process.env.VUE_APP_BASE_API}/api/v1/auth/authentication/send`;
    const response = await axios.post(
      url,
      { email },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    const errorCode =
      axios.isAxiosError(error) && error.response
        ? error.response.data.errorCode
        : null;
    throw { originalError: error, errorCode };
  }
};

export const checkEmail = async (email: string, authCode: string) => {
  try {
    const url = `${process.env.VUE_APP_BASE_API}/api/v1/auth/authentication/check`;
    const data = { email, authCode };
    const response = await axios.post(url, data, {
      headers,
    });

    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

export const findUserId = async (name: string, phoneNumber: string) => {
  try {
    const url = `${process.env.VUE_APP_BASE_API}/api/v1/auth/find/id`;
    const data = { name, phoneNumber };
    const response = await axios.post(url, data);

    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

export const sendEmailLater = async (email: string, authCode: string) => {
  try {
    const url = `${process.env.VUE_APP_BASE_API}/api/v1/auth/authentication/check/later`;
    const data = { email, authCode };
    const response = await axios.post(url, data);

    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};

export const checkId = async (email: string) => {
  try {
    const url = `${process.env.VUE_APP_BASE_API}/api/v1/auth/check/id`;
    const data = { email };
    const response = await axios.post(url, data);

    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
};
