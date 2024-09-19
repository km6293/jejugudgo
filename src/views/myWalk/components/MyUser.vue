<template>
  <div class="user">
    <CardImage
      :test="'40x40'"
      :icon="false"
      :imageStyle="{
        borderRadius: '1000px',
      }"
    />
    <div class="user-name heading3-bold">
      안녕하세요, <span class="name-highlight">test</span>님
    </div>
    <EditIcon color="#959595" />
  </div>
</template>

<script setup lang="ts">
import { CardImage, EditIcon } from '@/components';
</script>

<style scoped>
.user {
  display: flex;
  align-items: center;
  gap: var(--margin-s2);
}

.user-name {
  color: var(--color-neutral-100);
}

.name-highlight {
  color: var(--color-button-primary);
}
</style>
