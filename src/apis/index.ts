import axios, { AxiosRequestConfig, AxiosError } from 'axios';

export const instance = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_BASE_URL,
  withCredentials: true,
});

axios.defaults.withCredentials = true;

// 에러 핸들링 함수
const handleErrorResponse = (error: AxiosError) => {
  if (error.response && error.response.status === 401) {
    alert('세션이 만료되었습니다. 다시 로그인 해주세요.');
    window.location.href = '/';
  }
  return Promise.reject(error);
};

// 응답 인터셉터 설정
instance.interceptors.response.use((response) => response, handleErrorResponse);

// 요청 인터셉터 설정
instance.interceptors.request.use(
  (config) => {
    const token = document.cookie
      .split('; ')
      .find((row) => row.startsWith('accessToken='))
      ?.split('=')[1];

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// API 요청 함수
const get = (url: string, config: AxiosRequestConfig = {}) =>
  instance.get(url, config);
const post = (url: string, data = {}, config: AxiosRequestConfig = {}) =>
  instance.post(url, data, config);
const put = (url: string, data = {}, config: AxiosRequestConfig = {}) =>
  instance.put(url, data, config);
const del = (url: string, config: AxiosRequestConfig = {}) =>
  instance.delete(url, config);
const patch = (url: string, data = {}, config: AxiosRequestConfig = {}) =>
  instance.patch(url, data, config);

export const apiClient = { get, post, put, delete: del, patch };
