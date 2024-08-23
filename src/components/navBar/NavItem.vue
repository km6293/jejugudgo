<template>
  <router-link
    :to="to"
    class="nav-item caption-regular"
    :class="{ active: isActive }"
  >
    <div class="nav-icon">
      <component :is="props.isActive ? iconActive : iconInactive" />
      <slot></slot>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue';
import { NavItemProps } from './NavItemTypes';

const props = withDefaults(defineProps<NavItemProps>(), {
  isActive: false,
});
</script>

<style scoped>
.nav-item {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--color-neutral-500);
}

.nav-item.active {
  color: var(--color-neutral-100);
  font-family: var(--font-bold);
}

.nav-item span {
  font-size: 1.1rem;
  height: 1.5rem;
  font-family: var(--font-regular);
}

.nav-icon {
  height: 48px;
  width: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
</style>
