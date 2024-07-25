<template>
  <div class="app-template">
    <AppBar v-if="!$route.meta.hideAppBar" />
    <div
      :class="{
        content: true,
        'with-appbar': !$route.meta.hideAppBar,
        'with-navbar': !$route.meta.hideNavBar,
      }"
    >
      <router-view />
    </div>
    <NavBar v-if="!$route.meta.hideNavBar" />
  </div>
</template>

<script setup>
import { NavBar, AppBar } from '@/components';
</script>

<style lang="scss">
.app-template {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--color-background);
}

.content {
  flex: 1;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.content.with-appbar {
  margin-top: 48px;
}

.content.with-navbar {
  padding-bottom: 56px;
}

.content::-webkit-scrollbar {
  display: none;
}
</style>
