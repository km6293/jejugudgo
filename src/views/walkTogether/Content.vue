<template>
  <div class="walk-together">
    <div class="header">
      <LogoIcon
        :width="106"
        :height="20"
      />
      <Notification />
    </div>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { Notification, LogoIcon } from '@/components';
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
}

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
