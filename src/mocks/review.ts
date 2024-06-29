import mock from '@/mocks/_mockInstance';

export function review() {
  mock.onGet('/review').reply(200, {
    test: 'review',
  });
}
