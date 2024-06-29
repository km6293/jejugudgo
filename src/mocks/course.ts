import mock from '@/mocks/_mockInstance';

export function course() {
  mock.onGet('/course').reply(200, {
    test: 'course',
  });
}
