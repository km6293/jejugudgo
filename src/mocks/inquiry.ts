import mock from '@/mocks/_mockInstance';

export function inquiry() {
  mock.onGet('/inquiry').reply(200, {
    test: 'inquiry',
  });
}
