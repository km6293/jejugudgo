<template>
  <Notification />
  <div class="home-container">
    <HomeHeader />
    <router-view />
    <!-- <footer></footer> -->
  </div>
</template>

<script setup lang="ts">
import { Notification } from '@/components';
import HomeHeader from './components/HomeHeader.vue';
import axiosInstance from '@/apis';

// const test = async () => {
//   try {
//     const response = await axiosInstance.get('/planners/course/user');
//     return response.data;
//   } catch (error) {
//     console.log(111);
//     return error;
//   }
// };

// test();
</script>

<style scoped>
.home-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
}
</style>
