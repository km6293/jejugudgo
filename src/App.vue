<template>
  <transition
    name="fade"
    mode="out-in"
  >
    <div class="app-template">
      <template v-if="showSplash">
        <SplashScreen />
      </template>
      <template v-else-if="!showUserGuide">
        <WelcomePage />
      </template>
      <template v-else>
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
      </template>
    </div>
  </transition>
</template>

<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { NavBar, AppBar } from '@/components';
import SplashScreen from '@/views/onboarding/SplashScreen.vue';
import WelcomePage from '@/views/onboarding/WelcomePage.vue';
import { useRootStore } from '@/stores/rootStore';

const rootStore = useRootStore();
const { showSplash, showUserGuide } = storeToRefs(rootStore);

onMounted(() => {
  setTimeout(() => {
    showSplash.value = false;
  }, 2000);
});
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
  padding-bottom: 80px;
}

.content::-webkit-scrollbar {
  display: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s ease, transform 1.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
