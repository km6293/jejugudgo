<template>
  <nav>
    <NavItem
      v-for="item in navItems"
      :key="item.to"
      :to="item.to"
      :isActive="isActive(item.to)"
      :iconActive="item.iconActive"
      :iconInactive="item.iconInactive"
    >
      <span>{{ item.label }}</span>
    </NavItem>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router';
import NavItem from './NavItem.vue';
import { navItems } from './NavItems';

const route = useRoute();
const isActive = (path) => route.path.indexOf(path) > -1;
</script>

<style scoped>
nav {
  z-index: 1000;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: var(--color-neutral-900);
  padding: 16px 0;
  text-align: center;
  min-width: 280px;
  max-width: 768px;
  display: flex;
  justify-content: space-around;
}
</style>
