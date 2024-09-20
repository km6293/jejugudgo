import axios from 'axios';
import { setCookie, hasError, getCookie } from '@/utils';
import { ILoginRequest } from '@/types/api';

export const login = async (data: ILoginRequest) => {
  try {
    const url = `${process.env.VUE_APP_BASE_API}/api/v1/auth/login`;
    const response = await axios.post(url, data);

    const accessToken = response.headers['authorization'];

    if (accessToken) {
      setCookie('Authorization', accessToken);
    }

    return response.status;
  } catch (error) {
    return hasError(error);
  }
};

export const userInfo = async () => {
  try {
    const response = await axios.get('/api/v1/auth/user', {
      headers: {
        Authorization: `Bearer ${getCookie('Authorization')}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch user info:', error);
  }
};
