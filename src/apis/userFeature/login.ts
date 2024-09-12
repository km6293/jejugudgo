import axios from 'axios';
import { setCookie, hasError } from '@/utils';
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
