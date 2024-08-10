import axiosInstance from '@/apis';
import { setCookie, hasError } from '@/utils';
import { ILoginRequest } from '@/types/api';

export const login = async (data: ILoginRequest) => {
  try {
    const response = await axiosInstance.post(`/auth/login`, data);
    const accessToken = response.headers['authorization'];

    if (accessToken) {
      setCookie('Authorization', accessToken);
    }

    return response.data;
  } catch (error) {
    return hasError(error);
  }
};
