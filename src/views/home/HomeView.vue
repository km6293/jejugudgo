<template>
  <div class="home">
    <h1>This is home page</h1>
    <div class="map-wrapper">
      <KakaoMap />
    </div>
  </div>
</template>

<script setup lang="ts">
import { KakaoMap } from '@/components';
</script>

<style scoped>
.map-wrapper {
  height: 400px;
  width: calc(100% - 50px);
  border: 1px solid #ccc;
  margin: 0 auto;
}

@media (max-width: 600px) {
  .map-wrapper {
    width: calc(100% - 20px);
  }
}
</style>
