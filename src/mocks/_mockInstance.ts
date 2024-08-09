import MockAdapter from 'axios-mock-adapter';
import axiosInstance from '@/apis';

const mock = new MockAdapter(axiosInstance);
export default mock;
