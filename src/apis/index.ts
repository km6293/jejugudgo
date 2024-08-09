import axios from 'axios';
import { getCookie, setCookie } from '@/utils/cookies';

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 1000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = getCookie('Authorization');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response &&
      error.response.status === 401 &&
      error.response.data?.errorCode === 'TOKEN_01' &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const response = await axios.post(
          `${process.env.VUE_APP_BASE_API}/auth/token/refresh`,
          null,
          { withCredentials: true }
        );
        const accessToken = response.headers['authorization'];
        setCookie('Authorization', accessToken);

        axiosInstance.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${accessToken}`;
        originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;

        return axiosInstance(originalRequest);
      } catch (e) {
        return Promise.reject(e);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
