<template>
  <div class="not-found">
    <div class="not-found-content">
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
  justify-content: center;
  align-items: center;
  height: 60vh;
  text-align: center;
  background-color: #f8f9fa;
}

.not-found-content {
  max-width: 800px;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.5s ease-in-out;
}

.not-found-image {
  width: 250px;
  margin-bottom: 20px;
}

h1 {
  color: #343a40;
  margin-bottom: 10px;
}

p {
  color: #6c757d;
  margin-bottom: 20px;
}

.home-link {
  display: inline-block;
  padding: 10px 20px;
  color: #fff;
  background-color: #007bff;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.home-link:hover {
  background-color: #0056b3;
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
