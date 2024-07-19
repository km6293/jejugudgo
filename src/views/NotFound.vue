<template>
  <div class="not-found">
    <img
      src="../assets/404.png"
      alt="404 Error"
      class="not-found-image"
    />
    <h1>404 - Page Not Found</h1>
    <p>비정상적인 경로로 진입하였습니다.</p>
    <router-link
      to="/"
      class="home-link"
      >홈으로 돌아가기</router-link
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NotFound',
});
</script>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  text-align: center;
  padding: 20px;
}

.not-found-image {
  width: 375px;
  margin-bottom: 20px;
}

h1 {
  color: #ffffff;
  font-size: 2.5em;
  margin-bottom: 10px;
}

p {
  color: #f8f9fa;
  font-size: 1.3em;
  margin-bottom: 20px;
}

.home-link {
  display: inline-block;
  padding: 20px 40px;
  font-size: 1.5em;
  color: #000000;
  background-color: #f8f9fa;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.home-link:hover {
  background-color: #e2e6ea;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
