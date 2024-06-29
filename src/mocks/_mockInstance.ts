import MockAdapter from 'axios-mock-adapter';
import { instance } from '@/apis';

const mock = new MockAdapter(instance);
export default mock;
