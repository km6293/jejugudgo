<template>
  <div>
    <p>로그인 처리 중...</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { setCookie } from '@/utils';

export default defineComponent({
  setup() {
    const router = useRouter();

    onMounted(() => {
      const query = new URLSearchParams(window.location.search);

      const token = query.get('token');
      const userId = query.get('userId');
      const email = query.get('email');
      const nickname = query.get('nickname');
      const name = query.get('name');
      const numberTag = query.get('numberTag');
      const profileImageUrl = query.get('profileImageUrl');
      const userRole = query.get('userRole');

      if (token) {
        setCookie('Authorization', token);

        router.push('/home');
      } else {
        console.error('로그인 오류: 토큰이 없습니다.');
      }
    });

    return {};
  },
});
</script>
