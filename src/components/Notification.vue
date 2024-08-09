<template>
  <div class="notification">
    <div class="notification-icon">
      <NotificationIcon />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { NotificationIcon } from '@/components';
</script>

<style scoped lang="scss">
.notification {
  display: flex;
  justify-content: end;
}

.notification-icon {
  width: 48px;
  height: 48px;
  text-align: center;
  align-content: center;
}
</style>
