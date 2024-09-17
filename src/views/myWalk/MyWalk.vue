<template>
  <div class="container">
    <div class="header">
      <div class="header-icon"></div>
      <div>마이걷고</div>
      <div class="header-icon">
        <SettingIcon />
      </div>
    </div>
    <div class="contents"></div>
  </div>
</template>

<script setup lang="ts">
import { LogoIcon, SettingIcon } from '@/components';
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
}

.contents {
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  gap: 40px;
}

.container {
  position: relative;
}

.header-icon {
  height: 48px;
  width: 48px;
}
</style>
