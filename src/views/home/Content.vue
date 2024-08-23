<template>
  <Notification />
  <div class="home-container">
    <Header />
    <router-view />
    <!-- <footer></footer> -->
  </div>
</template>

<script setup lang="ts">
import { Notification } from '@/components';
import Header from './components/Header.vue';
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
</style>
