import mock from '@/mocks/_mockInstance';

export function user() {
  mock.onGet('/user').reply(200, {
    test: 'user',
  });
}
