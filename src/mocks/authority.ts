import mock from '@/mocks/_mockInstance';

export function authority() {
  mock.onGet('/authority').reply(200, {
    test: 'authority',
  });
}
