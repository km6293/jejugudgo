<template>
  <div class="find-id-container">
    <router-view />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.find-id-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 47.2rem;
  margin: 0 auto;
}
</style>
