import mock from '@/mocks/_mockInstance';

export function community() {
  mock.onGet('/community').reply(200, {
    test: 'community',
  });
}
